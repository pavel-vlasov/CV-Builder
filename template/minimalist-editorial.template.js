/* CV Builder — "Minimalist — Editorial" template.
 * Generated from resources/template/minimalist-editorial.source.html.
 * Run: node scripts/build-template.mjs
 */
(function () {
  'use strict';
  var SOURCE = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>{{FULL_NAME}} — CV</title>\n  <meta name=\"description\" content=\"Minimal editorial CV template\" />\n  <style>\n    :root {\n      --paper: #ffffff;\n      --canvas: #ebeae6;\n      --ink: #111111;\n      --muted: #5d5d5d;\n      --faint: #8a8a8a;\n      --rule: #b9b9b9;\n      --rule-soft: #dddddd;\n      --page-width: 1120px;\n      --page-pad-x: 74px;\n      --page-pad-y: 66px;\n      --sidebar: 244px;\n      --gap: 42px;\n      --sans: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n    }\n\n    *, *::before, *::after { box-sizing: border-box; }\n\n    html {\n      background: transparent;\n      color: var(--ink);\n      font-family: var(--sans);\n      -webkit-print-color-adjust: exact;\n      print-color-adjust: exact;\n    }\n\n    body {\n      margin: 0;\n      padding: 24px 0;\n      background: transparent;\n      color: var(--ink);\n    }\n\n    .page {\n      width: var(--page-width);\n      min-height: 1584px;\n      margin: 0 auto;\n      padding: var(--page-pad-y) var(--page-pad-x) 52px;\n      background: var(--paper);\n      border: 1px solid rgba(0, 0, 0, 0.08);\n      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0, 0, 0, 0.06);\n      overflow: hidden;\n    }\n\n    .cv-header {\n      display: grid;\n      grid-template-columns: minmax(0, 1fr) 286px;\n      gap: 46px;\n      align-items: start;\n      padding-bottom: 30px;\n      border-bottom: 1px solid var(--rule);\n    }\n\n    .identity { min-width: 0; }\n\n    .name {\n      max-width: 520px;\n      margin: -5px 0 18px;\n      color: var(--ink);\n      font-size: 55px;\n      font-weight: 500;\n      line-height: 1.09;\n      letter-spacing: 0.235em;\n      text-transform: uppercase;\n      overflow-wrap: anywhere;\n    }\n\n    .role {\n      margin: 0;\n      color: var(--ink);\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.35;\n      letter-spacing: 0.36em;\n      text-transform: uppercase;\n    }\n\n    .identity-meta {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 7px 14px;\n      margin-top: 13px;\n      color: var(--muted);\n      font-size: 11px;\n      line-height: 1.45;\n      letter-spacing: 0.11em;\n      text-transform: uppercase;\n    }\n\n    .identity-meta span:not(:empty) + span:not(:empty)::before {\n      content: \"·\";\n      margin-right: 14px;\n      color: var(--faint);\n    }\n\n    .contacts {\n      display: grid;\n      gap: 9px;\n      margin: 4px 0 0;\n      font-style: normal;\n    }\n\n    .contact-row {\n      display: grid;\n      grid-template-columns: minmax(0, 1fr) 23px;\n      gap: 10px;\n      align-items: center;\n      min-width: 0;\n      color: var(--muted);\n      font-size: 11px;\n      line-height: 1.35;\n      text-align: right;\n    }\n\n    .contact-value {\n      overflow-wrap: anywhere;\n    }\n\n    .contact-icon {\n      display: inline-grid;\n      place-items: center;\n      width: 20px;\n      height: 20px;\n      border-radius: 50%;\n      background: var(--ink);\n      color: #ffffff;\n    }\n\n    .contact-icon svg {\n      display: block;\n      width: 11px;\n      height: 11px;\n      fill: none;\n      stroke: currentColor;\n      stroke-width: 1.8;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n    }\n\n    .section {\n      margin-top: 30px;\n    }\n\n    .section-title {\n      margin: 0 0 17px;\n      color: var(--ink);\n      font-size: 12px;\n      font-weight: 700;\n      line-height: 1.25;\n      letter-spacing: 0.31em;\n      text-transform: uppercase;\n    }\n\n    .summary {\n      padding-bottom: 27px;\n      border-bottom: 1px solid var(--rule);\n    }\n\n    .summary p {\n      margin: 0;\n      color: #353535;\n      font-size: 13px;\n      line-height: 1.72;\n    }\n\n    .summary p + p { margin-top: 10px; }\n\n    .metrics {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n      gap: 0;\n      margin: 0;\n      padding: 19px 0 18px;\n      border-bottom: 1px solid var(--rule);\n    }\n\n    .metric {\n      min-width: 0;\n      padding: 0 20px;\n      border-left: 1px solid var(--rule-soft);\n      text-align: center;\n    }\n\n    .metric:first-child { border-left: 0; padding-left: 0; }\n    .metric:last-child { padding-right: 0; }\n\n    .metric-value {\n      display: block;\n      margin-bottom: 5px;\n      font-size: 23px;\n      font-weight: 500;\n      line-height: 1;\n      letter-spacing: 0.04em;\n    }\n\n    .metric-label {\n      display: block;\n      color: var(--muted);\n      font-size: 9.5px;\n      line-height: 1.35;\n      letter-spacing: 0.15em;\n      text-transform: uppercase;\n      overflow-wrap: anywhere;\n    }\n\n    .content-grid {\n      display: grid;\n      grid-template-columns: var(--sidebar) minmax(0, 1fr);\n      gap: var(--gap);\n      margin-top: 31px;\n      align-items: start;\n    }\n\n    .sidebar {\n      min-width: 0;\n      padding-right: 34px;\n      border-right: 1px solid var(--rule);\n    }\n\n    .main-column { min-width: 0; }\n\n    .sidebar-section,\n    .main-section {\n      break-inside: auto;\n    }\n\n    .sidebar-section + .sidebar-section,\n    .main-section + .main-section {\n      margin-top: 35px;\n      padding-top: 31px;\n      border-top: 1px solid var(--rule-soft);\n    }\n\n    .sidebar .section-title,\n    .main-column .section-title {\n      margin-bottom: 18px;\n    }\n\n    .education-list,\n    .language-list,\n    .certification-list,\n    .industry-list,\n    .skill-list,\n    .experience-list,\n    .project-list,\n    .tech-panel-list {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n    }\n\n    .education-item,\n    .language-item,\n    .certification-item,\n    .industry-item {\n      margin: 0 0 17px;\n      break-inside: avoid;\n    }\n\n    .education-item:last-child,\n    .language-item:last-child,\n    .certification-item:last-child,\n    .industry-item:last-child { margin-bottom: 0; }\n\n    .compact-line {\n      color: var(--muted);\n      font-size: 11px;\n      line-height: 1.52;\n    }\n\n    .education-item .compact-line {\n      color: var(--ink);\n      font-size: 10.5px;\n      line-height: 1.55;\n      text-transform: uppercase;\n    }\n\n    .skill-list {\n      display: grid;\n      gap: 7px;\n    }\n\n    .skill-item,\n    .certification-item,\n    .language-item {\n      position: relative;\n      padding-left: 11px;\n      color: var(--muted);\n      font-size: 11px;\n      line-height: 1.45;\n      overflow-wrap: anywhere;\n    }\n\n    .skill-item::before,\n    .certification-item::before,\n    .language-item::before {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      top: 0.63em;\n      width: 3px;\n      height: 3px;\n      border-radius: 50%;\n      background: var(--ink);\n    }\n\n    .industry-item {\n      display: grid;\n      grid-template-columns: 28px minmax(0, 1fr);\n      gap: 10px;\n      align-items: start;\n    }\n\n    .industry-monogram {\n      display: grid;\n      place-items: center;\n      width: 27px;\n      height: 27px;\n      border: 1px solid var(--ink);\n      color: var(--ink);\n      font-size: 8px;\n      font-weight: 700;\n      letter-spacing: 0.08em;\n      text-transform: uppercase;\n    }\n\n    .industry-title {\n      margin: 0;\n      color: var(--ink);\n      font-size: 10.5px;\n      font-weight: 700;\n      line-height: 1.35;\n      letter-spacing: 0.06em;\n      text-transform: uppercase;\n    }\n\n    .industry-description {\n      margin: 4px 0 0;\n      color: var(--muted);\n      font-size: 10.5px;\n      line-height: 1.47;\n    }\n\n    .experience-item,\n    .project-item,\n    .tech-panel {\n      break-inside: avoid;\n    }\n\n    .experience-item + .experience-item,\n    .project-item + .project-item,\n    .tech-panel + .tech-panel {\n      margin-top: 24px;\n    }\n\n    .item-head {\n      display: grid;\n      grid-template-columns: minmax(0, 1fr) auto;\n      gap: 18px;\n      align-items: baseline;\n    }\n\n    .item-title {\n      margin: 0;\n      color: var(--ink);\n      font-size: 11px;\n      font-weight: 700;\n      line-height: 1.4;\n      letter-spacing: 0.055em;\n      text-transform: uppercase;\n      overflow-wrap: anywhere;\n    }\n\n    .item-dates {\n      color: var(--muted);\n      font-size: 10px;\n      line-height: 1.4;\n      white-space: nowrap;\n    }\n\n    .date-from:not(:empty)::after { content: \" — \"; }\n\n    .company-line {\n      margin-top: 3px;\n      color: var(--muted);\n      font-size: 10.5px;\n      line-height: 1.45;\n    }\n\n    .achievement-list,\n    .tech-bullet-list {\n      margin: 10px 0 0;\n      padding: 0 0 0 20px;\n      color: #353535;\n      font-size: 11px;\n      line-height: 1.56;\n    }\n\n    .achievement-list li,\n    .tech-bullet-list li {\n      margin: 3px 0;\n      padding-left: 4px;\n    }\n\n    .project-description {\n      margin: 7px 0 0;\n      color: #353535;\n      font-size: 11px;\n      line-height: 1.58;\n    }\n\n    .tech-panel {\n      padding-left: 16px;\n      border-left: 2px solid var(--ink);\n    }\n\n    .additional-note {\n      margin-top: 32px;\n      padding: 17px 19px;\n      border: 1px solid var(--rule);\n      color: var(--muted);\n      font-size: 10.5px;\n      line-height: 1.55;\n    }\n\n    .cv-footer {\n      margin-top: 42px;\n      padding-top: 15px;\n      border-top: 1px solid var(--ink);\n      color: var(--muted);\n      font-size: 9px;\n      line-height: 1.45;\n      letter-spacing: 0.08em;\n      text-transform: uppercase;\n    }\n\n    @media (max-width: 900px) {\n      body { padding: 0; }\n      .page {\n        width: 100%;\n        min-height: 0;\n        padding: 44px 28px;\n        box-shadow: none;\n      }\n      .cv-header { grid-template-columns: 1fr; gap: 28px; }\n      .contacts { max-width: 420px; }\n      .contact-row { grid-template-columns: 23px minmax(0, 1fr); text-align: left; }\n      .contact-icon { grid-column: 1; grid-row: 1; }\n      .contact-value { grid-column: 2; grid-row: 1; }\n      .metrics { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 16px; }\n      .metric:nth-child(odd) { border-left: 0; }\n      .metric:nth-child(even) { border-left: 1px solid var(--rule-soft); }\n      .content-grid { grid-template-columns: 1fr; }\n      .sidebar { padding-right: 0; border-right: 0; }\n      .main-column { padding-top: 30px; border-top: 1px solid var(--rule); }\n      .name { font-size: clamp(34px, 9vw, 55px); }\n    }\n\n    @media print {\n      @page { size: A4; margin: 0; }\n      html, body { background: #ffffff !important; }\n      body { padding: 0; }\n      .page {\n        width: 210mm;\n        min-height: 297mm;\n        margin: 0;\n        padding: 13mm 14mm 11mm;\n        box-shadow: none;\n        overflow: visible;\n      }\n      .cv-header { grid-template-columns: minmax(0, 1fr) 50mm; gap: 8mm; padding-bottom: 6mm; }\n      .name { max-width: 96mm; margin-bottom: 4mm; font-size: 12.5mm; }\n      .role { font-size: 2.8mm; }\n      .identity-meta { font-size: 2.25mm; }\n      .contacts { gap: 1.5mm; }\n      .contact-row { grid-template-columns: minmax(0, 1fr) 4.5mm; gap: 2mm; font-size: 2.2mm; }\n      .contact-icon { width: 4mm; height: 4mm; }\n      .contact-icon svg { width: 2.2mm; height: 2.2mm; }\n      .section { margin-top: 6mm; }\n      .section-title { margin-bottom: 3mm; font-size: 2.6mm; }\n      .summary { padding-bottom: 5mm; }\n      .summary p { font-size: 2.65mm; line-height: 1.58; }\n      .metrics { padding: 4mm 0; }\n      .metric-value { font-size: 5mm; }\n      .metric-label { font-size: 1.9mm; }\n      .content-grid { grid-template-columns: 43mm minmax(0, 1fr); gap: 8mm; margin-top: 6mm; }\n      .sidebar { padding-right: 6mm; }\n      .sidebar-section + .sidebar-section,\n      .main-section + .main-section { margin-top: 6mm; padding-top: 5mm; }\n      .compact-line,\n      .skill-item,\n      .certification-item,\n      .language-item,\n      .industry-description,\n      .company-line,\n      .achievement-list,\n      .project-description,\n      .tech-bullet-list { font-size: 2.2mm; }\n      .education-item .compact-line,\n      .industry-title,\n      .item-title { font-size: 2.25mm; }\n      .item-dates { font-size: 2mm; }\n      .experience-item + .experience-item,\n      .project-item + .project-item,\n      .tech-panel + .tech-panel { margin-top: 4mm; }\n      .additional-note { margin-top: 6mm; padding: 3mm 4mm; font-size: 2.1mm; }\n      .cv-footer { margin-top: 7mm; padding-top: 3mm; font-size: 1.8mm; }\n      .experience-item,\n      .project-item,\n      .tech-panel,\n      .education-item,\n      .industry-item { break-inside: avoid; }\n    }\n  </style>\n</head>\n<body>\n  <main class=\"page\">\n    <header class=\"cv-header\">\n      <div class=\"identity\">\n        <h1 class=\"name\">{{FULL_NAME}}</h1>\n        <p class=\"role\">{{ROLE_TITLE}}</p>\n        <div class=\"identity-meta\">\n          <span>{{SPECIALIZATION}}</span>\n          <span>{{PRIMARY_DOMAIN}}</span>\n          <span>{{LOCATION}}</span>\n        </div>\n      </div>\n\n      <address class=\"contacts\">\n        <!--CVB:section phone-->\n        <div class=\"contact-row\">\n          <span class=\"contact-value\">{{PHONE}}</span>\n          <span class=\"contact-icon\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\"><path d=\"M5 4h4l2 5-3 2c1.4 2.8 3.6 5 6.4 6.4l2-3 5 2v4c0 1.1-.9 2-2 2C10.3 22.4 1.6 13.7 2 4.6 2 3.7 2.9 3 4 3h1z\"/></svg>\n          </span>\n        </div>\n        <!--CVB:endsection phone-->\n\n        <!--CVB:section email-->\n        <div class=\"contact-row\">\n          <span class=\"contact-value\">{{EMAIL}}</span>\n          <span class=\"contact-icon\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"m4 7 8 6 8-6\"/></svg>\n          </span>\n        </div>\n        <!--CVB:endsection email-->\n\n        <!--CVB:section cityCountry-->\n        <div class=\"contact-row\">\n          <span class=\"contact-value\">{{CITY_COUNTRY}}</span>\n          <span class=\"contact-icon\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\"><path d=\"M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11z\"/><circle cx=\"12\" cy=\"10\" r=\"2\"/></svg>\n          </span>\n        </div>\n        <!--CVB:endsection cityCountry-->\n\n        <!--CVB:section linkedin-->\n        <div class=\"contact-row\">\n          <span class=\"contact-value\">{{LINKEDIN_URL}}</span>\n          <span class=\"contact-icon\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\"><path d=\"M7 9v10M7 5.5v.1M11 19v-6a4 4 0 0 1 8 0v6M11 9v10\"/></svg>\n          </span>\n        </div>\n        <!--CVB:endsection linkedin-->\n      </address>\n    </header>\n\n    <!--CVB:section summary-->\n    <section class=\"section summary\">\n      <h2 class=\"section-title\">Summary</h2>\n      <p>{{SHORT_PROFILE_SUMMARY}}</p>\n      <!--CVB:section professionalSummary-->\n      <p>{{PROFESSIONAL_SUMMARY}}</p>\n      <!--CVB:endsection professionalSummary-->\n    </section>\n    <!--CVB:endsection summary-->\n\n    <!--CVB:section metrics-->\n    <section class=\"metrics\" aria-label=\"Career metrics\">\n      <!--CVB:repeat metrics-->\n      <div class=\"metric\">\n        <strong class=\"metric-value\">{{VALUE}}</strong>\n        <span class=\"metric-label\">{{LABEL}}</span>\n      </div>\n      <!--CVB:endrepeat metrics-->\n    </section>\n    <!--CVB:endsection metrics-->\n\n    <div class=\"content-grid\">\n      <aside class=\"sidebar\">\n        <!--CVB:section education-->\n        <section class=\"sidebar-section\">\n          <h2 class=\"section-title\">Education</h2>\n          <ul class=\"education-list\">\n            <!--CVB:repeat education-->\n            <li class=\"education-item\"><div class=\"compact-line\">{{LINE}}</div></li>\n            <!--CVB:endrepeat education-->\n          </ul>\n        </section>\n        <!--CVB:endsection education-->\n\n        <!--CVB:section skills-->\n        <section class=\"sidebar-section\">\n          <h2 class=\"section-title\">Skills</h2>\n          <ul class=\"skill-list\">\n            <!--CVB:repeat skills-->\n            <li class=\"skill-item\">{{LABEL}}</li>\n            <!--CVB:endrepeat skills-->\n          </ul>\n        </section>\n        <!--CVB:endsection skills-->\n\n        <!--CVB:section certifications-->\n        <section class=\"sidebar-section\">\n          <h2 class=\"section-title\">Certifications</h2>\n          <ul class=\"certification-list\">\n            <!--CVB:repeat certifications-->\n            <li class=\"certification-item\">{{TITLE}}</li>\n            <!--CVB:endrepeat certifications-->\n          </ul>\n        </section>\n        <!--CVB:endsection certifications-->\n\n        <!--CVB:section languages-->\n        <section class=\"sidebar-section\">\n          <h2 class=\"section-title\">Languages</h2>\n          <ul class=\"language-list\">\n            <!--CVB:repeat languages-->\n            <li class=\"language-item\">{{LINE}}</li>\n            <!--CVB:endrepeat languages-->\n          </ul>\n        </section>\n        <!--CVB:endsection languages-->\n\n        <!--CVB:section industries-->\n        <section class=\"sidebar-section\">\n          <h2 class=\"section-title\">Industries</h2>\n          <ul class=\"industry-list\">\n            <!--CVB:repeat industries-->\n            <li class=\"industry-item\">\n              <span class=\"industry-monogram\">{{MEDIA}}</span>\n              <div>\n                <h3 class=\"industry-title\">{{TITLE}}</h3>\n                <!--CVB:section industryDesc-->\n                <p class=\"industry-description\">{{DESCRIPTION}}</p>\n                <!--CVB:endsection industryDesc-->\n              </div>\n            </li>\n            <!--CVB:endrepeat industries-->\n          </ul>\n        </section>\n        <!--CVB:endsection industries-->\n      </aside>\n\n      <div class=\"main-column\">\n        <!--CVB:section experience-->\n        <section class=\"main-section experience-section\">\n          <h2 class=\"section-title\">Work Experience</h2>\n          <div class=\"experience-list experience-scroll\">\n            <!--CVB:repeat experience-->\n            <article class=\"experience-item item\">\n              <div class=\"item-head\">\n                <h3 class=\"item-title\">{{POSITION}}</h3>\n                <div class=\"item-dates\"><span class=\"date-from\">{{DATE_FROM}}</span><span class=\"date-to\">{{DATE_TO}}</span></div>\n              </div>\n              <!--CVB:section experienceCompany-->\n              <div class=\"company-line\">{{COMPANY_LINE}}</div>\n              <!--CVB:endsection experienceCompany-->\n              <ul class=\"achievement-list\">\n                <!--CVB:repeat achievements-->\n                <li>{{TEXT}}</li>\n                <!--CVB:endrepeat achievements-->\n              </ul>\n            </article>\n            <!--CVB:endrepeat experience-->\n          </div>\n        </section>\n        <!--CVB:endsection experience-->\n\n        <!--CVB:section projects-->\n        <section class=\"main-section\">\n          <h2 class=\"section-title\">Selected Projects</h2>\n          <div class=\"project-list\">\n            <!--CVB:repeat projects-->\n            <article class=\"project-item project-card\">\n              <div class=\"item-head\"><h3 class=\"item-title\">{{NAME}}</h3></div>\n              <!--CVB:section projectDesc-->\n              <p class=\"project-description\">{{DESCRIPTION}}</p>\n              <!--CVB:endsection projectDesc-->\n            </article>\n            <!--CVB:endrepeat projects-->\n          </div>\n        </section>\n        <!--CVB:endsection projects-->\n\n        <!--CVB:section techPanels-->\n        <section class=\"main-section\">\n          <h2 class=\"section-title\">Technical Expertise</h2>\n          <div class=\"tech-panel-list\">\n            <!--CVB:repeat techPanels-->\n            <article class=\"tech-panel panel\">\n              <h3 class=\"item-title\">{{TITLE}}</h3>\n              <ul class=\"tech-bullet-list\">\n                <!--CVB:repeat techBullets-->\n                <li>{{TEXT}}</li>\n                <!--CVB:endrepeat techBullets-->\n              </ul>\n            </article>\n            <!--CVB:endrepeat techPanels-->\n          </div>\n        </section>\n        <!--CVB:endsection techPanels-->\n\n        <!--CVB:section additionalNote-->\n        <div class=\"additional-note\">{{ADDITIONAL_NOTE}}</div>\n        <!--CVB:endsection additionalNote-->\n      </div>\n    </div>\n\n    <!--CVB:section footerTagline-->\n    <footer class=\"cv-footer\">{{FOOTER_TAGLINE}}</footer>\n    <!--CVB:endsection footerTagline-->\n  </main>\n</body>\n</html>\n";

  function text(value) {
    return String(value == null ? '' : value).trim();
  }

  function present(value) {
    return text(value).length > 0;
  }

  function cleanList(value) {
    return Array.isArray(value) ? value : [];
  }

  function initials(value) {
    var words = text(value).split(/\s+/).filter(Boolean);
    if (!words.length) return '';
    return words.slice(0, 2).map(function (word) { return word.charAt(0); }).join('').toUpperCase();
  }

  function joinEscaped(ctx, values, separator) {
    return values.filter(present).map(function (value) { return ctx.esc(text(value)); }).join(separator);
  }

  function render(data, ctx) {
    data = data || {};
    var personal = data.personal || {};
    var html = SOURCE;

    function scalarSection(name, value) {
      html = ctx.expandSection(html, name, present(value), function (body) { return body; });
    }

    scalarSection('phone', personal.phone);
    scalarSection('email', personal.email);
    scalarSection('cityCountry', personal.cityCountry);
    scalarSection('linkedin', personal.linkedinUrl);
    scalarSection('additionalNote', personal.additionalNote);
    scalarSection('footerTagline', personal.footerTagline);

    var hasShortSummary = present(personal.shortProfileSummary);
    var hasProfessionalSummary = present(personal.professionalSummary);
    html = ctx.expandSection(html, 'summary', hasShortSummary || hasProfessionalSummary, function (body) {
      body = ctx.expandSection(body, 'professionalSummary', hasProfessionalSummary, function (inner) {
        return ctx.fillTokens(inner, {
          PROFESSIONAL_SUMMARY: ctx.esc(text(personal.professionalSummary))
        });
      });
      return body;
    });

    var metrics = cleanList(data.metrics).filter(function (metric) {
      var value = Number(metric && metric.value);
      return Number.isFinite(value) && value !== 0;
    });
    html = ctx.expandSection(html, 'metrics', metrics.length > 0, function (body) {
      return ctx.expandRepeat(body, 'metrics', metrics, function (unit, metric) {
        return ctx.fillTokens(unit, {
          LABEL: ctx.esc(text(metric.label)),
          VALUE: ctx.esc(text(metric.value))
        });
      });
    });

    var education = cleanList(data.education).filter(function (item) {
      return item && (present(item.title) || present(item.org) || present(item.year));
    });
    html = ctx.expandSection(html, 'education', education.length > 0, function (body) {
      return ctx.expandRepeat(body, 'education', education, function (unit, item) {
        var line = joinEscaped(ctx, [item.title, item.org, item.year], ' · ');
        return ctx.fillTokens(unit, { LINE: line });
      });
    });

    var skills = cleanList(data.skills).filter(function (item) { return item && present(item.label); });
    html = ctx.expandSection(html, 'skills', skills.length > 0, function (body) {
      return ctx.expandRepeat(body, 'skills', skills, function (unit, item) {
        return ctx.fillTokens(unit, { LABEL: ctx.esc(text(item.label)) });
      });
    });

    var certifications = cleanList(data.certifications).filter(function (item) { return item && present(item.title); });
    html = ctx.expandSection(html, 'certifications', certifications.length > 0, function (body) {
      return ctx.expandRepeat(body, 'certifications', certifications, function (unit, item) {
        return ctx.fillTokens(unit, { TITLE: ctx.esc(text(item.title)) });
      });
    });

    var languages = cleanList(data.languages).filter(function (item) {
      return item && (present(item.name) || present(item.level));
    });
    html = ctx.expandSection(html, 'languages', languages.length > 0, function (body) {
      return ctx.expandRepeat(body, 'languages', languages, function (unit, item) {
        var line = joinEscaped(ctx, [item.name, item.level], ' · ');
        return ctx.fillTokens(unit, { LINE: line });
      });
    });

    var industries = cleanList(data.industries).filter(function (item) {
      return item && (present(item.title) || present(item.description));
    });
    html = ctx.expandSection(html, 'industries', industries.length > 0, function (body) {
      return ctx.expandRepeat(body, 'industries', industries, function (unit, item) {
        unit = ctx.expandSection(unit, 'industryDesc', present(item.description), function (inner) {
          return ctx.fillTokens(inner, { DESCRIPTION: ctx.esc(text(item.description)) });
        });
        return ctx.fillTokens(unit, {
          MEDIA: ctx.esc(initials(item.title)),
          TITLE: ctx.esc(text(item.title))
        });
      });
    });

    var experience = cleanList(data.experience).filter(function (item) {
      return item && (
        present(item.position) || present(item.company) || present(item.location) ||
        present(item.dateFrom) || present(item.dateTo) ||
        cleanList(item.achievements).some(function (achievement) { return achievement && present(achievement.text); })
      );
    });
    html = ctx.expandSection(html, 'experience', experience.length > 0, function (body) {
      return ctx.expandRepeat(body, 'experience', experience, function (unit, item) {
        var companyLine = joinEscaped(ctx, [item.company, item.location], ' · ');
        unit = ctx.expandSection(unit, 'experienceCompany', present(item.company) || present(item.location), function (inner) {
          return ctx.fillTokens(inner, { COMPANY_LINE: companyLine });
        });
        var achievements = cleanList(item.achievements).filter(function (achievement) {
          return achievement && present(achievement.text);
        });
        unit = ctx.expandRepeat(unit, 'achievements', achievements, function (achievementUnit, achievement) {
          return ctx.fillTokens(achievementUnit, { TEXT: ctx.esc(text(achievement.text)) });
        });
        return ctx.fillTokens(unit, {
          POSITION: ctx.esc(text(item.position)),
          DATE_FROM: ctx.esc(text(item.dateFrom)),
          DATE_TO: ctx.esc(text(item.dateTo))
        });
      });
    });

    var projects = cleanList(data.projects).filter(function (item) {
      return item && (present(item.name) || present(item.description));
    });
    html = ctx.expandSection(html, 'projects', projects.length > 0, function (body) {
      return ctx.expandRepeat(body, 'projects', projects, function (unit, item) {
        unit = ctx.expandSection(unit, 'projectDesc', present(item.description), function (inner) {
          return ctx.fillTokens(inner, { DESCRIPTION: ctx.esc(text(item.description)) });
        });
        return ctx.fillTokens(unit, { NAME: ctx.esc(text(item.name)) });
      });
    });

    var techPanels = cleanList(data.techPanels).filter(function (panel) {
      return panel && (present(panel.title) || cleanList(panel.bullets).some(function (bullet) { return bullet && present(bullet.text); }));
    });
    html = ctx.expandSection(html, 'techPanels', techPanels.length > 0, function (body) {
      return ctx.expandRepeat(body, 'techPanels', techPanels, function (unit, panel) {
        var bullets = cleanList(panel.bullets).filter(function (bullet) { return bullet && present(bullet.text); });
        unit = ctx.expandRepeat(unit, 'techBullets', bullets, function (bulletUnit, bullet) {
          return ctx.fillTokens(bulletUnit, { TEXT: ctx.esc(text(bullet.text)) });
        });
        return ctx.fillTokens(unit, { TITLE: ctx.esc(text(panel.title)) });
      });
    });

    return ctx.fillTokens(html, {
      FULL_NAME: ctx.esc(text(personal.fullName)),
      ROLE_TITLE: ctx.esc(text(personal.roleTitle)),
      SPECIALIZATION: ctx.esc(text(personal.specialization)),
      PRIMARY_DOMAIN: ctx.esc(text(personal.primaryDomain)),
      LOCATION: ctx.esc(text(personal.location)),
      CITY_COUNTRY: ctx.esc(text(personal.cityCountry)),
      EMAIL: ctx.esc(text(personal.email)),
      PHONE: ctx.esc(text(personal.phone)),
      LINKEDIN_URL: ctx.esc(text(personal.linkedinUrl)),
      SHORT_PROFILE_SUMMARY: ctx.esc(text(personal.shortProfileSummary)),
      PROFESSIONAL_SUMMARY: ctx.esc(text(personal.professionalSummary)),
      FOOTER_TAGLINE: ctx.esc(text(personal.footerTagline)),
      ADDITIONAL_NOTE: ctx.esc(text(personal.additionalNote))
    });
  }

  window.CVB = window.CVB || { templates: {} };
  window.CVB.templates = window.CVB.templates || {};
  window.CVB.templates['minimalist-editorial'] = {
    id: 'minimalist-editorial',
    name: 'Minimalist — Editorial',
    render: render
  };
})();
