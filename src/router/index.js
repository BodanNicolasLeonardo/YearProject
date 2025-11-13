import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'btn-primary'
})

export default router
