const CACHE_NAME = 'otara-mine-v1';

// On ne met en cache "en dur" que le strict minimum stable
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Installation : on vide l'ancien cache si on change de version
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_ASSETS))
  );
  self.skipWaiting();
});

// Interception des requêtes
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // 1. Si c'est en cache, on le donne tout de suite
      if (cachedResponse) return cachedResponse;

      // 2. Sinon, on va sur le réseau, on récupère et ON MET EN CACHE
      return fetch(event.request).then(response => {
        // Ne pas mettre en cache si la réponse n'est pas valide
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    }).catch(() => {
        // Optionnel: renvoyer index.html si tout échoue (mode offline total)
        return caches.match('./index.html');
    })
  );
});
