if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>n(e,r),d={module:{uri:r},exports:s,require:f};i[r]=Promise.all(o.map((e=>d[e]||f(e)))).then((e=>(c(...e),s)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-WgaDmvBl.js",revision:null},{url:"index.html",revision:"9f3eefe7510933a578d6daccd8a9c297"},{url:"registerSW.js",revision:"a9cf5bec9ace88098045797c262c1218"},{url:"favicon_io/android-chrome-192x192.png",revision:"3b768f5e4c7a8ec7b32e2b55ab78835f"},{url:"favicon_io/android-chrome-512x512.png",revision:"4317d41933e76b2d701e7d7a2c573421"},{url:"favicon_io/apple-touch-icon.png",revision:"9740fa8aa91db2b704f030c8c1f1ebe4"},{url:"favicon_io/favicon-16x16.png",revision:"e28e7fee39d83159fef840257d45f156"},{url:"favicon_io/favicon-32x32.png",revision:"30c21bb817ca092ed13ca065c3026db1"},{url:"manifest.webmanifest",revision:"ed13dc5bca35871c007383fc8de79fdf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
