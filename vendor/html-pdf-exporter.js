/**
 * html-pdf-exporter.js
 *
 * Browser-only подготовка HTML к печати и сохранению в PDF.
 *
 * Не требует:
 * - backend;
 * - Cloudflare Worker;
 * - Puppeteer;
 * - сторонних библиотек.
 *
 * Важно:
 * window.print() открывает системный print dialog.
 * Пользователь самостоятельно выбирает Save as PDF.
 */

class HtmlPdfExporter {
  /**
   * @param {Object} options
   *
   * @param {string|HTMLElement} options.root
   * Корневой элемент документа, например "#cv" или ".page".
   *
   * @param {string} [options.pageSize="A4"]
   * Размер страницы для @page.
   *
   * @param {string} [options.pageMargin="10mm"]
   * Поля страницы для @page.
   *
   * @param {string[]} [options.scrollSelectors]
   * Scroll-контейнеры, которые нужно полностью раскрыть.
   *
   * @param {string[]} [options.atomicSelectors]
   * Небольшие элементы, которые желательно переносить целиком.
   *
   * @param {string[]} [options.flowSelectors]
   * Длинные элементы, которые разрешается разбивать между страницами.
   *
   * @param {string[]} [options.keepWithNextSelectors]
   * Заголовки, которые нельзя оставлять внизу страницы отдельно
   * от следующего блока.
   *
   * @param {string[]} [options.contactSelectors]
   * Контейнеры контактной информации в header.
   *
   * @param {number} [options.contactFontScale=1.14]
   * Коэффициент увеличения фактического размера шрифта контактов.
   * Например, 1.14 означает увеличение примерно на 14%.
   *
   * @param {number} [options.contactMinFontPx=12]
   * Минимальный размер контактов после масштабирования.
   *
   * @param {number} [options.contactMaxFontPx=18]
   * Максимальный размер контактов после масштабирования.
   *
   * @param {boolean} [options.contactApplyToChildren=true]
   * Наследовать увеличенный размер внутри span/a/li/p контактов.
   *
   * @param {boolean} [options.preserveColors=true]
   * Добавлять print-color-adjust и запрещать forced-colors заменять
   * исходную палитру.
   *
   * @param {boolean} [options.preserveFilters=true]
   * Сохранять filter/backdrop-filter исходного дизайна.
   *
   * @param {boolean} [options.removeRootTransform=true]
   * Убирать transform только с корневого документа.
   * Это полезно, если экранный preview использует scale().
   *
   * @param {boolean} [options.avoidListItemBreaks=true]
   * Не разрывать отдельный li между страницами.
   *
   * @param {boolean} [options.expandDetails=true]
   * Раскрывать элементы details.
   *
   * @param {Function} [options.beforeExport]
   * Hook перед созданием print-копии.
   *
   * @param {Function} [options.prepareClone]
   * Hook для дополнительного изменения только print-копии.
   *
   * @param {Function} [options.afterExport]
   * Hook после закрытия print dialog.
   *
   * @param {Document} [options.doc]
   * Document object для работы (по умолчанию document).
   *
   * @param {Window} [options.win]
   * Window object для работы (по умолчанию window).
   */
  constructor(options = {}) {
    if (!options.root) {
      throw new Error(
        "HtmlPdfExporter: option 'root' is required"
      );
    }

    this.doc = options.doc || document;
    this.win = options.win || window;

    this.options = {
      root: options.root,

      pageSize: options.pageSize ?? "A4",
      pageMargin: options.pageMargin ?? "10mm",

      scrollSelectors: options.scrollSelectors ?? [
        "[data-pdf-scroll]",
        ".pdf-scroll"
      ],

      atomicSelectors: options.atomicSelectors ?? [
        "[data-pdf-atomic]",
        ".pdf-atomic"
      ],

      flowSelectors: options.flowSelectors ?? [
        "[data-pdf-flow]",
        ".pdf-flow"
      ],

      keepWithNextSelectors:
        options.keepWithNextSelectors ?? [
          "[data-pdf-keep-with-next]",
          ".pdf-keep-with-next"
        ],

      /*
       * Универсальные селекторы контактов.
       * Первый селектор соответствует вашему CV-шаблону.
       */
      contactSelectors: options.contactSelectors ?? [
        ".leadex-hero-contacts",
        "[data-pdf-contact]",
        ".header-contacts",
        ".contact-info"
      ],

      contactFontScale:
        this.toPositiveNumber(
          options.contactFontScale,
          1.14
        ),

      contactMinFontPx:
        this.toPositiveNumber(
          options.contactMinFontPx,
          12
        ),

      contactMaxFontPx:
        this.toPositiveNumber(
          options.contactMaxFontPx,
          18
        ),

      contactApplyToChildren:
        options.contactApplyToChildren !== false,

      preserveColors:
        options.preserveColors !== false,

      preserveFilters:
        options.preserveFilters !== false,

      removeRootTransform:
        options.removeRootTransform !== false,

      avoidListItemBreaks:
        options.avoidListItemBreaks !== false,

      expandDetails:
        options.expandDetails !== false,

      beforeExport: options.beforeExport,
      prepareClone: options.prepareClone,
      afterExport: options.afterExport
    };

    /*
     * Защита от перепутанных min/max.
     */
    if (
      this.options.contactMinFontPx >
      this.options.contactMaxFontPx
    ) {
      [
        this.options.contactMinFontPx,
        this.options.contactMaxFontPx
      ] = [
        this.options.contactMaxFontPx,
        this.options.contactMinFontPx
      ];
    }

    const uniqueId =
      Math.random().toString(36).slice(2);

    this.portalId =
      `html-pdf-portal-${uniqueId}`;

    this.styleId =
      `html-pdf-style-${uniqueId}`;
  }

