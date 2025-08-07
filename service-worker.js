self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.webmanifest',
        '/style.css'
      ])
    })
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  )
})
