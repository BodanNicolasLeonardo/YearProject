import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import TheWelcome from '../components/TheWelcome.vue'
import Dashboard from '../components/Dashboard.vue'
import HelloWorld from '../components/HelloWorld.vue'
import SignUp from '@/components/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'register',
    component: SignUp
  },
  {
    path: '/reset',
    name: 'reset',
    component: HelloWorld,
    props: { msg: 'Reset Password' }
  },
  {
    path: '/google',
    name: 'google',
    component: HelloWorld,
    props: { msg: 'Google Auth' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'btn-primary'
})

export default router
