self.addEventListener('install', (e) => {
    console.log('[Service Worker] 설치 완료');
});

self.addEventListener('fetch', (e) => {
    // 현재는 네트워크 요청을 그대로 통과시키는 가장 단순한 형태입니다.
    e.respondWith(fetch(e.request).catch(() => console.log('네트워크 연결 실패')));
});
