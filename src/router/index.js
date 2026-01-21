import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import Dashboard from '../components/Dashboard.vue'
import SignUp from '@/components/SignUp.vue'
import ResetPassword from '@/components/ResetPassword.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/reset',
    name: 'reset',
    component: ResetPassword
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'btn-primary'
})

export default router
