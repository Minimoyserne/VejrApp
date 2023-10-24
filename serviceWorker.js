
//navn og version på casch samling
const staticCacheName = 'site-static-v2';
const dynamicCacheName = 'site-dynamic-v1';
let cache = ""; 

//array med filer til casche
  const assets = [
    './index.html',
    './assets/css/burger.css', 
    './assets/css/mainstylesheet.css', 
    './assets/css/loader.css',
    './assets/image',
    './assets/js/view.js',
    './manifest.json'
  ]
  
  // Install Service Worker
self.addEventListener('install', event => {
    console.log('Service Worker has been installed');

    //venter til task er udført
    event.waitUntil(
      caches.open(staticCacheName).then(cache => {
        console.log('skriv til alle statisk cache');
        cache.addAll(assets)
      })

    );
});

// Activate Service Worker
self.addEventListener('activate', event => {
    console.log('service worker acticated');

	event.waitUntil(
		// Rydder op i cache og sletter alle uaktuelle caches
		caches.keys().then(keys => {
            const filteredKeys =keys.filter(key => key !== staticCacheName)
            filteredKeys.map(key => caches.delete(key))
        })
    )
})

// Fetch event
self.addEventListener('fetch', event => {
    // Kontroller svar på request
	event.respondWith(
        // Kig efter file match i cache 
		caches.match(event.request).then(cacheResult => {
            // Returner match fra cache - ellers hent fil på server
			return (
                cacheResult || 
                fetch(event.request).then(fetchRes => {
                    // Tilføjer nye sider til cachen
				    return caches.open(dynamicCacheName).then(cache => {
                        // Bruger put til at tilføje sider til vores cache
					    // Læg mærke til metoden clone
					    cache.put(event.request.url, fetchRes.clone())
					    // Returnerer fetch request
					    return fetchRes
				    })
			    })
            )
		})
    )
})
console.log("hej");