  /**
   * Открывает системный диалог печати.
   *
   * @param {Object} options
   * @param {string} [options.documentTitle]
   * В большинстве Chromium-браузеров title используется
   * как предлагаемое имя PDF.
   */
  async print({
    documentTitle = this.doc.title
  } = {}) {
    const originalTitle = this.doc.title;

    let portal = null;
    let style = null;

    try {
      await this.runHook("beforeExport", {
        mode: "print",
        exporter: this
      });

      const source = this.getRootElement();

      const clone =
        await this.createPreparedClone(source);

      portal =
        this.createPrintPortal(
          source,
          clone
        );

      style =
        this.injectPrintStyle();

      this.doc.title = documentTitle;

      this.doc.documentElement.classList.add(
        "html-pdf-export-active"
      );

      await this.waitUntilReady(portal);
      await this.waitForPrintDialog();
    } finally {
      this.doc.title = originalTitle;

      this.doc.documentElement.classList.remove(
        "html-pdf-export-active"
      );

      portal?.remove();
      style?.remove();

      await this.runHook("afterExport", {
        mode: "print",
        exporter: this
      });
    }
  }

  /**
   * Возвращает исходный DOM-элемент.
   */
  getRootElement() {
    const element =
      typeof this.options.root === "string"
        ? this.doc.querySelector(
            this.options.root
          )
        : this.options.root;

    if (!(element instanceof this.win.HTMLElement)) {
      throw new Error(
        "HtmlPdfExporter: root element not found: " +
        String(this.options.root)
      );
    }

    return element;
  }

  /**
   * Создаёт print-копию и применяет к ней только
   * PDF-специфические изменения.
   */
  async createPreparedClone(source) {
    const clone =
      source.cloneNode(true);

    /*
     * Убираем ID только у корневого клона,
     * чтобы не создать второй элемент с тем же ID.
     *
     * Внутренние ID сохраняются, поскольку CSS и SVG
     * могут ссылаться на них.
     */
    clone.removeAttribute("id");

    clone.setAttribute(
      "data-pdf-document-root",
      ""
    );

    this.copyFormValues(
      source,
      clone
    );

    this.replaceCanvasWithImages(
      source,
      clone
    );

    this.prepareScrollContainers(
      clone
    );

    this.preparePageBreaks(
      clone
    );

    this.prepareHiddenElements(
      clone
    );

    /*
     * Увеличение контактов выполняется самим модулем.
     *
     * Размер берётся из getComputedStyle() оригинального
     * элемента и умножается на contactFontScale.
     */
    this.prepareHeaderContacts(
      source,
      clone
    );

    if (this.options.expandDetails) {
      clone
        .querySelectorAll("details")
        .forEach((details) => {
          details.open = true;
          details.setAttribute(
            "open",
            ""
          );
        });
    }

    /*
     * transform: scale(...) может нарушить расчёт страниц.
     * Поэтому удаляем только transform корневого preview.
     *
     * Цвета, opacity и filter при этом не меняются.
     */
    if (this.options.removeRootTransform) {
      clone.style.setProperty(
        "transform",
        "none",
        "important"
      );
    }

    /*
     * Старый вариант безусловно ставил filter:none.
     * Это могло менять цвета, тени и рендеринг баннера.
     *
     * Теперь filter удаляется только при явном
     * preserveFilters:false.
     */
    if (!this.options.preserveFilters) {
      clone.style.setProperty(
        "filter",
        "none",
        "important"
      );

      clone.style.setProperty(
        "-webkit-filter",
        "none",
        "important"
      );

      clone.style.setProperty(
        "backdrop-filter",
        "none",
        "important"
      );

      clone.style.setProperty(
        "-webkit-backdrop-filter",
        "none",
        "important"
      );
    }

    await this.runHook(
      "prepareClone",
      {
        source,
        clone,
        exporter: this
      }
    );

    return clone;
  }

