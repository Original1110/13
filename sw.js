const CACHE_NAME = 'ps4-exploit-v1';
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

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
