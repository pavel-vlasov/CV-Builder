// CV Builder service worker — network-first with cache fallback.
//
// Not cache-first: this project has no build/hash step, so a cache-first
// strategy would need a manually-bumped version string on every change or
// users get stuck on stale files. Network-first just re-fetches whenever
// online (files are tiny) and only serves the cache when offline.
//
// PRECACHE_URLS is hand-maintained, same constraint as
// resources/template/manifest.js: nothing can list a folder from
// service-worker code. Adding a template there also means adding its
// file here.
const CACHE_NAME = 'cvb-cache-v1';

const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  'resources/template/manifest.js',
  'resources/template/leadex-ops-dashboard.template.js',
  'resources/template/leadex-market-analytics.template.js',
  'resources/template/leadex-cloud-native.template.js',
  'resources/vendor/html-pdf-exporter.js',
  'resources/icons/icon-192.png',
  'resources/icons/icon-512.png',
  'resources/icons/icon-512-maskable.png',
  'resources/icons/apple-touch-icon.png',
  'resources/icons/favicon.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) { return cache.addAll(PRECACHE_URLS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(
          keys.filter(function (key) { return key !== CACHE_NAME; })
              .map(function (key) { return caches.delete(key); })
        );
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;

  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request).then(function (response) {
      if (response && response.ok) {
        var copy = response.clone();
        caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
      }
      return response;
    }).catch(function () {
      return caches.match(event.request).then(function (cached) {
        return cached || caches.match('./index.html');
      });
    })
  );
});