  /**
   * Увеличивает контактную информацию в header.
   *
   * Изменения применяются только к print-копии.
   */
  prepareHeaderContacts(
    source,
    clone
  ) {
    const processed =
      new Set();

    for (
      const selector
      of this.options.contactSelectors
    ) {
      let sourceElements;
      let clonedElements;

      try {
        sourceElements =
          source.querySelectorAll(
            selector
          );

        clonedElements =
          clone.querySelectorAll(
            selector
          );
      } catch (error) {
        console.warn(
          "HtmlPdfExporter: invalid contact selector:",
          selector,
          error
        );

        continue;
      }

      sourceElements.forEach(
        (sourceElement, index) => {
          const clonedElement =
            clonedElements[index];

          if (
            !clonedElement ||
            processed.has(clonedElement)
          ) {
            return;
          }

          processed.add(clonedElement);

          const computed =
            this.win.getComputedStyle(
              sourceElement
            );

          const sourceFontPx =
            Number.parseFloat(
              computed.fontSize
            );

          if (
            !Number.isFinite(
              sourceFontPx
            )
          ) {
            return;
          }

          const scaledFontPx =
            sourceFontPx *
            this.options.contactFontScale;

          const targetFontPx =
            Math.min(
              this.options.contactMaxFontPx,
              Math.max(
                this.options.contactMinFontPx,
                scaledFontPx
              )
            );

          clonedElement.style.setProperty(
            "font-size",
            `${targetFontPx.toFixed(2)}px`,
            "important"
          );

          /*
           * Не задаём новый цвет, opacity, font-weight,
           * letter-spacing или font-family.
           *
           * Благодаря этому контакты остаются визуально
           * частью исходного дизайна.
           */
          if (
            this.options.contactApplyToChildren
          ) {
            clonedElement
              .querySelectorAll(
                "span, a, p, li"
              )
              .forEach((child) => {
                child.style.setProperty(
                  "font-size",
                  "inherit",
                  "important"
                );

                child.style.setProperty(
                  "line-height",
                  "inherit",
                  "important"
                );
              });
          }

          clonedElement.setAttribute(
            "data-pdf-contact-enhanced",
            ""
          );
        }
      );
    }
  }

  /**
   * Раскрывает scroll-контейнеры.
   */
  prepareScrollContainers(root) {
    for (
      const selector
      of this.options.scrollSelectors
    ) {
      let elements;

      try {
        elements =
          root.querySelectorAll(
            selector
          );
      } catch (error) {
        console.warn(
          "HtmlPdfExporter: invalid scroll selector:",
          selector,
          error
        );

        continue;
      }

      elements.forEach(
        (element) => {
          element.classList.add(
            "html-pdf-scroll-expanded"
          );

          const properties = {
            height: "auto",
            "min-height": "0",
            "max-height": "none",
            overflow: "visible",
            "overflow-x": "visible",
            "overflow-y": "visible",
            contain: "none",
            "content-visibility": "visible"
          };

          for (
            const [property, value]
            of Object.entries(
              properties
            )
          ) {
            element.style.setProperty(
              property,
              value,
              "important"
            );
          }
        }
      );
    }
  }

