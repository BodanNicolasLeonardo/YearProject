
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import Dashboard from '../components/Dashboard.vue'
import Transactions from '../components/Transactions.vue'
import Reports from '../components/Reports.vue'
import Settings from '../components/Settings.vue'
import SignUp from '@/components/SignUp.vue'
import ResetPassword from '@/components/ResetPassword.vue'
import GoogleSignIn from '@/components/GoogleSIgnIn.vue'
import Notes from '@/components/Notes.vue'

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
    path: '/transactions',
    name: 'transactions',
    component: Transactions
  },
  {
    path: '/reports',
    name: 'reports',
    component: Reports
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/notes',
    name: 'notes',
    component: Notes
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
  },
  {
    path: '/google-signin',
    name: 'google-signin',
    component: GoogleSignIn
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'btn-primary'
})

export default router
