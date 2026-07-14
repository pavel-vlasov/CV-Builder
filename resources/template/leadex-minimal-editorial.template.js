/* Generated from leadex-minimal-editorial.source.html. Do not edit SOURCE manually. */
(function (root) {
  'use strict';

  var SOURCE = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>{{FULL_NAME}} - CV</title>\n  <style>\n    /*\n      DESIGN SPECIFICATION\n      - Reference: restrained editorial CV on lightly textured warm-white paper.\n      - Composition: centered handwritten name, thin blush divider, full-width profile,\n        then a 31/69 two-column layout with a pale vertical rule and timeline circles.\n      - Palette: graphite text (#202020), warm paper (#f7f6f3), blush rules (#dfcec6).\n      - Typography: local/system fonts only; script name with Segoe Script fallback;\n        uppercase, widely tracked section headings; airy body copy.\n      - Dynamic behavior: natural height, no clipping, no fixed card counts, print-safe breaks.\n    */\n    :root {\n      --paper: #f7f6f3;\n      --paper-edge: #eceae6;\n      --ink: #202020;\n      --muted: #585858;\n      --line: #dfcec6;\n      --line-strong: #d5bfb5;\n      --shadow: rgba(28, 28, 28, .18);\n      --heading-font: \"Aptos\", \"Segoe UI\", Arial, sans-serif;\n      --body-font: \"Aptos\", \"Segoe UI\", Arial, sans-serif;\n      --script-font: \"Segoe Script\", \"Brush Script MT\", \"Snell Roundhand\", cursive;\n    }\n\n    * { box-sizing: border-box; }\n\n    html, body { margin: 0; padding: 0; }\n\n    body {\n      background: transparent;\n      color: var(--ink);\n      font-family: var(--body-font);\n      font-size: 14px;\n      line-height: 1.48;\n      -webkit-font-smoothing: antialiased;\n      text-rendering: optimizeLegibility;\n    }\n\n    .cv-page {\n      width: min(210mm, calc(100vw - 28px));\n      min-height: 297mm;\n      margin: 18px auto;\n      padding: 15mm 13mm 12mm;\n      position: relative;\n      overflow: visible;\n      background-color: var(--paper);\n      background-image:\n        radial-gradient(circle at 12% 9%, rgba(255,255,255,.95), transparent 28%),\n        radial-gradient(circle at 86% 33%, rgba(255,255,255,.58), transparent 34%),\n        radial-gradient(circle at 45% 88%, rgba(224,221,215,.18), transparent 42%),\n        url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.78' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.018'/%3E%3C/svg%3E\");\n      border: 1px solid rgba(0, 0, 0, 0.08);\n      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0, 0, 0, 0.06);\n    }\n\n    .identity {\n      text-align: center;\n      padding-top: 4mm;\n    }\n\n    .full-name {\n      margin: 0;\n      font-family: var(--script-font);\n      font-size: clamp(42px, 6.2vw, 68px);\n      line-height: 1.02;\n      font-weight: 400;\n      letter-spacing: -.035em;\n      overflow-wrap: anywhere;\n    }\n\n    .role-line {\n      margin-top: 10px;\n      font-family: var(--heading-font);\n      font-size: 11px;\n      line-height: 1.55;\n      text-transform: uppercase;\n      letter-spacing: .24em;\n      color: var(--muted);\n      overflow-wrap: anywhere;\n    }\n\n    .role-line .separator { padding: 0 .65em; color: var(--line-strong); }\n\n    .header-rule {\n      height: 1px;\n      margin: 16mm 0 8mm;\n      background: linear-gradient(90deg, transparent, var(--line) 8%, var(--line) 92%, transparent);\n    }\n\n    .section-title {\n      margin: 0 0 15px;\n      font-family: var(--heading-font);\n      font-size: 14px;\n      font-weight: 500;\n      line-height: 1.2;\n      text-transform: uppercase;\n      letter-spacing: .34em;\n    }\n\n    .profile {\n      margin-bottom: 11mm;\n      text-align: center;\n    }\n\n    .profile-copy {\n      max-width: 176mm;\n      margin: 0 auto;\n      color: #303030;\n      font-size: 13.5px;\n      letter-spacing: .035em;\n      line-height: 1.55;\n      text-align: left;\n      overflow-wrap: anywhere;\n    }\n\n    .profile-copy .lead { font-weight: 500; }\n    .profile-copy p { margin: 0; }\n    .profile-copy p + p { margin-top: 8px; }\n\n    .columns {\n      display: grid;\n      grid-template-columns: minmax(0, 31%) minmax(0, 1fr);\n      column-gap: 34px;\n      align-items: start;\n    }\n\n    .sidebar {\n      min-width: 0;\n      padding-right: 28px;\n      border-right: 1px solid var(--line);\n    }\n\n    .main-column { min-width: 0; }\n\n    .side-section,\n    .main-section {\n      min-width: 0;\n      margin-bottom: 28px;\n      break-inside: auto;\n    }\n\n    .side-section:last-child,\n    .main-section:last-child { margin-bottom: 0; }\n\n    .contact-list,\n    .plain-list,\n    .skills-list,\n    .metric-grid,\n    .industry-list,\n    .certification-list,\n    .language-list,\n    .education-list,\n    .project-list,\n    .tech-list,\n    .timeline-list {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n    }\n\n    .contact-list { display: grid; gap: 12px; }\n\n    .contact-item {\n      display: grid;\n      grid-template-columns: 22px minmax(0, 1fr);\n      gap: 10px;\n      align-items: start;\n      min-width: 0;\n    }\n\n    .contact-icon {\n      width: 18px;\n      height: 18px;\n      margin-top: 1px;\n      color: #171717;\n      flex: none;\n    }\n\n    .contact-value {\n      min-width: 0;\n      font-size: 12px;\n      letter-spacing: .09em;\n      line-height: 1.45;\n      overflow-wrap: break-word;\n    }\n\n    .side-copy,\n    .education-item,\n    .language-item,\n    .certification-item,\n    .industry-item {\n      font-size: 12px;\n      letter-spacing: .055em;\n      line-height: 1.5;\n      overflow-wrap: anywhere;\n    }\n\n    .education-list,\n    .language-list,\n    .certification-list,\n    .industry-list { display: grid; gap: 14px; }\n\n    .education-item,\n    .language-item,\n    .certification-item { break-inside: avoid; }\n\n    .skills-list { display: flex; flex-wrap: wrap; gap: 8px 10px; }\n\n    .skill-item {\n      max-width: 100%;\n      padding: 0 0 4px;\n      border-bottom: 1px solid rgba(213,191,181,.55);\n      font-size: 12px;\n      letter-spacing: .07em;\n      line-height: 1.35;\n      overflow-wrap: anywhere;\n    }\n\n    .industry-item {\n      display: flex;\n      align-items: flex-start;\n      gap: 9px;\n      break-inside: avoid;\n    }\n\n    .industry-item > div { min-width: 0; flex: 1 1 auto; }\n\n    .industry-media {\n      width: 28px;\n      min-width: 28px;\n      max-width: 28px;\n      height: 28px;\n      min-height: 28px;\n      max-height: 28px;\n      flex: 0 0 28px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 0;\n      line-height: 1;\n      border: 1px solid var(--line-strong);\n      border-radius: 50%;\n      font-size: 10px;\n      font-weight: 600;\n      letter-spacing: .08em;\n    }\n\n    .industry-title { font-weight: 600; }\n    .industry-description { margin-top: 2px; color: var(--muted); font-size: 11px; }\n\n    .metric-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));\n      gap: 12px 18px;\n      margin-bottom: 26px;\n    }\n\n    .metric-item {\n      min-width: 0;\n      padding: 0 0 9px;\n      border-bottom: 1px solid var(--line);\n      break-inside: avoid;\n    }\n\n    .metric-value {\n      display: block;\n      font-family: var(--heading-font);\n      font-size: 21px;\n      font-weight: 500;\n      line-height: 1.1;\n      letter-spacing: .04em;\n      overflow-wrap: anywhere;\n    }\n\n    .metric-label {\n      display: block;\n      margin-top: 5px;\n      color: var(--muted);\n      font-size: 10px;\n      line-height: 1.35;\n      text-transform: uppercase;\n      letter-spacing: .16em;\n      overflow-wrap: anywhere;\n    }\n\n    .timeline-list {\n      position: relative;\n      display: grid;\n      gap: 30px;\n    }\n\n    .timeline-list::before {\n      content: \"\";\n      position: absolute;\n      left: -35px;\n      top: 7px;\n      bottom: 7px;\n      width: 1px;\n      background: var(--line);\n    }\n\n    .experience-scroll {\n      max-height: 430px;\n      overflow-y: auto;\n      padding-right: 10px;\n      scrollbar-width: thin;\n      scrollbar-color: var(--line-strong) var(--paper-edge);\n    }\n\n    .experience-scroll::-webkit-scrollbar { width: 8px; }\n\n    .experience-scroll::-webkit-scrollbar-track {\n      background: var(--paper-edge);\n      border-radius: 999px;\n    }\n\n    .experience-scroll::-webkit-scrollbar-thumb {\n      background: var(--line-strong);\n      border-radius: 999px;\n    }\n\n    .experience-item {\n      position: relative;\n      min-width: 0;\n      break-inside: avoid;\n      page-break-inside: avoid;\n    }\n\n    .experience-item::before {\n      content: \"\";\n      position: absolute;\n      left: -43px;\n      top: 2px;\n      width: 16px;\n      height: 16px;\n      border: 1px solid var(--line-strong);\n      border-radius: 50%;\n      background: var(--paper);\n    }\n\n    .experience-head {\n      position: relative;\n      display: block;\n      min-width: 0;\n      padding-right: 92px;\n      margin-bottom: 12px;\n    }\n\n    .experience-position {\n      min-width: 0;\n      font-size: 12px;\n      line-height: 1.4;\n      text-transform: uppercase;\n      letter-spacing: .16em;\n      overflow-wrap: anywhere;\n    }\n\n    .experience-date {\n      position: absolute;\n      right: 0;\n      top: 0;\n      width: 82px;\n      color: var(--muted);\n      font-size: 10px;\n      line-height: 1.35;\n      text-align: right;\n      text-transform: uppercase;\n      letter-spacing: .11em;\n      white-space: normal;\n    }\n\n    .experience-company {\n      margin-top: 3px;\n      color: #393939;\n      font-size: 12px;\n      letter-spacing: .06em;\n      overflow-wrap: anywhere;\n    }\n\n    .achievement-list {\n      margin: 0;\n      padding-left: 18px;\n      display: grid;\n      gap: 4px;\n      color: #303030;\n      font-size: 12px;\n      letter-spacing: .045em;\n      line-height: 1.5;\n    }\n\n    .achievement-list li { padding-left: 3px; overflow-wrap: anywhere; }\n\n    .tech-list,\n    .project-list { display: grid; gap: 18px; }\n\n    .tech-panel,\n    .project-item {\n      min-width: 0;\n      break-inside: avoid;\n      padding-bottom: 14px;\n      border-bottom: 1px solid rgba(223,206,198,.8);\n    }\n\n    .tech-panel:last-child,\n    .project-item:last-child { border-bottom: 0; padding-bottom: 0; }\n\n    .tech-title,\n    .project-name {\n      margin: 0 0 8px;\n      font-size: 12px;\n      font-weight: 600;\n      text-transform: uppercase;\n      letter-spacing: .14em;\n      overflow-wrap: anywhere;\n    }\n\n    .tech-bullets {\n      margin: 0;\n      padding-left: 18px;\n      display: grid;\n      gap: 4px;\n      color: #383838;\n      font-size: 12px;\n      line-height: 1.48;\n      letter-spacing: .035em;\n    }\n\n    .project-description {\n      margin: 0;\n      color: #383838;\n      font-size: 12px;\n      line-height: 1.52;\n      letter-spacing: .04em;\n      overflow-wrap: anywhere;\n    }\n\n    .footer {\n      margin-top: 12mm;\n      padding-top: 7mm;\n      border-top: 1px solid var(--line);\n      display: grid;\n      grid-template-columns: minmax(0,1fr) minmax(0,1fr);\n      gap: 10mm;\n      color: var(--muted);\n      font-size: 10px;\n      line-height: 1.45;\n      letter-spacing: .11em;\n      text-transform: uppercase;\n    }\n\n    .footer > div { min-width: 0; overflow-wrap: anywhere; }\n    .footer-note { text-align: right; }\n\n    @media (max-width: 760px) {\n      body { background: var(--paper); }\n      .cv-page { width: 100%; margin: 0; padding: 28px 24px 34px; border: 0; box-shadow: none; }\n      .full-name { font-size: clamp(38px, 12vw, 58px); }\n      .header-rule { margin: 34px 0 26px; }\n      .columns { grid-template-columns: 1fr; gap: 34px; }\n      .sidebar { padding-right: 0; padding-bottom: 30px; border-right: 0; border-bottom: 1px solid var(--line); }\n      .timeline-list::before { left: -16px; }\n      .experience-item::before { left: -24px; }\n      .main-column { padding-left: 16px; }\n      .experience-head { padding-right: 0; }\n      .experience-company { margin-top: 4px; }\n      .experience-date { position: static; width: auto; margin-top: 4px; text-align: left; }\n      .footer { grid-template-columns: 1fr; gap: 8px; }\n      .footer-note { text-align: left; }\n    }\n\n    @media print {\n      @page { size: A4; margin: 14mm 13mm 12mm; }\n      html, body { width: auto; background: var(--paper); }\n      body { font-size: 12px; }\n      .cv-page {\n        width: auto;\n        min-height: 271mm;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        box-shadow: none;\n        -webkit-print-color-adjust: exact;\n        print-color-adjust: exact;\n      }\n      .full-name { font-size: 49px; }\n      .role-line { font-size: 9.5px; }\n      .header-rule { margin: 13mm 0 7mm; }\n      .profile { margin-bottom: 9mm; }\n      .section-title { font-size: 12px; margin-bottom: 12px; }\n      .side-section, .main-section { margin-bottom: 23px; }\n      .experience-scroll { max-height: none; overflow: visible; padding-right: 0; }\n      .contact-value, .side-copy, .education-item, .language-item,\n      .certification-item, .industry-item, .skill-item,\n      .experience-position, .experience-company, .achievement-list,\n      .tech-title, .project-name, .tech-bullets, .project-description { font-size: 10.5px; }\n      .profile-copy { font-size: 11.5px; }\n      .metric-grid { gap: 10px 14px; }\n      .metric-value { font-size: 18px; }\n      .timeline-list { gap: 24px; }\n      .experience-item, .tech-panel, .project-item, .education-item,\n      .certification-item, .industry-item, .metric-item { break-inside: avoid; page-break-inside: avoid; }\n      .section-title { break-after: avoid; page-break-after: avoid; }\n      a { color: inherit; text-decoration: none; }\n    }\n  </style>\n</head>\n<body>\n  <article class=\"page cv-page\">\n    <header class=\"identity\">\n      <h1 class=\"full-name\">{{FULL_NAME}}</h1>\n      <div class=\"role-line\">\n        <span>{{ROLE_TITLE}}</span><span class=\"separator\">/</span><span>{{SPECIALIZATION}}</span><span class=\"separator\">/</span><span>{{PRIMARY_DOMAIN}}</span>\n      </div>\n    </header>\n\n    <div class=\"header-rule\" aria-hidden=\"true\"></div>\n\n    <section class=\"profile\">\n      <h2 class=\"section-title\">Professional Profile</h2>\n      <div class=\"profile-copy\">\n        <p class=\"lead\">{{SHORT_PROFILE_SUMMARY}}</p>\n        <!--CVB:section professionalSummary-->\n        <p>{{PROFESSIONAL_SUMMARY}}</p>\n        <!--CVB:endsection professionalSummary-->\n      </div>\n    </section>\n\n    <div class=\"columns\">\n      <aside class=\"sidebar\">\n        <section class=\"side-section contact-section\">\n          <h2 class=\"section-title\">Contact</h2>\n          <ul class=\"contact-list\">\n            <li class=\"contact-item\">\n              <svg class=\"contact-icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M12 3.2 2.8 11h2.1v9.2h5.4v-5.6h3.4v5.6h5.4V11h2.1L12 3.2Z\"/></svg>\n              <span class=\"contact-value\">{{LOCATION}}<br>{{CITY_COUNTRY}}</span>\n            </li>\n            <li class=\"contact-item\">\n              <svg class=\"contact-icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M6.6 2.8h3.1l1.5 4.5-2.1 1.8a15.8 15.8 0 0 0 5.8 5.8l1.8-2.1 4.5 1.5v3.1c0 1.1-.9 2-2 2A16.6 16.6 0 0 1 4.6 4.8c0-1.1.9-2 2-2Z\"/></svg>\n              <span class=\"contact-value\">{{PHONE}}</span>\n            </li>\n            <li class=\"contact-item\">\n              <svg class=\"contact-icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M3 5h18v14H3V5Zm2 2v.3l7 5.2 7-5.2V7l-7 5-7-5Zm14 10V9.8l-7 5.1-7-5.1V17h14Z\"/></svg>\n              <span class=\"contact-value\">{{EMAIL}}</span>\n            </li>\n            <li class=\"contact-item\">\n              <svg class=\"contact-icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M5.2 3.8A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.3ZM3.4 9.7H7V21H3.4V9.7Zm5.8 0h3.5v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8V21h-3.6v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9.2V9.7Z\"/></svg>\n              <span class=\"contact-value\">{{LINKEDIN_URL}}</span>\n            </li>\n          </ul>\n        </section>\n\n        <!--CVB:section education-->\n        <section class=\"side-section\">\n          <h2 class=\"section-title\">Education</h2>\n          <ul class=\"education-list\">\n            <!--CVB:repeat education-->\n            <li class=\"education-item\">{{LINE}}</li>\n            <!--CVB:endrepeat education-->\n          </ul>\n        </section>\n        <!--CVB:endsection education-->\n\n        <!--CVB:section skills-->\n        <section class=\"side-section\">\n          <h2 class=\"section-title\">Skills</h2>\n          <ul class=\"skills-list\">\n            <!--CVB:repeat skills-->\n            <li class=\"skill-item\">{{LABEL}}</li>\n            <!--CVB:endrepeat skills-->\n          </ul>\n        </section>\n        <!--CVB:endsection skills-->\n\n        <!--CVB:section languages-->\n        <section class=\"side-section\">\n          <h2 class=\"section-title\">Languages</h2>\n          <ul class=\"language-list\">\n            <!--CVB:repeat languages-->\n            <li class=\"language-item\">{{LINE}}</li>\n            <!--CVB:endrepeat languages-->\n          </ul>\n        </section>\n        <!--CVB:endsection languages-->\n\n        <!--CVB:section certifications-->\n        <section class=\"side-section\">\n          <h2 class=\"section-title\">Certifications</h2>\n          <ul class=\"certification-list\">\n            <!--CVB:repeat certifications-->\n            <li class=\"certification-item\">{{TITLE}}</li>\n            <!--CVB:endrepeat certifications-->\n          </ul>\n        </section>\n        <!--CVB:endsection certifications-->\n\n        <!--CVB:section industries-->\n        <section class=\"side-section\">\n          <h2 class=\"section-title\">Industries</h2>\n          <ul class=\"industry-list\">\n            <!--CVB:repeat industries-->\n            <li class=\"industry-item\">\n              <span class=\"industry-media\">{{MEDIA}}</span>\n              <div>\n                <div class=\"industry-title\">{{TITLE}}</div>\n                <!--CVB:section industryDesc-->\n                <div class=\"industry-description\">{{DESCRIPTION}}</div>\n                <!--CVB:endsection industryDesc-->\n              </div>\n            </li>\n            <!--CVB:endrepeat industries-->\n          </ul>\n        </section>\n        <!--CVB:endsection industries-->\n      </aside>\n\n      <main class=\"main-column\">\n        <!--CVB:section metrics-->\n        <section class=\"main-section\">\n          <h2 class=\"section-title\">Career Highlights</h2>\n          <ul class=\"metric-grid\">\n            <!--CVB:repeat metrics-->\n            <li class=\"metric-item\"><span class=\"metric-value\">{{VALUE}}</span><span class=\"metric-label\">{{LABEL}}</span></li>\n            <!--CVB:endrepeat metrics-->\n          </ul>\n        </section>\n        <!--CVB:endsection metrics-->\n\n        <!--CVB:section experience-->\n        <section class=\"main-section\">\n          <h2 class=\"section-title\">Work Experience</h2>\n          <ol class=\"timeline-list experience-scroll\">\n            <!--CVB:repeat experience-->\n            <li class=\"experience-item\">\n              <div class=\"experience-head\">\n                <div class=\"experience-position\">{{POSITION}}</div>\n                <div class=\"experience-date\">{{DATE_FROM}} - {{DATE_TO}}</div>\n                <!--CVB:section experienceCompany-->\n                <div class=\"experience-company\">{{COMPANY_LINE}}</div>\n                <!--CVB:endsection experienceCompany-->\n              </div>\n              <ul class=\"achievement-list\">\n                <!--CVB:repeat achievements-->\n                <li>{{TEXT}}</li>\n                <!--CVB:endrepeat achievements-->\n              </ul>\n            </li>\n            <!--CVB:endrepeat experience-->\n          </ol>\n        </section>\n        <!--CVB:endsection experience-->\n\n        <!--CVB:section techPanels-->\n        <section class=\"main-section\">\n          <h2 class=\"section-title\">Technical Expertise</h2>\n          <div class=\"tech-list\">\n            <!--CVB:repeat techPanels-->\n            <article class=\"tech-panel\">\n              <h3 class=\"tech-title\">{{TITLE}}</h3>\n              <ul class=\"tech-bullets\">\n                <!--CVB:repeat techBullets-->\n                <li>{{TEXT}}</li>\n                <!--CVB:endrepeat techBullets-->\n              </ul>\n            </article>\n            <!--CVB:endrepeat techPanels-->\n          </div>\n        </section>\n        <!--CVB:endsection techPanels-->\n\n        <!--CVB:section projects-->\n        <section class=\"main-section\">\n          <h2 class=\"section-title\">Selected Projects</h2>\n          <div class=\"project-list\">\n            <!--CVB:repeat projects-->\n            <article class=\"project-item\">\n              <h3 class=\"project-name\">{{NAME}}</h3>\n              <!--CVB:section projectDesc-->\n              <p class=\"project-description\">{{DESCRIPTION}}</p>\n              <!--CVB:endsection projectDesc-->\n            </article>\n            <!--CVB:endrepeat projects-->\n          </div>\n        </section>\n        <!--CVB:endsection projects-->\n      </main>\n    </div>\n\n    <footer class=\"footer\">\n      <div>{{FOOTER_TAGLINE}}</div>\n      <div class=\"footer-note\">{{ADDITIONAL_NOTE}}</div>\n    </footer>\n  </article>\n</body>\n</html>\n";

  function value(input) {
    return input === 0 ? '0' : (input == null ? '' : String(input));
  }

  function escapeHtml(input) {
    return value(input)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function richText(input) {
    return escapeHtml(input).replace(/\r?\n/g, '<br>');
  }

  function hasValue(input) {
    return input === 0 || (input != null && String(input).trim() !== '');
  }

  function array(input) {
    return Array.isArray(input) ? input : [];
  }

  function tokenReplace(block, replacements) {
    return block.replace(/\{\{([A-Z_]+)\}\}/g, function (match, token) {
      return Object.prototype.hasOwnProperty.call(replacements, token) ? replacements[token] : match;
    });
  }

  function repeatReplace(html, name, items, renderer) {
    var open = '<!--CVB:repeat ' + name + '-->';
    var close = '<!--CVB:endrepeat ' + name + '-->';
    var start = html.indexOf(open);
    if (start < 0) return html;
    var end = html.indexOf(close, start + open.length);
    if (end < 0) return html;
    var block = html.slice(start + open.length, end);
    var rendered = items.map(function (item, index) { return renderer(block, item, index); }).join('');
    return html.slice(0, start) + rendered + html.slice(end + close.length);
  }

  function sectionSet(html, name, keep) {
    var open = '<!--CVB:section ' + name + '-->';
    var close = '<!--CVB:endsection ' + name + '-->';
    var start = html.indexOf(open);
    while (start >= 0) {
      var end = html.indexOf(close, start + open.length);
      if (end < 0) break;
      var content = html.slice(start + open.length, end);
      html = html.slice(0, start) + (keep ? content : '') + html.slice(end + close.length);
      start = html.indexOf(open, start);
    }
    return html;
  }

  function initials(title) {
    var parts = value(title).trim().split(/\s+/).filter(Boolean);
    return escapeHtml(parts.slice(0, 2).map(function (p) { return p.charAt(0).toUpperCase(); }).join('') || '•');
  }

  function line(parts) {
    return parts.filter(hasValue).map(escapeHtml).join('<br>');
  }

  function companyLine(item) {
    return [item.company, item.location].filter(hasValue).map(escapeHtml).join(' / ');
  }

  function render(data, ctx) {
    data = data || {};
    var html = SOURCE;

    html = repeatReplace(html, 'metrics', array(data.metrics), function (block, item) {
      return tokenReplace(block, { LABEL: escapeHtml(item.label), VALUE: escapeHtml(item.value) });
    });

    html = repeatReplace(html, 'skills', array(data.skills), function (block, item) {
      return tokenReplace(block, { LABEL: escapeHtml(item.label) });
    });

    html = repeatReplace(html, 'industries', array(data.industries), function (block, item) {
      block = sectionSet(block, 'industryDesc', hasValue(item.description));
      return tokenReplace(block, {
        MEDIA: initials(item.title),
        TITLE: escapeHtml(item.title),
        DESCRIPTION: richText(item.description)
      });
    });

    html = repeatReplace(html, 'certifications', array(data.certifications), function (block, item) {
      return tokenReplace(block, { TITLE: escapeHtml(item.title) });
    });

    html = repeatReplace(html, 'education', array(data.education), function (block, item) {
      return tokenReplace(block, { LINE: line([item.title, item.org, item.year]) });
    });

    html = repeatReplace(html, 'languages', array(data.languages), function (block, item) {
      return tokenReplace(block, { LINE: [item.name, item.level].filter(hasValue).map(escapeHtml).join(' / ') });
    });

    html = repeatReplace(html, 'projects', array(data.projects), function (block, item) {
      block = sectionSet(block, 'projectDesc', hasValue(item.description));
      return tokenReplace(block, { NAME: escapeHtml(item.name), DESCRIPTION: richText(item.description) });
    });

    html = repeatReplace(html, 'techPanels', array(data.techPanels), function (block, item) {
      block = repeatReplace(block, 'techBullets', array(item.bullets), function (bulletBlock, bullet) {
        return tokenReplace(bulletBlock, { TEXT: richText(bullet.text) });
      });
      return tokenReplace(block, { TITLE: escapeHtml(item.title) });
    });

    html = repeatReplace(html, 'experience', array(data.experience), function (block, item) {
      var company = companyLine(item);
      block = sectionSet(block, 'experienceCompany', hasValue(company));
      block = repeatReplace(block, 'achievements', array(item.achievements), function (achievementBlock, achievement) {
        return tokenReplace(achievementBlock, { TEXT: richText(achievement.text) });
      });
      return tokenReplace(block, {
        POSITION: escapeHtml(item.position),
        DATE_FROM: escapeHtml(item.dateFrom),
        DATE_TO: escapeHtml(item.dateTo),
        COMPANY_LINE: company
      });
    });

    html = sectionSet(html, 'metrics', array(data.metrics).length > 0);
    html = sectionSet(html, 'skills', array(data.skills).length > 0);
    html = sectionSet(html, 'industries', array(data.industries).length > 0);
    html = sectionSet(html, 'certifications', array(data.certifications).length > 0);
    html = sectionSet(html, 'education', array(data.education).length > 0);
    html = sectionSet(html, 'languages', array(data.languages).length > 0);
    html = sectionSet(html, 'projects', array(data.projects).length > 0);
    html = sectionSet(html, 'techPanels', array(data.techPanels).length > 0);
    html = sectionSet(html, 'experience', array(data.experience).length > 0);
    html = sectionSet(html, 'professionalSummary', hasValue(data.personal && data.personal.professionalSummary));

    var personal = data.personal || {};
    html = tokenReplace(html, {
      FULL_NAME: escapeHtml(personal.fullName),
      ROLE_TITLE: escapeHtml(personal.roleTitle),
      SPECIALIZATION: escapeHtml(personal.specialization),
      PRIMARY_DOMAIN: escapeHtml(personal.primaryDomain),
      LOCATION: escapeHtml(personal.location),
      CITY_COUNTRY: escapeHtml(personal.cityCountry),
      EMAIL: escapeHtml(personal.email),
      PHONE: escapeHtml(personal.phone),
      LINKEDIN_URL: escapeHtml(personal.linkedinUrl),
      SHORT_PROFILE_SUMMARY: richText(personal.shortProfileSummary),
      PROFESSIONAL_SUMMARY: richText(personal.professionalSummary),
      FOOTER_TAGLINE: escapeHtml(personal.footerTagline),
      ADDITIONAL_NOTE: escapeHtml(personal.additionalNote)
    });

    html = html.replace(/<!--CVB:(?:end)?(?:section|repeat)[^>]*-->/g, '');
    html = html.replace(/\{\{[A-Z_]+\}\}/g, '');

    if (ctx && typeof ctx.afterRender === 'function') {
      return ctx.afterRender(html, data) || html;
    }
    return html;
  }

  var template = {
    id: "leadex-minimal-editorial",
    name: "Minimal Editorial Resume",
    source: SOURCE,
    render: render
  };

  root.CVB = root.CVB || { templates: {} };
  root.CVB.templates[template.id] = template;
})(typeof window !== 'undefined' ? window : globalThis);