  /**
   * Добавляет классы для управления
   * разрывами страниц.
   */
  preparePageBreaks(root) {
    this.addClassBySelectors(
      root,
      this.options.atomicSelectors,
      "html-pdf-atomic"
    );

    this.addClassBySelectors(
      root,
      this.options.flowSelectors,
      "html-pdf-flow"
    );

    this.addClassBySelectors(
      root,
      this.options.keepWithNextSelectors,
      "html-pdf-keep-with-next"
    );

    if (
      this.options.avoidListItemBreaks
    ) {
      root
        .querySelectorAll("li")
        .forEach((element) => {
          element.classList.add(
            "html-pdf-list-item"
          );
        });
    }
  }

  /**
   * Удаляет из print-копии screen-only элементы.
   */
  prepareHiddenElements(root) {
    root
      .querySelectorAll(
        "[data-pdf-hide], " +
        ".pdf-screen-only"
      )
      .forEach((element) => {
        element.remove();
      });

    root
      .querySelectorAll(
        "[data-pdf-show], " +
        ".pdf-only"
      )
      .forEach((element) => {
        element.style.setProperty(
          "display",
          "initial",
          "important"
        );
      });
  }

  addClassBySelectors(
    root,
    selectors,
    className
  ) {
    for (
      const selector of selectors
    ) {
      let elements;

      try {
        elements =
          root.querySelectorAll(
            selector
          );
      } catch (error) {
        console.warn(
          "HtmlPdfExporter: invalid selector:",
          selector,
          error
        );

        continue;
      }

      elements.forEach(
        (element) => {
          element.classList.add(
            className
          );
        }
      );
    }
  }

  /**
   * Создаёт временный print portal.
   *
   * В экранном режиме его ширина равна фактической
   * ширине исходного документа. Это уменьшает вероятность
   * преждевременного responsive-reflow до вызова print().
   */
  createPrintPortal(
    source,
    clone
  ) {
    const portal =
      this.doc.createElement("div");

    const sourceRect =
      source.getBoundingClientRect();

    portal.id =
      this.portalId;

    portal.className =
      "html-pdf-print-portal";

    portal.setAttribute(
      "aria-hidden",
      "true"
    );

    if (sourceRect.width > 0) {
      portal.style.width =
        `${sourceRect.width}px`;
    }

    /*
     * Важно: не задаём background:#fff.
     * Print-копия сохраняет собственный фон и фоновые
     * изображения исходного шаблона.
     */
    portal.style.background =
      "transparent";

    portal.appendChild(clone);
    this.doc.body.appendChild(portal);

    return portal;
  }

  /**
   * Подключает временный print CSS.
   */
  injectPrintStyle() {
    const style =
      this.doc.createElement("style");

    style.id =
      this.styleId;

    style.textContent =
      this.buildPrintCss();

    this.doc.head.appendChild(
      style
    );

    return style;
  }

