/* Generated from leadex-american-notebook.source.html by scripts/build-template.mjs. Do not edit directly. */
(function () {
  'use strict';

  var ID = "leadex-american-notebook";
  var NAME = "Leadex — American Notebook";
  var SOURCE = "<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n  <title>{{FULL_NAME}} — CV</title>\r\n  <meta name=\"description\" content=\"American notebook-style CV template\" />\r\n  <!--\r\n    CV Builder template: leadex-american-notebook\r\n\r\n    Design specification\r\n    - Visual source: handwritten American résumé on ruled notebook paper.\r\n    - Warm paper, horizontal notebook rules, red margin line and blue-ink annotations.\r\n    - Main information uses black ink; guidance notes use blue-violet ink.\r\n    - No external fonts, images, scripts or user data embedded in decoration.\r\n    - Every data-driven section grows naturally and remains printable.\r\n  -->\r\n  <style>\r\n    :root {\r\n      --paper: #f5eee2;\r\n      --paper-light: #fbf6ec;\r\n      --ink: #232229;\r\n      --ink-soft: #4b4850;\r\n      --blue-ink: #343b86;\r\n      --rule: rgba(73, 87, 129, 0.24);\r\n      --red-rule: rgba(164, 72, 79, 0.62);\r\n      --edge: rgba(75, 56, 43, 0.22);\r\n      --paper-line: 34px;\r\n      --hand: \"Comic Neue\", \"Segoe Print\", \"Bradley Hand\", \"Comic Sans MS\", \"Chalkboard SE\", cursive;\r\n      --plain: system-ui, -apple-system, \"Segoe UI\", sans-serif;\r\n    }\r\n\r\n    * { box-sizing: border-box; }\r\n\r\n    html {\r\n      margin: 0;\r\n      min-height: 100%;\r\n      background: #e8e0d3;\r\n      -webkit-print-color-adjust: exact;\r\n      print-color-adjust: exact;\r\n    }\r\n\r\n    body {\r\n      margin: 0;\r\n      min-height: 100%;\r\n      color: var(--ink);\r\n      font-family: var(--hand);\r\n      font-size: 17px;\r\n      line-height: 1.55;\r\n      overflow-wrap: anywhere;\r\n    }\r\n\r\n    a { color: inherit; text-decoration: none; }\r\n\r\n    .page {\r\n      position: relative;\r\n      width: 1160px;\r\n      min-height: 1640px;\r\n      margin: 24px auto;\r\n      padding: 44px 46px 42px 82px;\r\n      overflow: hidden;\r\n      background:\r\n        linear-gradient(90deg,\r\n          transparent 0,\r\n          transparent 63px,\r\n          var(--red-rule) 63px,\r\n          var(--red-rule) 65px,\r\n          transparent 65px,\r\n          transparent 917px,\r\n          rgba(40, 44, 78, .28) 917px,\r\n          rgba(40, 44, 78, .28) 918px,\r\n          transparent 918px,\r\n          transparent 921px,\r\n          rgba(44, 47, 88, .78) 921px,\r\n          rgba(44, 47, 88, .78) 924px,\r\n          transparent 924px,\r\n          transparent 100%),\r\n        repeating-linear-gradient(\r\n          to bottom,\r\n          transparent 0,\r\n          transparent calc(var(--paper-line) - 1px),\r\n          var(--rule) calc(var(--paper-line) - 1px),\r\n          var(--rule) var(--paper-line)\r\n        ),\r\n        radial-gradient(circle at 18% 8%, rgba(255,255,255,.62), transparent 35%),\r\n        linear-gradient(135deg, var(--paper-light), var(--paper));\r\n      border: 1px solid var(--edge);\r\n      box-shadow: 0 20px 55px rgba(52, 40, 30, .22);\r\n    }\r\n\r\n    .page::before,\r\n    .page::after {\r\n      content: \"\";\r\n      position: absolute;\r\n      pointer-events: none;\r\n    }\r\n\r\n    .page::before {\r\n      inset: 0;\r\n      opacity: .32;\r\n      background-image:\r\n        radial-gradient(circle at 20% 30%, rgba(78,58,42,.08) 0 1px, transparent 1.5px),\r\n        radial-gradient(circle at 70% 80%, rgba(78,58,42,.06) 0 1px, transparent 1.4px);\r\n      background-size: 47px 53px, 61px 67px;\r\n      mix-blend-mode: multiply;\r\n    }\r\n\r\n    .page::after {\r\n      inset: 0;\r\n      box-shadow: inset 0 0 35px rgba(85, 59, 39, .13);\r\n    }\r\n\r\n    .document {\r\n      position: relative;\r\n      z-index: 1;\r\n    }\r\n\r\n    .topline {\r\n      position: relative;\r\n      min-height: 54px;\r\n      border-bottom: 2px solid rgba(165, 79, 85, .44);\r\n    }\r\n    .topline::after { content: \"\"; display: block; clear: both; overflow: hidden; }\r\n\r\n\r\n    .document-brand {\r\n      float: left;\r\n      margin: 0 0 3px;\r\n      min-height: 54px;\r\n      display: inline-flex;\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      justify-content: flex-end;\r\n      line-height: .74;\r\n      color: var(--blue-ink);\r\n      font-family: var(--hand);\r\n      font-style: normal;\r\n      text-decoration: none;\r\n      transform: translateY(1px);\r\n    }\r\n\r\n    .brand-word {\r\n      display: block;\r\n      white-space: nowrap;\r\n      font-size: 31px;\r\n      font-weight: 700;\r\n      color: var(--blue-ink);\r\n    }\r\n\r\n    .brand-systems {\r\n      margin-top: 5px;\r\n      font-size: 34px;\r\n    }\r\n\r\n    .brand-tagline {\r\n      display: block;\r\n      margin-top: 8px;\r\n      padding-left: 72px;\r\n      color: var(--blue-ink);\r\n      font-size: 7.5px;\r\n      font-weight: 700;\r\n      line-height: 1;\r\n      letter-spacing: .22em;\r\n      white-space: nowrap;\r\n    }\r\n\r\n    .comments-heading {\r\n      float: right;\r\n      width: 193px;\r\n      margin: 0 0 4px;\r\n      color: var(--blue-ink);\r\n      font-size: 17px;\r\n      font-weight: 700;\r\n      text-align: center;\r\n      transform: rotate(-1deg);\r\n    }\r\n\r\n    .main-column {\r\n      min-width: 0;\r\n      padding-top: 13px;\r\n      padding-right: 221px;\r\n    }\r\n\r\n    .identity {\r\n      margin-bottom: 18px;\r\n    }\r\n\r\n    .full-name {\r\n      margin: 0;\r\n      font-size: 31px;\r\n      line-height: 1.18;\r\n      font-weight: 700;\r\n      letter-spacing: .025em;\r\n      text-transform: uppercase;\r\n      transform: rotate(-.2deg);\r\n    }\r\n\r\n    .role-line {\r\n      margin: 5px 0 2px;\r\n      font-size: 19px;\r\n      font-weight: 600;\r\n    }\r\n\r\n    .domain-line {\r\n      color: var(--ink-soft);\r\n      font-size: 15px;\r\n    }\r\n\r\n    .domain-line span,\r\n    .contact-row span,\r\n    .location-row span {\r\n      display: inline;\r\n    }\r\n\r\n    .domain-line span:not(:empty) + span:not(:empty)::before,\r\n    .contact-row span:not(:empty) + span:not(:empty)::before,\r\n    .location-row span:not(:empty) + span:not(:empty)::before {\r\n      content: \"·\";\r\n      margin: 0 11px;\r\n      color: rgba(35, 34, 41, .55);\r\n    }\r\n\r\n    .short-summary {\r\n      max-width: 700px;\r\n      margin: 8px 0 0;\r\n      color: var(--ink-soft);\r\n      font-size: 16px;\r\n      line-height: 1.55;\r\n      white-space: pre-line;\r\n    }\r\n\r\n    .contact-block {\r\n      margin-top: 9px;\r\n      font-size: 15px;\r\n      line-height: 1.7;\r\n    }\r\n\r\n    .section {\r\n      position: relative;\r\n      margin: 8px 0 14px;\r\n      break-inside: auto;\r\n    }\r\n    .section::after { content: \"\"; display: block; clear: both; overflow: hidden; }\r\n\r\n    .section-title {\r\n      float: left;\r\n      width: 188px;\r\n      margin: 0;\r\n      padding-top: 1px;\r\n      font-size: 25px;\r\n      line-height: 1.28;\r\n      font-weight: 600;\r\n      letter-spacing: -.02em;\r\n      transform: rotate(-.2deg);\r\n    }\r\n\r\n    .section-body {\r\n      margin-left: 202px;\r\n      min-width: 0;\r\n    }\r\n\r\n    .section-body > :first-child { margin-top: 0; }\r\n    .section-body > :last-child { margin-bottom: 0; }\r\n\r\n    .text {\r\n      margin: 0;\r\n      white-space: pre-line;\r\n    }\r\n\r\n    .objective-text {\r\n      font-size: 19px;\r\n      line-height: 1.62;\r\n    }\r\n\r\n    .metrics-list,\r\n    .skill-list,\r\n    .simple-list,\r\n    .project-list,\r\n    .tech-list,\r\n    .experience-list {\r\n      margin: 0;\r\n      padding: 0;\r\n      list-style: none;\r\n    }\r\n\r\n    .experience-scroll {\r\n      max-height: 430px;\r\n      overflow-y: auto;\r\n      padding-right: 10px;\r\n      scrollbar-width: thin;\r\n      scrollbar-color: rgba(52, 59, 134, .55) rgba(75, 56, 43, .08);\r\n    }\r\n    .experience-scroll::-webkit-scrollbar { width: 8px; }\r\n    .experience-scroll::-webkit-scrollbar-track {\r\n      background: rgba(75, 56, 43, .08);\r\n      border-radius: 999px;\r\n    }\r\n    .experience-scroll::-webkit-scrollbar-thumb {\r\n      background: linear-gradient(180deg, var(--blue-ink), var(--red-rule));\r\n      border-radius: 999px;\r\n    }\r\n\r\n    .metrics-list {\r\n      overflow: hidden;\r\n    }\r\n    .metrics-list::after { content: \"\"; display: block; clear: both; overflow: hidden; }\r\n\r\n    .metric-item {\r\n      float: left;\r\n      width: calc(50% - 11px);\r\n      margin: 2px 0;\r\n      overflow: hidden;\r\n      min-width: 0;\r\n    }\r\n    .metric-item:nth-child(odd) { margin-right: 22px; }\r\n\r\n    .metric-label { color: var(--ink-soft); }\r\n    .metric-value { float: right; margin-left: 10px; font-size: 20px; font-weight: 700; white-space: nowrap; }\r\n\r\n    .skill-item {\r\n      display: inline;\r\n      margin-right: 14px;\r\n      line-height: 2;\r\n    }\r\n\r\n    .skill-item::before {\r\n      content: \"•\";\r\n      margin-right: 7px;\r\n    }\r\n\r\n    .industry-list {\r\n      overflow: hidden;\r\n    }\r\n    .industry-list::after { content: \"\"; display: block; clear: both; overflow: hidden; }\r\n\r\n    .industry-item {\r\n      float: left;\r\n      width: calc(50% - 10px);\r\n      margin: 0 0 8px;\r\n      break-inside: avoid;\r\n    }\r\n    .industry-item:nth-child(odd) { margin-right: 20px; }\r\n    .industry-item::after { content: \"\"; display: block; clear: both; overflow: hidden; }\r\n\r\n    .industry-item > div {\r\n      overflow: hidden;\r\n    }\r\n\r\n    .industry-letter {\r\n      float: left;\r\n      margin-right: 8px;\r\n      display: inline-flex;\r\n      width: 30px;\r\n      height: 30px;\r\n      align-items: center;\r\n      justify-content: center;\r\n      border: 2px solid currentColor;\r\n      border-radius: 50%;\r\n      font-size: 16px;\r\n      font-weight: 700;\r\n      transform: rotate(-3deg);\r\n      line-height: 1;\r\n    }\r\n\r\n    .industry-title { display: block; font-weight: 700; }\r\n    .industry-description { display: block; color: var(--ink-soft); font-size: 14px; line-height: 1.45; }\r\n\r\n    .simple-list li,\r\n    .project-item,\r\n    .tech-panel {\r\n      break-inside: avoid;\r\n    }\r\n\r\n    .simple-list li {\r\n      position: relative;\r\n      padding-left: 18px;\r\n      margin: 1px 0;\r\n    }\r\n\r\n    .simple-list li::before {\r\n      content: \"—\";\r\n      position: absolute;\r\n      left: 0;\r\n    }\r\n\r\n    .project-item,\r\n    .tech-panel {\r\n      margin: 0 0 9px;\r\n    }\r\n\r\n    .project-name,\r\n    .tech-title,\r\n    .experience-position {\r\n      margin: 0;\r\n      font-size: 18px;\r\n      font-weight: 700;\r\n    }\r\n\r\n    .project-description {\r\n      margin: 1px 0 0;\r\n      color: var(--ink-soft);\r\n      font-size: 15px;\r\n      line-height: 1.5;\r\n      white-space: pre-line;\r\n    }\r\n\r\n    .tech-bullets,\r\n    .achievement-list {\r\n      margin: 2px 0 0;\r\n      padding-left: 20px;\r\n    }\r\n\r\n    .tech-bullets li,\r\n    .achievement-list li {\r\n      margin: 1px 0;\r\n    }\r\n\r\n    .experience-item {\r\n      position: relative;\r\n      margin: 0 0 14px;\r\n    }\r\n    .experience-item::after { content: \"\"; display: block; clear: both; overflow: hidden; }\r\n\r\n    .experience-date {\r\n      float: left;\r\n      width: 142px;\r\n      padding-top: 1px;\r\n      font-size: 15px;\r\n      line-height: 1.45;\r\n    }\r\n\r\n    .experience-content {\r\n      margin-left: 155px;\r\n      min-width: 0;\r\n    }\r\n\r\n    .experience-company {\r\n      margin: 1px 0 3px;\r\n      color: var(--ink-soft);\r\n      font-size: 15px;\r\n      font-weight: 600;\r\n    }\r\n\r\n    .note {\r\n      position: relative;\r\n      margin: 7px 0 38px;\r\n      font-size: 18px;\r\n      line-height: 1.72;\r\n      font-weight: 600;\r\n      transform: rotate(-.35deg);\r\n    }\r\n\r\n    .note::before {\r\n      content: \"\";\r\n      position: absolute;\r\n      left: -35px;\r\n      top: 15px;\r\n      width: 27px;\r\n      border-top: 3px solid currentColor;\r\n    }\r\n\r\n    .note::after {\r\n      content: \"\";\r\n      position: absolute;\r\n      left: -38px;\r\n      top: 10px;\r\n      width: 9px;\r\n      height: 9px;\r\n      border-left: 3px solid currentColor;\r\n      border-bottom: 3px solid currentColor;\r\n      transform: rotate(45deg);\r\n    }\r\n\r\n    .note-header { margin-top: 3px; }\r\n    .note-education { margin-top: 170px; }\r\n    .note-experience { margin-top: 96px; }\r\n    .note-projects { margin-top: 130px; }\r\n    .note-footer { margin-top: 165px; }\r\n\r\n    .footer {\r\n      position: relative;\r\n      z-index: 1;\r\n      margin-top: 20px;\r\n      padding-top: 8px;\r\n      border-top: 2px solid rgba(165, 79, 85, .36);\r\n      break-inside: avoid;\r\n    }\r\n    .footer::after { content: \"\"; display: block; clear: both; overflow: hidden; }\r\n\r\n    .footer-label {\r\n      float: left;\r\n      width: 188px;\r\n      margin: 0;\r\n      font-size: 24px;\r\n      font-weight: 600;\r\n    }\r\n\r\n    .footer-copy {\r\n      margin-left: 202px;\r\n      min-width: 0;\r\n      font-size: 16px;\r\n      line-height: 1.55;\r\n    }\r\n\r\n    .footer-tagline { margin: 0; font-weight: 700; }\r\n    .additional-note { margin: 2px 0 0; color: var(--ink-soft); white-space: pre-line; }\r\n\r\n    .footer:has(.footer-tagline:empty):has(.additional-note:empty) { display: none; }\r\n\r\n    .empty-safe:empty { display: none; }\r\n\r\n    @media screen and (max-width: 900px) {\r\n      body { font-size: 15px; }\r\n      .page {\r\n        width: 100%;\r\n        min-height: 100vh;\r\n        margin: 0;\r\n        padding: 32px 22px 36px 58px;\r\n        border: 0;\r\n        box-shadow: none;\r\n        background:\r\n          linear-gradient(90deg, transparent 0, transparent 42px, var(--red-rule) 42px, var(--red-rule) 44px, transparent 44px),\r\n          repeating-linear-gradient(to bottom, transparent 0, transparent 31px, var(--rule) 31px, var(--rule) 32px),\r\n          linear-gradient(135deg, var(--paper-light), var(--paper));\r\n      }\r\n      .main-column { padding-right: 0; }\r\n      .comments-heading { display: none; }\r\n      .section-title,\r\n      .footer-label { width: 150px; }\r\n      .section-body { margin-left: 164px; }\r\n      .footer-copy { margin-left: 164px; }\r\n      .metric-item,\r\n      .industry-item { float: none; width: auto; margin-right: 0; }\r\n    }\r\n\r\n    @media screen and (max-width: 560px) {\r\n      .page { padding-left: 54px; padding-right: 16px; }\r\n      .section-title,\r\n      .footer-label,\r\n      .experience-date { float: none; width: auto; }\r\n      .section-body,\r\n      .footer-copy { margin-left: 0; }\r\n      .experience-content { margin-left: 0; }\r\n      .section-title { font-size: 22px; }\r\n      .full-name { font-size: 27px; }\r\n    }\r\n\r\n    /*\r\n      No browser page margin at all — the yellow paper fills every\r\n      physical page edge-to-edge, and its own (cloned, see .page below)\r\n      padding is what creates visual margin, on every page including\r\n      continuation ones. The PDF exporter (html-pdf-exporter.js) injects\r\n      its own \"@page { margin: 8mm }\" into <head> after this stylesheet,\r\n      which would otherwise win the cascade (same specificity, later\r\n      wins) and reintroduce a white border — !important stops that.\r\n    */\r\n    @page { size: A4; margin: 0 !important; }\r\n\r\n    @media print {\r\n      :root { --paper-line: 6.35mm; }\r\n      html, body { background: #fff !important; }\r\n      body {\r\n        margin: 0;\r\n        font-size: 10.2pt;\r\n        line-height: 1.48;\r\n      }\r\n      .page {\r\n        width: 210mm;\r\n        min-height: 297mm;\r\n        margin: 0;\r\n        padding: 15mm 14mm 15mm 21mm;\r\n        border: 0;\r\n        box-shadow: none;\r\n        box-decoration-break: clone;\r\n        -webkit-box-decoration-break: clone;\r\n        background:\r\n          linear-gradient(90deg,\r\n            transparent 0, transparent 18mm, var(--red-rule) 18mm, var(--red-rule) 18.35mm, transparent 18.35mm,\r\n            transparent 164.9mm, rgba(40, 44, 78, .28) 164.9mm, rgba(40, 44, 78, .28) 165.15mm, transparent 165.15mm,\r\n            transparent 166mm, rgba(44, 47, 88, .78) 166mm, rgba(44, 47, 88, .78) 166.55mm, transparent 166.55mm),\r\n          repeating-linear-gradient(to bottom, transparent 0, transparent calc(var(--paper-line) - .22mm), var(--rule) calc(var(--paper-line) - .22mm), var(--rule) var(--paper-line)),\r\n          linear-gradient(135deg, var(--paper-light), var(--paper));\r\n      }\r\n      .topline {\r\n        min-height: 9mm;\r\n      }\r\n      .comments-heading { width: 30mm; }\r\n      .main-column { padding-right: 34mm; }\r\n      .document-brand { min-height: 10mm; }\r\n      .brand-word { font-size: 20pt; }\r\n      .brand-systems { margin-top: 1.2mm; font-size: 22pt; }\r\n      .brand-tagline { margin-top: 1.4mm; padding-left: 15mm; font-size: 4.8pt; }\r\n      .comments-heading { font-size: 10pt; }\r\n      .full-name { font-size: 21pt; }\r\n      .role-line { font-size: 12.5pt; }\r\n      .domain-line,\r\n      .contact-block,\r\n      .short-summary { font-size: 9.2pt; }\r\n      .section {\r\n        margin: 1.3mm 0 2.3mm;\r\n      }\r\n      .section-title { width: 30mm; font-size: 15pt; }\r\n      .section-body { margin-left: 33mm; }\r\n      .objective-text { font-size: 10.5pt; }\r\n      .metric-item { width: calc(50% - 1.5mm); margin: .3mm 0; }\r\n      .metric-item:nth-child(odd) { margin-right: 3mm; }\r\n      .metric-value { font-size: 11.5pt; }\r\n      .industry-item { width: calc(50% - 1.5mm); margin-bottom: 1.3mm; }\r\n      .industry-item:nth-child(odd) { margin-right: 3mm; }\r\n      .industry-letter { width: 5.5mm; height: 5.5mm; margin-right: 1.3mm; font-size: 8.8pt; border-width: .35mm; }\r\n      .industry-description,\r\n      .project-description,\r\n      .experience-company,\r\n      .experience-date { font-size: 8.8pt; }\r\n      .project-name,\r\n      .tech-title,\r\n      .experience-position { font-size: 10.5pt; }\r\n      .experience-item { margin-bottom: 2mm; }\r\n      .experience-date { width: 24mm; }\r\n      .experience-content { margin-left: 26.5mm; }\r\n      .experience-scroll { max-height: none; overflow: visible; padding-right: 0; }\r\n      .note { margin-bottom: 7mm; font-size: 9.5pt; line-height: 1.58; }\r\n      .note::before { left: -6mm; top: 2.6mm; width: 4.8mm; border-top-width: .5mm; }\r\n      .note::after { left: -6.6mm; top: 1.8mm; width: 1.6mm; height: 1.6mm; border-width: 0 0 .5mm .5mm; }\r\n      .note-education { margin-top: 24mm; }\r\n      .note-experience { margin-top: 16mm; }\r\n      .note-projects { margin-top: 22mm; }\r\n      .note-footer { margin-top: 28mm; }\r\n      .footer {\r\n        margin-top: 3mm;\r\n      }\r\n      .footer-label { width: 30mm; font-size: 14pt; }\r\n      .footer-copy { margin-left: 33mm; font-size: 9pt; }\r\n      .section-title,\r\n      .experience-position,\r\n      .project-name,\r\n      .tech-title { break-after: avoid; }\r\n      .experience-item,\r\n      .industry-item,\r\n      .project-item,\r\n      .tech-panel,\r\n      .footer { break-inside: avoid; }\r\n    }\r\n  </style>\r\n</head>\r\n<body>\r\n  <article class=\"page\">\r\n    <div class=\"document\">\r\n      <header class=\"topline\">\r\n        <div class=\"document-brand\" aria-label=\"Leadex Systems - Your Integration Partner\">\r\n          <span class=\"brand-word brand-leadex\">Leadex</span>\r\n          <span class=\"brand-word brand-systems\">systems</span>\r\n          <span class=\"brand-tagline\">YOUR INTEGRATION PARTNER</span>\r\n        </div>\r\n        <p class=\"comments-heading\">comments</p>\r\n      </header>\r\n\r\n      <div class=\"resume-grid\">\r\n        <main class=\"main-column\">\r\n          <header class=\"identity\">\r\n            <h1 class=\"full-name\">{{FULL_NAME}}</h1>\r\n            <p class=\"role-line\">{{ROLE_TITLE}}</p>\r\n            <div class=\"domain-line\">\r\n              <span>{{SPECIALIZATION}}</span>\r\n              <span>{{PRIMARY_DOMAIN}}</span>\r\n            </div>\r\n            <p class=\"short-summary empty-safe\">{{SHORT_PROFILE_SUMMARY}}</p>\r\n            <div class=\"contact-block\">\r\n              <div class=\"location-row\">\r\n                <span>{{LOCATION}}</span>\r\n                <span>{{CITY_COUNTRY}}</span>\r\n              </div>\r\n              <div class=\"contact-row\">\r\n                <span>{{EMAIL}}</span>\r\n                <span>{{PHONE}}</span>\r\n                <span>{{LINKEDIN_URL}}</span>\r\n              </div>\r\n            </div>\r\n          </header>\r\n\r\n          <!--CVB:section metrics-->\r\n          <section class=\"section\">\r\n            <h2 class=\"section-title\">Quick facts</h2>\r\n            <div class=\"section-body\">\r\n              <ul class=\"metrics-list\">\r\n                <!--CVB:repeat metrics-->\r\n                <li class=\"metric-item\" data-cvb-kind=\"metrics\">\r\n                  <span class=\"metric-label\">{{LABEL}}</span>\r\n                  <strong class=\"metric-value\">{{VALUE}}</strong>\r\n                </li>\r\n                <!--CVB:endrepeat metrics-->\r\n              </ul>\r\n            </div>\r\n          </section>\r\n          <!--CVB:endsection metrics-->\r\n\r\n          <!--CVB:section professionalSummary-->\r\n          <section class=\"section\">\r\n            <h2 class=\"section-title\">Objective</h2>\r\n            <div class=\"section-body\">\r\n              <p class=\"text objective-text\">{{PROFESSIONAL_SUMMARY}}</p>\r\n            </div>\r\n          </section>\r\n          <!--CVB:endsection professionalSummary-->\r\n\r\n          <!--CVB:section education-->\r\n          <section class=\"section\">\r\n            <h2 class=\"section-title\">Education</h2>\r\n            <div class=\"section-body\">\r\n              <ul class=\"simple-list\">\r\n                <!--CVB:repeat education-->\r\n                <li data-cvb-kind=\"education\">{{LINE}}</li>\r\n                <!--CVB:endrepeat education-->\r\n              </ul>\r\n            </div>\r\n          </section>\r\n          <!--CVB:endsection education-->\r\n\r\n          <!--CVB:section experience-->\r\n          <section class=\"section\">\r\n            <h2 class=\"section-title\">Experience</h2>\r\n            <div class=\"section-body\">\r\n              <div class=\"experience-list experience-scroll\">\r\n                <!--CVB:repeat experience-->\r\n                <article class=\"experience-item\" data-cvb-kind=\"experience\">\r\n                  <div class=\"experience-date\">{{DATE_FROM}}{{DATE_TO}}</div>\r\n                  <div class=\"experience-content\">\r\n                    <h3 class=\"experience-position\">{{POSITION}}</h3>\r\n                    <!--CVB:section experienceCompany-->\r\n                    <p class=\"experience-company\">{{COMPANY_LINE}}</p>\r\n                    <!--CVB:endsection experienceCompany-->\r\n                    <ul class=\"achievement-list\">\r\n                      <!--CVB:repeat achievements-->\r\n                      <li>{{TEXT}}</li>\r\n                      <!--CVB:endrepeat achievements-->\r\n                    </ul>\r\n                  </div>\r\n                </article>\r\n                <!--CVB:endrepeat experience-->\r\n              </div>\r\n            </div>\r\n          </section>\r\n          <!--CVB:endsection experience-->\r\n\r\n          <!--CVB:section skills-->\r\n          <section class=\"section\">\r\n            <h2 class=\"section-title\">Skills</h2>\r\n            <div class=\"section-body\">\r\n              <ul class=\"skill-list\">\r\n                <!--CVB:repeat skills-->\r\n                <li class=\"skill-item\" data-cvb-kind=\"skills\">{{LABEL}}</li>\r\n                <!--CVB:endrepeat skills-->\r\n              </ul>\r\n            </div>\r\n          </section>\r\n          <!--CVB:endsection skills-->\r\n\r\n          <!--CVB:section industries-->\r\n          <section class=\"section\">\r\n            <h2 class=\"section-title\">Industries</h2>\r\n            <div class=\"section-body industry-list\">\r\n              <!--CVB:repeat industries-->\r\n              <article class=\"industry-item\" data-cvb-kind=\"industries\">\r\n                {{MEDIA}}\r\n                <div>\r\n                  <span class=\"industry-title\">{{TITLE}}</span>\r\n                  <!--CVB:section industryDesc-->\r\n                  <span class=\"industry-description\">{{DESCRIPTION}}</span>\r\n                  <!--CVB:endsection industryDesc-->\r\n                </div>\r\n              </article>\r\n              <!--CVB:endrepeat industries-->\r\n            </div>\r\n          </section>\r\n          <!--CVB:endsection industries-->\r\n\r\n          <!--CVB:section certifications-->\r\n          <section class=\"section\">\r\n            <h2 class=\"section-title\">Certifications</h2>\r\n            <div class=\"section-body\">\r\n              <ul class=\"simple-list\">\r\n                <!--CVB:repeat certifications-->\r\n                <li data-cvb-kind=\"certifications\">{{TITLE}}</li>\r\n                <!--CVB:endrepeat certifications-->\r\n              </ul>\r\n            </div>\r\n          </section>\r\n          <!--CVB:endsection certifications-->\r\n\r\n          <!--CVB:section languages-->\r\n          <section class=\"section\">\r\n            <h2 class=\"section-title\">Languages</h2>\r\n            <div class=\"section-body\">\r\n              <ul class=\"simple-list\">\r\n                <!--CVB:repeat languages-->\r\n                <li data-cvb-kind=\"languages\">{{LINE}}</li>\r\n                <!--CVB:endrepeat languages-->\r\n              </ul>\r\n            </div>\r\n          </section>\r\n          <!--CVB:endsection languages-->\r\n\r\n          <!--CVB:section projects-->\r\n          <section class=\"section\">\r\n            <h2 class=\"section-title\">Projects</h2>\r\n            <div class=\"section-body project-list\">\r\n              <!--CVB:repeat projects-->\r\n              <article class=\"project-item\" data-cvb-kind=\"projects\">\r\n                <h3 class=\"project-name\">{{NAME}}</h3>\r\n                <!--CVB:section projectDesc-->\r\n                <p class=\"project-description\">{{DESCRIPTION}}</p>\r\n                <!--CVB:endsection projectDesc-->\r\n              </article>\r\n              <!--CVB:endrepeat projects-->\r\n            </div>\r\n          </section>\r\n          <!--CVB:endsection projects-->\r\n\r\n          <!--CVB:section techPanels-->\r\n          <section class=\"section\">\r\n            <h2 class=\"section-title\">Technical expertise</h2>\r\n            <div class=\"section-body tech-list\">\r\n              <!--CVB:repeat techPanels-->\r\n              <article class=\"tech-panel\" data-cvb-kind=\"techPanels\">\r\n                <h3 class=\"tech-title\">{{TITLE}}</h3>\r\n                <ul class=\"tech-bullets\">\r\n                  <!--CVB:repeat techBullets-->\r\n                  <li>{{TEXT}}</li>\r\n                  <!--CVB:endrepeat techBullets-->\r\n                </ul>\r\n              </article>\r\n              <!--CVB:endrepeat techPanels-->\r\n            </div>\r\n          </section>\r\n          <!--CVB:endsection techPanels-->\r\n        </main>\r\n      </div>\r\n\r\n      <footer class=\"footer\">\r\n        <h2 class=\"footer-label\">Notes</h2>\r\n        <div class=\"footer-copy\">\r\n          <p class=\"footer-tagline empty-safe\">{{FOOTER_TAGLINE}}</p>\r\n          <p class=\"additional-note empty-safe\">{{ADDITIONAL_NOTE}}</p>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </article>\r\n</body>\r\n</html>\r\n";

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
