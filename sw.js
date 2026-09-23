// Minimal service worker: it only passes requests through to the network, which is what makes
// the web version installable on a phone's home screen. Nothing is cached, so a new version is
// live as soon as it is published.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => event.respondWith(fetch(event.request)));
