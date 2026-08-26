const CACHE_NAME = 'ps4-host-v1';
const ASSETS = [
  './',
  './index.html',
  './PS4_13.00_Webkit.html',
  './run_lapse.html',
  './sysctl.html',
  './chain_lapse.js',
  './chain_poops.js',
  './sysctl.js',
  './core.js',
  './mem.js',
  './int64.js',
  './ps4_offsets.js',
  './rpc_worker.js',
  './payload.bin'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
