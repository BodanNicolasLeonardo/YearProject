
import { createApp } from 'vue'
import './assets/main.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import { createPinia } from 'pinia'

const routes = [


];
const router = createRouter({
history: createWebHashHistory(),
routes,
});

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')