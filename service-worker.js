/* ==================================================================
   FINCONTROL — SERVICE WORKER
   ------------------------------------------------------------------
   Estratégia:
   - App shell (HTML, manifest, ícones) é pré-cacheado na instalação.
   - Tudo mais (CDNs de Bootstrap, ApexCharts, Dexie, fontes, ícones)
     usa "stale-while-revalidate": serve do cache instantaneamente se
     existir, e atualiza o cache em segundo plano quando há internet.
   - Isso garante que, depois do primeiro carregamento, o app abra e
     funcione mesmo sem conexão nenhuma (os dados já ficam no
     IndexedDB local, então a experiência offline é completa).
   Ao publicar uma nova versão do app, aumente CACHE_VERSION para que
   os usuários recebam os arquivos atualizados.
   ================================================================== */
const CACHE_VERSION = 'fincontrol-v1';
const ARQUIVOS_ESSENCIAIS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(ARQUIVOS_ESSENCIAIS)).catch((e) => console.warn('Pré-cache parcial:', e))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys().then((chaves) =>
      Promise.all(chaves.filter((chave) => chave !== CACHE_VERSION).map((chave) => caches.delete(chave)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evento) => {
  if (evento.request.method !== 'GET') return; // nunca cacheia POST/PUT (ex: uploads ao Google Drive)

  evento.respondWith(
    caches.open(CACHE_VERSION).then(async (cache) => {
      const respostaCache = await cache.match(evento.request);
      const buscaRede = fetch(evento.request)
        .then((respostaRede) => {
          if (respostaRede && respostaRede.status === 200) cache.put(evento.request, respostaRede.clone());
          return respostaRede;
        })
        .catch(() => respostaCache); // sem internet: usa o que tiver em cache

      return respostaCache || buscaRede;
    })
  );
});