  /**
   * Формирует print CSS.
   */
  buildPrintCss() {
    const colorPreservationCss =
      this.options.preserveColors
        ? `
          /*
           * Просим Chromium печатать исходные цвета,
           * градиенты и фоновые изображения максимально
           * близко к экранному варианту.
           *
           * forced-color-adjust:none защищает дизайн
           * от автоматической замены палитры режимом
           * forced colors / high contrast.
           */
          #${this.portalId},
          #${this.portalId} *,
          #${this.portalId} *::before,
          #${this.portalId} *::after {
            -webkit-print-color-adjust:
              exact !important;

            print-color-adjust:
              exact !important;

            forced-color-adjust:
              none !important;
          }
        `
        : "";

    return `
      @page {
        size: ${this.options.pageSize};
        margin: ${this.options.pageMargin};
      }

      /*
       * До начала печати копия находится далеко
       * за пределами viewport.
       */
      .html-pdf-print-portal {
        position: fixed;
        left: -100000px;
        top: 0;

        min-height: 1px;

        visibility: hidden;
        pointer-events: none;

        /*
         * Не устанавливаем белый фон.
         */
        background: transparent;

        z-index: -2147483648;
      }

      @media print {
        /*
         * Печатается только подготовленная копия.
         */
        body > *:not(#${this.portalId}) {
          display: none !important;
        }

        #${this.portalId} {
          display: block !important;

          position: static !important;
          left: auto !important;
          top: auto !important;

          width: auto !important;
          min-height: 0 !important;

          visibility: visible !important;
          pointer-events: auto !important;

          /*
           * Не переопределяем цвет и фон документа.
           */
          background: transparent !important;

          z-index: auto !important;
        }

        /*
         * Только layout-сброс.
         *
         * Здесь намеренно отсутствуют:
         * background:#fff;
         * color:#000;
         * filter:none;
         * opacity:1;
         */
        html,
        body {
          width: auto !important;
          min-width: 0 !important;

          height: auto !important;
          min-height: 0 !important;
          max-height: none !important;

          margin: 0 !important;
          padding: 0 !important;

          overflow: visible !important;
        }

        ${colorPreservationCss}

        #${this.portalId} *,
        #${this.portalId} *::before,
        #${this.portalId} *::after {
          animation:
            none !important;

          transition:
            none !important;

          caret-color:
            transparent !important;
        }

        [data-pdf-document-root] {
          display: block !important;

          width: auto !important;
          min-width: 0 !important;
          max-width: none !important;

          height: auto !important;
          min-height: 0 !important;
          max-height: none !important;

          margin: 0 !important;

          overflow: visible !important;

          /*
           * filter, opacity, background и color
           * здесь не переопределяются.
           */
        }

        /*
         * Scroll-контейнеры полностью раскрываются.
         */
        .html-pdf-scroll-expanded {
          height: auto !important;
          min-height: 0 !important;
          max-height: none !important;

          overflow: visible !important;
          overflow-x: visible !important;
          overflow-y: visible !important;

          contain: none !important;

          content-visibility:
            visible !important;
        }

        /*
         * Небольшой логический блок переносится целиком.
         */
        .html-pdf-atomic {
          break-inside:
            avoid-page !important;

          page-break-inside:
            avoid !important;
        }

        /*
         * Большой блок разрешается делить.
         */
        .html-pdf-flow {
          break-inside:
            auto !important;

          page-break-inside:
            auto !important;
        }

        /*
         * Заголовок остаётся со следующим элементом.
         */
        .html-pdf-keep-with-next {
          break-after:
            avoid-page !important;

          page-break-after:
            avoid !important;
        }

        /*
         * Один пункт списка не разрывается.
         */
        .html-pdf-list-item {
          break-inside:
            avoid-page !important;

          page-break-inside:
            avoid !important;
        }

        p {
          orphans: 3;
          widows: 3;
        }

        img,
        svg,
        canvas {
          max-width: 100%;

          break-inside:
            avoid-page;

          page-break-inside:
            avoid;
        }

        details {
          display: block !important;
        }

        details > * {
          content-visibility:
            visible !important;
        }

        /*
         * Sticky/fixed внутри резюме могут повторяться
         * на каждой странице, поэтому переводятся
         * в обычный поток.
         */
        [data-pdf-document-root]
        .sticky,

        [data-pdf-document-root]
        [style*="position: sticky"] {
          position: static !important;
          top: auto !important;
        }

        [data-pdf-document-root]
        .fixed,

        [data-pdf-document-root]
        [style*="position: fixed"] {
          position: static !important;
        }

        .pdf-screen-only,
        [data-pdf-hide] {
          display: none !important;
        }

        .pdf-only,
        [data-pdf-show] {
          display: initial !important;
        }
      }
    `;
  }

  /**
   * Переносит текущее состояние input/textarea/select
   * в print-копию.
   */
  copyFormValues(
    source,
    clone
  ) {
    const sourceFields =
      source.querySelectorAll(
        "input, textarea, select"
      );

    const clonedFields =
      clone.querySelectorAll(
        "input, textarea, select"
      );

    sourceFields.forEach(
      (sourceField, index) => {
        const clonedField =
          clonedFields[index];

        if (!clonedField) {
          return;
        }

        if (
          sourceField instanceof
          this.win.HTMLInputElement
        ) {
          clonedField.value =
            sourceField.value;

          clonedField.setAttribute(
            "value",
            sourceField.value
          );

          if (
            sourceField.type ===
              "checkbox" ||
            sourceField.type ===
              "radio"
          ) {
            clonedField.checked =
              sourceField.checked;

            if (sourceField.checked) {
              clonedField.setAttribute(
                "checked",
                ""
              );
            } else {
              clonedField.removeAttribute(
                "checked"
              );
            }
          }
        }

        if (
          sourceField instanceof
          this.win.HTMLTextAreaElement
        ) {
          clonedField.value =
            sourceField.value;

          clonedField.textContent =
            sourceField.value;
        }

        if (
          sourceField instanceof
          this.win.HTMLSelectElement
        ) {
          Array
            .from(
              clonedField.options
            )
            .forEach(
              (
                option,
                optionIndex
              ) => {
                option.selected =
                  sourceField.options[
                    optionIndex
                  ]?.selected ?? false;
              }
            );
        }
      }
    );
  }

