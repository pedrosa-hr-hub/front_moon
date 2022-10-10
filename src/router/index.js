import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../views/Login.vue'
import BuyPage from '../views/Buy.vue'
import CreateUserPage from '../views/CreateUser.vue'
import SellPage from '../views/Sell.vue'

const routes = [
  { path: '/', name:'Login', component: LoginPage },
  { path: '/compra', name:'Buy', component: BuyPage },
  { path: '/novoUsuario', name:'CreateUser', component: CreateUserPage},
  { path: '/venda', name:'Sell', component: SellPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
