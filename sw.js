// Service Worker for Demo Showcase
// Version 2.0.0

const CACHE_VERSION = 'v2.0.0';
const CACHE_NAME = `demo-duyet-${CACHE_VERSION}`;

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/about.md',
  '/manifest.json',
  '/assets/favicon.svg',
  '/assets/main.css',
];

// Projects to cache
const PROJECT_ASSETS = [
  '/flappy-bird/',
  '/flappy-bird/index.html',
  '/js-barcode/',
  '/js-barcode/index.html',
  '/md2html/',
  '/md2html/index.html',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      console.log('[Service Worker] Skip waiting');
      return self.skipWaiting();
    }).catch((error) => {
      console.error('[Service Worker] Installation failed:', error);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch event - network first, then cache
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        // Clone the response before caching
        const responseClone = response.clone();

        // Cache successful responses
        if (response.status === 200) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }

        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          // Return offline page for HTML requests
          if (request.headers.get('accept').includes('text/html')) {
            return caches.match('/index.html');
          }

          return new Response('Offline - resource not available', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain',
            }),
          });
        });
      })
  );
});

// Message event - handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(event.data.urls);
      })
    );
  }
});

// Push notification event (for future use)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update available',
    icon: '/assets/icon-192.png',
    badge: '/assets/favicon.svg',
    vibrate: [200, 100, 200],
    tag: 'demo-notification',
    actions: [
      { action: 'explore', title: 'Explore' },
      { action: 'close', title: 'Close' },
    ],
  };

  event.waitUntil(
    self.registration.showNotification('Demo Showcase', options)
  );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
