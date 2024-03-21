import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/CheckOutCheck/",
    plugins: [react(), VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ["**/*"], //https://adueck.github.io/blog/caching-everything-for-totally-offline-pwa-vite-react/
        manifest: {
            name: "Budgeting Checkout Check",
            display: "standalone",
            icons: [
                {
                    "src": "./favicon_io/android-chrome-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "./favicon_io/android-chrome-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                },
                {
                    "src": "./favicon_io/apple-touch-icon.png",
                    "sizes": "180x180",
                    "type": "image/png"
                },
                {
                    "src": "./favicon_io/favicon-16x16.png",
                    "sizes": "16x16",
                    "type": "image/png"
                },
                {
                    "src": "./favicon_io/favicon-32x32.png",
                    "sizes": "32x32",
                    "type": "image/png",
                    "purpose": "maskable",
                }
            ],
            short_name: "CheckCheck",
            description: "local groceries list app",
            orientation: 'portrait',
            theme_color: '#ffffff',
            background_color: '#ffffff',
        },
    })],
})
