const CACHE_NAME = 'v1.0.0';
const FILES = [
    './',
    './index.html',
    './css/bootstrap.min.css',
    './css/cover.css',
    './js/app.js',
    './js/boostrap.min.js',
    './js/jquery-3.2.1.min.js',
    './js/jquery.mask.min.js'
]

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            return cache.addAll(FILES);
        })
    )
})


self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys
                .filter(function (key) {
                    return key.indexOf(CACHE_NAME) !== 0;
                })
                .map(function (key) {
                    return caches.delete(key);
                })
            );
        })
    );
});