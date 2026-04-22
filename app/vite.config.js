import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/yearproject/',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Budget Planner',
        short_name: 'BudgetApp',
        description: 'A simple budget planning web app',
        theme_color: '#169bcb',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/yearproject/',
        start_url: '/yearproject/',
        icons: [
          {
            src: 'icons/BudgetBuddy.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/BudgetBuddy.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})



