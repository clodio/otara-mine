const CACHE_NAME = 'orapa-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/index.css',
  '/index.tsx',
  '/manifest.json'
];

// Installation du Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {
        // Si certains assets ne peuvent pas être cachés, continuer quand même
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

// Activation du Service Worker
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Stratégie de fetch: Network First, fallback to Cache
self.addEventListener('fetch', (e) => {
  // Ignorer les requêtes non-GET
  if (e.request.method !== 'GET') {
    return;
  }

  // Ignorer les requêtes pour les domaines externes
  if (!e.request.url.startsWith(self.location.origin)) {
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then((response) => {
        // Ne mettre en cache que les réponses réussies
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        // Cloner la réponse et la mettre en cache
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, responseToCache);
        });

        return response;
      })
      .catch(() => {
        // En cas d'erreur réseau, utiliser le cache
        return caches.match(e.request).then((response) => {
          if (response) {
            return response;
          }

          // Fallback pour les navigation requests
          if (e.request.mode === 'navigate') {
            return caches.match('/index.html');
          }

          return new Response('Ressource non disponible hors ligne', {
            status: 404,
            statusText: 'Not Found',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});
