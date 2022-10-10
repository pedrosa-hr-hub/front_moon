import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../views/Login.vue'
import BuyPage from '../views/Buy.vue'
import CreateUserPage from '../views/CreateUser.vue'

const routes = [
  { path: '/', name:'Login', component: LoginPage },
  { path: '/compra', name:'Buy', component: BuyPage },
  { path: '/newUser', name:'CreateUser', component: CreateUserPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