  /**
   * cloneNode() не переносит нарисованные пиксели canvas.
   * Поэтому canvas заменяется PNG-изображением.
   */
  replaceCanvasWithImages(
    source,
    clone
  ) {
    const sourceCanvases =
      source.querySelectorAll(
        "canvas"
      );

    const clonedCanvases =
      clone.querySelectorAll(
        "canvas"
      );

    sourceCanvases.forEach(
      (canvas, index) => {
        const clonedCanvas =
          clonedCanvases[index];

        if (!clonedCanvas) {
          return;
        }

        try {
          const image =
            this.doc.createElement(
              "img"
            );

          image.src =
            canvas.toDataURL(
              "image/png"
            );

          image.alt =
            canvas.getAttribute(
              "aria-label"
            ) ||
            canvas.getAttribute(
              "title"
            ) ||
            "";

          image.className =
            clonedCanvas.className;

          image.style.cssText =
            clonedCanvas.style.cssText;

          const rect =
            canvas.getBoundingClientRect();

          if (rect.width > 0) {
            image.style.width =
              `${rect.width}px`;
          }

          if (rect.height > 0) {
            image.style.height =
              `${rect.height}px`;
          }

          clonedCanvas.replaceWith(
            image
          );
        } catch (error) {
          /*
           * Может произойти для tainted canvas,
           * содержащего cross-origin изображение.
           */
          console.warn(
            "HtmlPdfExporter: " +
            "canvas conversion failed",
            error
          );
        }
      }
    );
  }

  /**
   * Ждёт:
   * - web fonts;
   * - images;
   * - image.decode();
   * - два browser layout frame.
   */
  async waitUntilReady(root) {
    if (this.doc.fonts?.ready) {
      await this.doc.fonts.ready;
    }

    const images =
      Array.from(
        root.querySelectorAll(
          "img"
        )
      );

    await Promise.all(
      images.map(
        async (image) => {
          if (!image.complete) {
            await new Promise(
              (resolve) => {
                const finish =
                  () => resolve();

                image.addEventListener(
                  "load",
                  finish,
                  { once: true }
                );

                image.addEventListener(
                  "error",
                  finish,
                  { once: true }
                );
              }
            );
          }

          if (
            typeof image.decode ===
            "function"
          ) {
            try {
              await image.decode();
            } catch {
              /*
               * Некоторые уже загруженные или SVG/data
               * изображения могут отклонить decode().
               */
            }
          }
        }
      )
    );

    await new Promise(
      (resolve) => {
        this.win.requestAnimationFrame(
          () => {
            this.win.requestAnimationFrame(
              resolve
            );
          }
        );
      }
    );
  }

  /**
   * Вызывает window.print() и ждёт afterprint.
   */
  async waitForPrintDialog() {
    await new Promise(
      (resolve) => {
        let completed = false;

        const finish = () => {
          if (completed) {
            return;
          }

          completed = true;

          this.win.removeEventListener(
            "afterprint",
            finish
          );

          resolve();
        };

        this.win.addEventListener(
          "afterprint",
          finish,
          { once: true }
        );

        /*
         * Пауза даёт браузеру применить print CSS.
         */
        setTimeout(
          () => {
            this.win.print();
          },
          100
        );

        /*
         * Fallback для браузеров, не отправляющих
         * afterprint.
         */
        setTimeout(
          finish,
          120_000
        );
      }
    );
  }

  async runHook(
    name,
    context
  ) {
    const hook =
      this.options[name];

    if (
      typeof hook ===
      "function"
    ) {
      await hook(context);
    }
  }

  toPositiveNumber(
    value,
    fallback
  ) {
    const number =
      Number(value);

    return (
      Number.isFinite(number) &&
      number > 0
    )
      ? number
      : fallback;
  }
}

window.HtmlPdfExporter = HtmlPdfExporter;
