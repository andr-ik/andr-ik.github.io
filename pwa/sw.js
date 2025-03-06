const CACHE_NAME = 'cache';
const urlsToCache = [
    '/index.html',
    '/cat_icon_192x192.png',
    '/cat_icon_256x256.png',
    '/cat_icon_512x512.png',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching files during install');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

/*
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request)
                    .then((response) => {
                        if (event.request.url.startsWith(self.location.origin)) {
                            caches.open(CACHE_NAME)
                                .then((cache) => {
                                    cache.put(event.request, response.clone());
                                });
                        }
                        return response;
                    });
            })
    );
});
*/
