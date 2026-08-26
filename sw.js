const CACHE_NAME = 'ps4-original-host-v2';

// القائمة الكاملة لجميع ملفات الثغرة
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
    './payload.bin',
    './patches/1100.bin',
    './patches/1150.bin',
    './patches/1200.bin',
    './patches/1300.bin'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(ASSETS);
        }).then(function() {
            return self.skipWaiting();
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
