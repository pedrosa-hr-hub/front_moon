import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../views/Login.vue';
import BuyPage from '../views/Buy.vue';
import CreateUserPage from '../views/CreateUser.vue';
import SellPage from '../views/Sell.vue';
import HomePage from '../views/Home.vue';
import MainPage from '../views/Main.vue';
import WalletPage from '../views/Wallet.vue';
import searchBuyPage from '../views/SearchBuy.vue';
import searchSellPage from '../views/searchSell.vue'

const routes = [
  { path: '/', name:'Home', component: HomePage },
  { path: '/menu', name:'Main', component: MainPage },
  { path: '/login', name:'Login', component: LoginPage},
  { path: '/compra', name:'Buy', component: BuyPage },
  { path: '/novoUsuario', name:'CreateUser', component: CreateUserPage},
  { path: '/venda', name:'Sell', component: SellPage},
  { path: '/carteira', name:'Wallet', component: WalletPage },
  { path: '/pesquisaCompra', name:'searchBuy', component: searchBuyPage },
  { path: '/pesquisaVenda', name:'searchSell', component: searchSellPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});


/*router.beforeEach((to, from, next)=>{
  if(to.name !== 'Login' && to.name !== 'Home' && to.name !== 'CreateUser' && !document.cookie){
    next({name:'Login'});
  }
  else {
    next();
  }
});*/

export default router