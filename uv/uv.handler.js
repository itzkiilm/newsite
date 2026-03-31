importScripts('/uv/uv.bundle.js');
importScripts('/uv/uv.config.js');

self.addEventListener('fetch', event => {
  event.respondWith(
    (async () => {
      const uv = new Ultraviolet(self.__uv$config);
      return await uv.fetch(event.request);
    })()
  );
});
