importScripts("/vue-pwa/precache-manifest.3ca337be528ed6ddcf2dc4068d342b2e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


workbox.core.setCacheNameDetails({prefix: "vue-pwa"});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

