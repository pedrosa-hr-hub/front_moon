<template>
  <NavBar/>
  <Wallet/>
</template>
  
<script>
  
import Wallet from '@/components/WalletForm.vue'
import NavBar from '@/components/NavBar.vue'
  
export default {
  name: 'BuyPage',
  components: {
    Wallet,
    NavBar
  }
}
</script>