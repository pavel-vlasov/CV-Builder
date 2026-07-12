/* Generated from leadex-american-notebook.source.html by scripts/build-template.mjs. Do not edit directly. */
(function () {
  'use strict';

  var ID = "leadex-american-notebook";
  var NAME = "Leadex — American Notebook";
  var SOURCE = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>{{FULL_NAME}} — CV</title>\n  <meta name=\"description\" content=\"American notebook-style CV template\" />\n  <!--\n    CV Builder template: leadex-american-notebook\n\n    Design specification\n    - Visual source: handwritten American résumé on ruled notebook paper.\n    - Warm paper, horizontal notebook rules, red margin line and blue-ink annotations.\n    - Main information uses black ink; guidance notes use blue-violet ink.\n    - No external fonts, images, scripts or user data embedded in decoration.\n    - Every data-driven section grows naturally and remains printable.\n  -->\n  <style>\n    :root {\n      --paper: #f5eee2;\n      --paper-light: #fbf6ec;\n      --ink: #232229;\n      --ink-soft: #4b4850;\n      --blue-ink: #343b86;\n      --rule: rgba(73, 87, 129, 0.24);\n      --red-rule: rgba(164, 72, 79, 0.62);\n      --edge: rgba(75, 56, 43, 0.22);\n      --paper-line: 34px;\n      --hand: \"Comic Neue\", \"Segoe Print\", \"Bradley Hand\", \"Comic Sans MS\", \"Chalkboard SE\", cursive;\n      --plain: system-ui, -apple-system, \"Segoe UI\", sans-serif;\n    }\n\n    * { box-sizing: border-box; }\n\n    html {\n      margin: 0;\n      min-height: 100%;\n      background: #e8e0d3;\n      -webkit-print-color-adjust: exact;\n      print-color-adjust: exact;\n    }\n\n    body {\n      margin: 0;\n      min-height: 100%;\n      color: var(--ink);\n      font-family: var(--hand);\n      font-size: 17px;\n      line-height: 1.55;\n      overflow-wrap: anywhere;\n    }\n\n    a { color: inherit; text-decoration: none; }\n\n    .page {\n      position: relative;\n      width: 1160px;\n      min-height: 1640px;\n      margin: 24px auto;\n      padding: 44px 46px 42px 82px;\n      overflow: hidden;\n      background:\n        linear-gradient(90deg,\n          transparent 0,\n          transparent 63px,\n          var(--red-rule) 63px,\n          var(--red-rule) 65px,\n          transparent 65px,\n          transparent 100%),\n        repeating-linear-gradient(\n          to bottom,\n          transparent 0,\n          transparent calc(var(--paper-line) - 1px),\n          var(--rule) calc(var(--paper-line) - 1px),\n          var(--rule) var(--paper-line)\n        ),\n        radial-gradient(circle at 18% 8%, rgba(255,255,255,.62), transparent 35%),\n        linear-gradient(135deg, var(--paper-light), var(--paper));\n      border: 1px solid var(--edge);\n      box-shadow: 0 20px 55px rgba(52, 40, 30, .22);\n    }\n\n    .page::before,\n    .page::after {\n      content: \"\";\n      position: absolute;\n      pointer-events: none;\n    }\n\n    .page::before {\n      inset: 0;\n      opacity: .32;\n      background-image:\n        radial-gradient(circle at 20% 30%, rgba(78,58,42,.08) 0 1px, transparent 1.5px),\n        radial-gradient(circle at 70% 80%, rgba(78,58,42,.06) 0 1px, transparent 1.4px);\n      background-size: 47px 53px, 61px 67px;\n      mix-blend-mode: multiply;\n    }\n\n    .page::after {\n      inset: 0;\n      box-shadow: inset 0 0 35px rgba(85, 59, 39, .13);\n    }\n\n    .document {\n      position: relative;\n      z-index: 1;\n    }\n\n    .topline {\n      display: grid;\n      grid-template-columns: minmax(0, 1fr) 276px;\n      gap: 28px;\n      align-items: end;\n      min-height: 54px;\n      border-bottom: 2px solid rgba(165, 79, 85, .44);\n    }\n\n\n    .document-brand {\n      margin: 0 0 3px;\n      min-height: 54px;\n      display: inline-flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: flex-end;\n      line-height: .74;\n      color: #1c63b7;\n      font-family: \"Arial Black\", \"Arial Narrow\", \"Segoe UI\", Arial, sans-serif;\n      font-style: normal;\n      text-decoration: none;\n      transform: translateY(1px);\n    }\n\n    .brand-word {\n      display: block;\n      white-space: nowrap;\n      font-size: 31px;\n      font-weight: 800;\n      letter-spacing: -.07em;\n      background: linear-gradient(90deg, #00adee 0%, #1d67ba 56%, #2b3d99 100%);\n      -webkit-background-clip: text;\n      background-clip: text;\n      color: transparent;\n      text-shadow: 0 0 .01px rgba(0, 78, 170, .1);\n    }\n\n    .brand-systems {\n      margin-top: 5px;\n      font-size: 34px;\n      letter-spacing: -.075em;\n    }\n\n    .brand-tagline {\n      display: block;\n      margin-top: 8px;\n      padding-left: 72px;\n      color: #2b3d99;\n      font-size: 7.5px;\n      font-weight: 800;\n      line-height: 1;\n      letter-spacing: .22em;\n      white-space: nowrap;\n    }\n\n    .comments-heading {\n      margin: 0 0 4px;\n      color: var(--blue-ink);\n      font-size: 17px;\n      font-weight: 700;\n      text-align: center;\n      transform: rotate(-1deg);\n    }\n\n    .resume-grid {\n      display: grid;\n      grid-template-columns: minmax(0, 1fr) 276px;\n      gap: 28px;\n      align-items: start;\n    }\n\n    .main-column {\n      min-width: 0;\n      padding-top: 13px;\n    }\n\n    .comments-column {\n      position: relative;\n      min-width: 0;\n      align-self: stretch;\n      min-height: 1220px;\n      padding: 14px 6px 20px 24px;\n      color: var(--blue-ink);\n      border-left: 3px solid rgba(44, 47, 88, .78);\n    }\n\n    .comments-column::before {\n      content: \"\";\n      position: absolute;\n      left: -4px;\n      top: 0;\n      bottom: 0;\n      width: 1px;\n      background: rgba(40, 44, 78, .28);\n    }\n\n    .identity {\n      margin-bottom: 18px;\n    }\n\n    .full-name {\n      margin: 0;\n      font-size: 31px;\n      line-height: 1.18;\n      font-weight: 700;\n      letter-spacing: .025em;\n      text-transform: uppercase;\n      transform: rotate(-.2deg);\n    }\n\n    .role-line {\n      margin: 5px 0 2px;\n      font-size: 19px;\n      font-weight: 600;\n    }\n\n    .domain-line {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 4px 11px;\n      color: var(--ink-soft);\n      font-size: 15px;\n    }\n\n    .domain-line span:not(:empty) + span:not(:empty)::before,\n    .contact-row span:not(:empty) + span:not(:empty)::before,\n    .location-row span:not(:empty) + span:not(:empty)::before {\n      content: \"·\";\n      margin-right: 11px;\n      color: rgba(35, 34, 41, .55);\n    }\n\n    .short-summary {\n      max-width: 700px;\n      margin: 8px 0 0;\n      color: var(--ink-soft);\n      font-size: 16px;\n      line-height: 1.55;\n      white-space: pre-line;\n    }\n\n    .contact-block {\n      margin-top: 9px;\n      font-size: 15px;\n      line-height: 1.7;\n    }\n\n    .contact-row,\n    .location-row {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 0 0;\n    }\n\n    .section {\n      position: relative;\n      display: grid;\n      grid-template-columns: 188px minmax(0, 1fr);\n      gap: 14px;\n      margin: 8px 0 14px;\n      break-inside: auto;\n    }\n\n    .section-title {\n      margin: 0;\n      padding-top: 1px;\n      font-size: 25px;\n      line-height: 1.28;\n      font-weight: 600;\n      letter-spacing: -.02em;\n      transform: rotate(-.2deg);\n    }\n\n    .section-body {\n      min-width: 0;\n    }\n\n    .section-body > :first-child { margin-top: 0; }\n    .section-body > :last-child { margin-bottom: 0; }\n\n    .text {\n      margin: 0;\n      white-space: pre-line;\n    }\n\n    .objective-text {\n      font-size: 19px;\n      line-height: 1.62;\n    }\n\n    .metrics-list,\n    .skill-list,\n    .simple-list,\n    .project-list,\n    .tech-list,\n    .experience-list {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n    }\n\n    .metrics-list {\n      display: grid;\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n      gap: 4px 22px;\n    }\n\n    .metric-item {\n      display: grid;\n      grid-template-columns: minmax(0, 1fr) auto;\n      gap: 10px;\n      align-items: baseline;\n      min-width: 0;\n    }\n\n    .metric-label { color: var(--ink-soft); }\n    .metric-value { font-size: 20px; font-weight: 700; white-space: nowrap; }\n\n    .skill-list {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 4px 14px;\n    }\n\n    .skill-item::before {\n      content: \"•\";\n      margin-right: 7px;\n    }\n\n    .industry-list {\n      display: grid;\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n      gap: 8px 20px;\n    }\n\n    .industry-item {\n      display: grid;\n      grid-template-columns: 34px minmax(0, 1fr);\n      gap: 8px;\n      break-inside: avoid;\n    }\n\n    .industry-letter {\n      display: inline-flex;\n      width: 30px;\n      height: 30px;\n      align-items: center;\n      justify-content: center;\n      border: 2px solid currentColor;\n      border-radius: 50%;\n      font-size: 16px;\n      font-weight: 700;\n      transform: rotate(-3deg);\n      align-self: start;\n      line-height: 1;\n    }\n\n    .industry-title { display: block; font-weight: 700; }\n    .industry-description { display: block; color: var(--ink-soft); font-size: 14px; line-height: 1.45; }\n\n    .simple-list li,\n    .project-item,\n    .tech-panel,\n    .experience-item {\n      break-inside: avoid;\n    }\n\n    .simple-list li {\n      position: relative;\n      padding-left: 18px;\n      margin: 1px 0;\n    }\n\n    .simple-list li::before {\n      content: \"—\";\n      position: absolute;\n      left: 0;\n    }\n\n    .project-item,\n    .tech-panel {\n      margin: 0 0 9px;\n    }\n\n    .project-name,\n    .tech-title,\n    .experience-position {\n      margin: 0;\n      font-size: 18px;\n      font-weight: 700;\n    }\n\n    .project-description {\n      margin: 1px 0 0;\n      color: var(--ink-soft);\n      font-size: 15px;\n      line-height: 1.5;\n      white-space: pre-line;\n    }\n\n    .tech-bullets,\n    .achievement-list {\n      margin: 2px 0 0;\n      padding-left: 20px;\n    }\n\n    .tech-bullets li,\n    .achievement-list li {\n      margin: 1px 0;\n    }\n\n    .experience-item {\n      position: relative;\n      display: grid;\n      grid-template-columns: 142px minmax(0, 1fr);\n      gap: 13px;\n      margin: 0 0 14px;\n    }\n\n    .experience-date {\n      padding-top: 1px;\n      font-size: 15px;\n      line-height: 1.45;\n    }\n\n    .experience-company {\n      margin: 1px 0 3px;\n      color: var(--ink-soft);\n      font-size: 15px;\n      font-weight: 600;\n    }\n\n    .note {\n      position: relative;\n      margin: 7px 0 38px;\n      font-size: 18px;\n      line-height: 1.72;\n      font-weight: 600;\n      transform: rotate(-.35deg);\n    }\n\n    .note::before {\n      content: \"\";\n      position: absolute;\n      left: -35px;\n      top: 15px;\n      width: 27px;\n      border-top: 3px solid currentColor;\n    }\n\n    .note::after {\n      content: \"\";\n      position: absolute;\n      left: -38px;\n      top: 10px;\n      width: 9px;\n      height: 9px;\n      border-left: 3px solid currentColor;\n      border-bottom: 3px solid currentColor;\n      transform: rotate(45deg);\n    }\n\n    .note-header { margin-top: 3px; }\n    .note-education { margin-top: 170px; }\n    .note-experience { margin-top: 96px; }\n    .note-projects { margin-top: 130px; }\n    .note-footer { margin-top: 165px; }\n\n    .footer {\n      position: relative;\n      z-index: 1;\n      display: grid;\n      grid-template-columns: 188px minmax(0, 1fr) 276px;\n      gap: 14px;\n      align-items: start;\n      margin-top: 20px;\n      padding-top: 8px;\n      border-top: 2px solid rgba(165, 79, 85, .36);\n      break-inside: avoid;\n    }\n\n    .footer-label {\n      margin: 0;\n      font-size: 24px;\n      font-weight: 600;\n    }\n\n    .footer-copy {\n      min-width: 0;\n      font-size: 16px;\n      line-height: 1.55;\n    }\n\n    .footer-tagline { margin: 0; font-weight: 700; }\n    .additional-note { margin: 2px 0 0; color: var(--ink-soft); white-space: pre-line; }\n\n    .footer-comment {\n      position: relative;\n      margin: 0;\n      padding-left: 24px;\n      color: var(--blue-ink);\n      border-left: 3px solid rgba(44, 47, 88, .78);\n      font-size: 17px;\n      line-height: 1.6;\n      font-weight: 600;\n    }\n\n    .footer:has(.footer-tagline:empty):has(.additional-note:empty) { display: none; }\n\n    .footer-comment::before {\n      content: \"\";\n      position: absolute;\n      left: -35px;\n      top: 15px;\n      width: 28px;\n      border-top: 3px solid currentColor;\n    }\n\n    .empty-safe:empty { display: none; }\n\n    @media (max-width: 900px) {\n      body { font-size: 15px; }\n      .page {\n        width: 100%;\n        min-height: 100vh;\n        margin: 0;\n        padding: 32px 22px 36px 58px;\n        border: 0;\n        box-shadow: none;\n        background:\n          linear-gradient(90deg, transparent 0, transparent 42px, var(--red-rule) 42px, var(--red-rule) 44px, transparent 44px),\n          repeating-linear-gradient(to bottom, transparent 0, transparent 31px, var(--rule) 31px, var(--rule) 32px),\n          linear-gradient(135deg, var(--paper-light), var(--paper));\n      }\n      .topline,\n      .resume-grid { grid-template-columns: minmax(0, 1fr); }\n      .comments-heading,\n      .comments-column,\n      .footer-comment { display: none; }\n      .section { grid-template-columns: 150px minmax(0, 1fr); }\n      .footer { grid-template-columns: 150px minmax(0, 1fr); }\n      .metrics-list,\n      .industry-list { grid-template-columns: minmax(0, 1fr); }\n    }\n\n    @media (max-width: 560px) {\n      .page { padding-left: 54px; padding-right: 16px; }\n      .section,\n      .footer { grid-template-columns: minmax(0, 1fr); gap: 2px; }\n      .experience-item { grid-template-columns: minmax(0, 1fr); gap: 0; }\n      .section-title { font-size: 22px; }\n      .full-name { font-size: 27px; }\n    }\n\n    @page { size: A4; margin: 8mm; }\n\n    @media print {\n      :root { --paper-line: 6.35mm; }\n      html, body { background: #fff !important; }\n      body {\n        margin: 0;\n        font-size: 10.2pt;\n        line-height: 1.48;\n      }\n      .page {\n        width: 194mm;\n        min-height: 281mm;\n        margin: 0 auto;\n        padding: 7mm 6mm 7mm 13mm;\n        border: 0;\n        box-shadow: none;\n        background:\n          linear-gradient(90deg, transparent 0, transparent 10mm, var(--red-rule) 10mm, var(--red-rule) 10.35mm, transparent 10.35mm),\n          repeating-linear-gradient(to bottom, transparent 0, transparent calc(var(--paper-line) - .22mm), var(--rule) calc(var(--paper-line) - .22mm), var(--rule) var(--paper-line)),\n          linear-gradient(135deg, var(--paper-light), var(--paper));\n      }\n      .topline,\n      .resume-grid {\n        grid-template-columns: minmax(0, 1fr) 43mm;\n        gap: 4.5mm;\n      }\n      .topline { min-height: 9mm; }\n      .document-brand { min-height: 10mm; }\n      .brand-word { font-size: 20pt; }\n      .brand-systems { margin-top: 1.2mm; font-size: 22pt; }\n      .brand-tagline { margin-top: 1.4mm; padding-left: 15mm; font-size: 4.8pt; }\n      .comments-heading { font-size: 10pt; }\n      .comments-column {\n        min-height: 245mm;\n        padding: 3mm 1mm 5mm 4mm;\n        border-left-width: .55mm;\n      }\n      .full-name { font-size: 21pt; }\n      .role-line { font-size: 12.5pt; }\n      .domain-line,\n      .contact-block,\n      .short-summary { font-size: 9.2pt; }\n      .section {\n        grid-template-columns: 30mm minmax(0, 1fr);\n        gap: 3mm;\n        margin: 1.3mm 0 2.3mm;\n      }\n      .section-title { font-size: 15pt; }\n      .objective-text { font-size: 10.5pt; }\n      .metrics-list { gap: .6mm 3mm; }\n      .metric-value { font-size: 11.5pt; }\n      .industry-list { gap: 1.3mm 3mm; }\n      .industry-item { grid-template-columns: 6mm minmax(0, 1fr); gap: 1.3mm; }\n      .industry-letter { width: 5.5mm; height: 5.5mm; font-size: 8.8pt; border-width: .35mm; }\n      .industry-description,\n      .project-description,\n      .experience-company,\n      .experience-date { font-size: 8.8pt; }\n      .project-name,\n      .tech-title,\n      .experience-position { font-size: 10.5pt; }\n      .experience-item { grid-template-columns: 24mm minmax(0, 1fr); gap: 2.5mm; margin-bottom: 2mm; }\n      .note { margin-bottom: 7mm; font-size: 9.5pt; line-height: 1.58; }\n      .note::before { left: -6mm; top: 2.6mm; width: 4.8mm; border-top-width: .5mm; }\n      .note::after { left: -6.6mm; top: 1.8mm; width: 1.6mm; height: 1.6mm; border-width: 0 0 .5mm .5mm; }\n      .note-education { margin-top: 24mm; }\n      .note-experience { margin-top: 16mm; }\n      .note-projects { margin-top: 22mm; }\n      .note-footer { margin-top: 28mm; }\n      .footer {\n        grid-template-columns: 30mm minmax(0, 1fr) 43mm;\n        gap: 3mm;\n        margin-top: 3mm;\n      }\n      .footer-label { font-size: 14pt; }\n      .footer-copy,\n      .footer-comment { font-size: 9pt; }\n      .section-title,\n      .experience-position,\n      .project-name,\n      .tech-title { break-after: avoid; }\n      .experience-item,\n      .industry-item,\n      .project-item,\n      .tech-panel,\n      .footer { break-inside: avoid; }\n    }\n  </style>\n</head>\n<body>\n  <article class=\"page\">\n    <div class=\"document\">\n      <header class=\"topline\">\n        <div class=\"document-brand\" aria-label=\"Leadex Systems - Your Integration Partner\">\n          <span class=\"brand-word brand-leadex\">Leadex</span>\n          <span class=\"brand-word brand-systems\">systems</span>\n          <span class=\"brand-tagline\">YOUR INTEGRATION PARTNER</span>\n        </div>\n        <p class=\"comments-heading\">comments</p>\n      </header>\n\n      <div class=\"resume-grid\">\n        <main class=\"main-column\">\n          <header class=\"identity\">\n            <h1 class=\"full-name\">{{FULL_NAME}}</h1>\n            <p class=\"role-line\">{{ROLE_TITLE}}</p>\n            <div class=\"domain-line\">\n              <span>{{SPECIALIZATION}}</span>\n              <span>{{PRIMARY_DOMAIN}}</span>\n            </div>\n            <p class=\"short-summary empty-safe\">{{SHORT_PROFILE_SUMMARY}}</p>\n            <div class=\"contact-block\">\n              <div class=\"location-row\">\n                <span>{{LOCATION}}</span>\n                <span>{{CITY_COUNTRY}}</span>\n              </div>\n              <div class=\"contact-row\">\n                <span>{{EMAIL}}</span>\n                <span>{{PHONE}}</span>\n                <span>{{LINKEDIN_URL}}</span>\n              </div>\n            </div>\n          </header>\n\n          <!--CVB:section metrics-->\n          <section class=\"section\">\n            <h2 class=\"section-title\">Quick facts</h2>\n            <div class=\"section-body\">\n              <ul class=\"metrics-list\">\n                <!--CVB:repeat metrics-->\n                <li class=\"metric-item\" data-cvb-kind=\"metrics\">\n                  <span class=\"metric-label\">{{LABEL}}</span>\n                  <strong class=\"metric-value\">{{VALUE}}</strong>\n                </li>\n                <!--CVB:endrepeat metrics-->\n              </ul>\n            </div>\n          </section>\n          <!--CVB:endsection metrics-->\n\n          <!--CVB:section professionalSummary-->\n          <section class=\"section\">\n            <h2 class=\"section-title\">Objective</h2>\n            <div class=\"section-body\">\n              <p class=\"text objective-text\">{{PROFESSIONAL_SUMMARY}}</p>\n            </div>\n          </section>\n          <!--CVB:endsection professionalSummary-->\n\n          <!--CVB:section education-->\n          <section class=\"section\">\n            <h2 class=\"section-title\">Education</h2>\n            <div class=\"section-body\">\n              <ul class=\"simple-list\">\n                <!--CVB:repeat education-->\n                <li data-cvb-kind=\"education\">{{LINE}}</li>\n                <!--CVB:endrepeat education-->\n              </ul>\n            </div>\n          </section>\n          <!--CVB:endsection education-->\n\n          <!--CVB:section experience-->\n          <section class=\"section\">\n            <h2 class=\"section-title\">Experience</h2>\n            <div class=\"section-body\">\n              <div class=\"experience-list\">\n                <!--CVB:repeat experience-->\n                <article class=\"experience-item\" data-cvb-kind=\"experience\">\n                  <div class=\"experience-date\">{{DATE_FROM}}{{DATE_TO}}</div>\n                  <div class=\"experience-content\">\n                    <h3 class=\"experience-position\">{{POSITION}}</h3>\n                    <!--CVB:section experienceCompany-->\n                    <p class=\"experience-company\">{{COMPANY_LINE}}</p>\n                    <!--CVB:endsection experienceCompany-->\n                    <ul class=\"achievement-list\">\n                      <!--CVB:repeat achievements-->\n                      <li>{{TEXT}}</li>\n                      <!--CVB:endrepeat achievements-->\n                    </ul>\n                  </div>\n                </article>\n                <!--CVB:endrepeat experience-->\n              </div>\n            </div>\n          </section>\n          <!--CVB:endsection experience-->\n\n          <!--CVB:section skills-->\n          <section class=\"section\">\n            <h2 class=\"section-title\">Skills</h2>\n            <div class=\"section-body\">\n              <ul class=\"skill-list\">\n                <!--CVB:repeat skills-->\n                <li class=\"skill-item\" data-cvb-kind=\"skills\">{{LABEL}}</li>\n                <!--CVB:endrepeat skills-->\n              </ul>\n            </div>\n          </section>\n          <!--CVB:endsection skills-->\n\n          <!--CVB:section industries-->\n          <section class=\"section\">\n            <h2 class=\"section-title\">Industries</h2>\n            <div class=\"section-body industry-list\">\n              <!--CVB:repeat industries-->\n              <article class=\"industry-item\" data-cvb-kind=\"industries\">\n                {{MEDIA}}\n                <div>\n                  <span class=\"industry-title\">{{TITLE}}</span>\n                  <!--CVB:section industryDesc-->\n                  <span class=\"industry-description\">{{DESCRIPTION}}</span>\n                  <!--CVB:endsection industryDesc-->\n                </div>\n              </article>\n              <!--CVB:endrepeat industries-->\n            </div>\n          </section>\n          <!--CVB:endsection industries-->\n\n          <!--CVB:section certifications-->\n          <section class=\"section\">\n            <h2 class=\"section-title\">Certifications</h2>\n            <div class=\"section-body\">\n              <ul class=\"simple-list\">\n                <!--CVB:repeat certifications-->\n                <li data-cvb-kind=\"certifications\">{{TITLE}}</li>\n                <!--CVB:endrepeat certifications-->\n              </ul>\n            </div>\n          </section>\n          <!--CVB:endsection certifications-->\n\n          <!--CVB:section languages-->\n          <section class=\"section\">\n            <h2 class=\"section-title\">Languages</h2>\n            <div class=\"section-body\">\n              <ul class=\"simple-list\">\n                <!--CVB:repeat languages-->\n                <li data-cvb-kind=\"languages\">{{LINE}}</li>\n                <!--CVB:endrepeat languages-->\n              </ul>\n            </div>\n          </section>\n          <!--CVB:endsection languages-->\n\n          <!--CVB:section projects-->\n          <section class=\"section\">\n            <h2 class=\"section-title\">Projects</h2>\n            <div class=\"section-body project-list\">\n              <!--CVB:repeat projects-->\n              <article class=\"project-item\" data-cvb-kind=\"projects\">\n                <h3 class=\"project-name\">{{NAME}}</h3>\n                <!--CVB:section projectDesc-->\n                <p class=\"project-description\">{{DESCRIPTION}}</p>\n                <!--CVB:endsection projectDesc-->\n              </article>\n              <!--CVB:endrepeat projects-->\n            </div>\n          </section>\n          <!--CVB:endsection projects-->\n\n          <!--CVB:section techPanels-->\n          <section class=\"section\">\n            <h2 class=\"section-title\">Technical expertise</h2>\n            <div class=\"section-body tech-list\">\n              <!--CVB:repeat techPanels-->\n              <article class=\"tech-panel\" data-cvb-kind=\"techPanels\">\n                <h3 class=\"tech-title\">{{TITLE}}</h3>\n                <ul class=\"tech-bullets\">\n                  <!--CVB:repeat techBullets-->\n                  <li>{{TEXT}}</li>\n                  <!--CVB:endrepeat techBullets-->\n                </ul>\n              </article>\n              <!--CVB:endrepeat techPanels-->\n            </div>\n          </section>\n          <!--CVB:endsection techPanels-->\n        </main>\n\n        <aside class=\"comments-column\" aria-hidden=\"true\">\n          <p class=\"note note-header\">Keep personal details concise; optional biographical data may be omitted.</p>\n          <p class=\"note note-education\">Begin with the most recent qualification and work backwards.</p>\n          <p class=\"note note-experience\">Begin with the most recent employment and focus on measurable outcomes.</p>\n          <p class=\"note note-projects\">Use short, specific examples that support the role you are targeting.</p>\n          <p class=\"note note-footer\">Additional notes or reference information can be included at the end.</p>\n        </aside>\n      </div>\n\n      <footer class=\"footer\">\n        <h2 class=\"footer-label\">Notes</h2>\n        <div class=\"footer-copy\">\n          <p class=\"footer-tagline empty-safe\">{{FOOTER_TAGLINE}}</p>\n          <p class=\"additional-note empty-safe\">{{ADDITIONAL_NOTE}}</p>\n        </div>\n        <p class=\"footer-comment\" aria-hidden=\"true\">Keep the final section brief and relevant to the application.</p>\n      </footer>\n    </div>\n  </article>\n</body>\n</html>\n";

  function render(data, ctx) {
    data = data || {};
    ctx = ctx || {};

    var esc = typeof ctx.esc === 'function' ? ctx.esc : function (value) {
      return String(value == null ? '' : value).replace(/[&<>"']/g, function (char) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
      });
    };
    var fillTokens = ctx.fillTokens;
    var expandRepeat = ctx.expandRepeat;
    var expandSection = ctx.expandSection;

    if (typeof fillTokens !== 'function' || typeof expandRepeat !== 'function' || typeof expandSection !== 'function') {
      throw new Error('CV Builder render context is incomplete.');
    }

    function str(value) { return String(value == null ? '' : value); }
    function hasText(value) { return str(value).trim().length > 0; }
    function array(value) { return Array.isArray(value) ? value : []; }
    function joinPresent(values, separator) {
      return values.map(str).filter(hasText).join(separator);
    }
    function dateParts(from, to) {
      var start = str(from).trim();
      var end = str(to).trim();
      return {
        from: esc(start + (start && end ? ' — ' : '')),
        to: esc(end)
      };
    }
    function educationLine(item) {
      var study = joinPresent([item && item.title, item && item.org], ', ');
      return joinPresent([item && item.year, study], '  ');
    }
    function languageLine(item) {
      return joinPresent([item && item.name, item && item.level], ' — ');
    }
    function letterFallback(title) {
      var match = str(title).trim().match(/[A-Za-z0-9À-ÖØ-öø-ÿА-Яа-яЁё]/);
      return match ? match[0].toUpperCase() : '•';
    }
    function removeParagraphByClass(markup, className) {
      var marker = '<p class="' + className + '"';
      var start = markup.indexOf(marker);
      if (start < 0) return markup;
      var end = markup.indexOf('</p>', start);
      if (end < 0) return markup;
      return markup.slice(0, start) + markup.slice(end + 4);
    }

    var personal = data.personal || {};
    var html = SOURCE;

    var metrics = array(data.metrics);
    html = expandSection(html, 'metrics', metrics.length > 0, function (body) {
      return expandRepeat(body, 'metrics', metrics, function (unit, item) {
        return fillTokens(unit, {
          LABEL: esc(item && item.label),
          VALUE: esc(item && item.value)
        });
      });
    });

    html = expandSection(html, 'professionalSummary', hasText(personal.professionalSummary), function (body) {
      return fillTokens(body, { PROFESSIONAL_SUMMARY: esc(personal.professionalSummary) });
    });

    var education = array(data.education);
    html = expandSection(html, 'education', education.length > 0, function (body) {
      return expandRepeat(body, 'education', education, function (unit, item) {
        return fillTokens(unit, { LINE: esc(educationLine(item || {})) });
      });
    });

    var experience = array(data.experience);
    html = expandSection(html, 'experience', experience.length > 0, function (body) {
      return expandRepeat(body, 'experience', experience, function (unit, item) {
        item = item || {};
        var companyLine = joinPresent([item.company, item.location], ' · ');
        unit = expandSection(unit, 'experienceCompany', hasText(companyLine), function (companyBody) {
          return fillTokens(companyBody, { COMPANY_LINE: esc(companyLine) });
        });
        unit = expandRepeat(unit, 'achievements', array(item.achievements), function (achievementUnit, achievement) {
          return fillTokens(achievementUnit, { TEXT: esc(achievement && achievement.text) });
        });
        var dates = dateParts(item.dateFrom, item.dateTo);
        return fillTokens(unit, {
          POSITION: esc(item.position),
          DATE_FROM: dates.from,
          DATE_TO: dates.to
        });
      });
    });

    var skills = array(data.skills);
    html = expandSection(html, 'skills', skills.length > 0, function (body) {
      return expandRepeat(body, 'skills', skills, function (unit, item) {
        return fillTokens(unit, { LABEL: esc(item && item.label) });
      });
    });

    var industries = array(data.industries);
    html = expandSection(html, 'industries', industries.length > 0, function (body) {
      return expandRepeat(body, 'industries', industries, function (unit, item) {
        item = item || {};
        unit = expandSection(unit, 'industryDesc', hasText(item.description), function (descriptionBody) {
          return fillTokens(descriptionBody, { DESCRIPTION: esc(item.description) });
        });
        return fillTokens(unit, {
          MEDIA: '<span class="industry-letter" aria-hidden="true">' + esc(letterFallback(item.title)) + '</span>',
          TITLE: esc(item.title)
        });
      });
    });

    var certifications = array(data.certifications);
    html = expandSection(html, 'certifications', certifications.length > 0, function (body) {
      return expandRepeat(body, 'certifications', certifications, function (unit, item) {
        return fillTokens(unit, { TITLE: esc(item && item.title) });
      });
    });

    var languages = array(data.languages);
    html = expandSection(html, 'languages', languages.length > 0, function (body) {
      return expandRepeat(body, 'languages', languages, function (unit, item) {
        return fillTokens(unit, { LINE: esc(languageLine(item || {})) });
      });
    });

    var projects = array(data.projects);
    html = expandSection(html, 'projects', projects.length > 0, function (body) {
      return expandRepeat(body, 'projects', projects, function (unit, item) {
        item = item || {};
        unit = expandSection(unit, 'projectDesc', hasText(item.description), function (descriptionBody) {
          return fillTokens(descriptionBody, { DESCRIPTION: esc(item.description) });
        });
        return fillTokens(unit, { NAME: esc(item.name) });
      });
    });

    var techPanels = array(data.techPanels);
    html = expandSection(html, 'techPanels', techPanels.length > 0, function (body) {
      return expandRepeat(body, 'techPanels', techPanels, function (unit, item) {
        item = item || {};
        unit = expandRepeat(unit, 'techBullets', array(item.bullets), function (bulletUnit, bullet) {
          return fillTokens(bulletUnit, { TEXT: esc(bullet && bullet.text) });
        });
        return fillTokens(unit, { TITLE: esc(item.title) });
      });
    });

    if (!education.length) html = removeParagraphByClass(html, 'note note-education');
    if (!experience.length) html = removeParagraphByClass(html, 'note note-experience');
    if (!projects.length) html = removeParagraphByClass(html, 'note note-projects');
    if (!hasText(personal.footerTagline) && !hasText(personal.additionalNote)) {
      html = removeParagraphByClass(html, 'note note-footer');
      var footerStart = html.indexOf('<footer class="footer">');
      var footerEnd = footerStart >= 0 ? html.indexOf('</footer>', footerStart) : -1;
      if (footerStart >= 0 && footerEnd >= 0) {
        html = html.slice(0, footerStart) + html.slice(footerEnd + 9);
      }
    }

    return fillTokens(html, {
      FULL_NAME: esc(personal.fullName),
      ROLE_TITLE: esc(personal.roleTitle),
      SPECIALIZATION: esc(personal.specialization),
      PRIMARY_DOMAIN: esc(personal.primaryDomain),
      LOCATION: esc(personal.location),
      CITY_COUNTRY: esc(personal.cityCountry),
      EMAIL: esc(personal.email),
      PHONE: esc(personal.phone),
      LINKEDIN_URL: esc(personal.linkedinUrl),
      SHORT_PROFILE_SUMMARY: esc(personal.shortProfileSummary),
      PROFESSIONAL_SUMMARY: esc(personal.professionalSummary),
      FOOTER_TAGLINE: esc(personal.footerTagline),
      ADDITIONAL_NOTE: esc(personal.additionalNote)
    });
  }

  window.CVB = window.CVB || { templates: {} };
  window.CVB.templates = window.CVB.templates || {};
  window.CVB.templates[ID] = { id: ID, name: NAME, render: render };
}());
