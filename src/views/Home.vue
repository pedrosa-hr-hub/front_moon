<template>
  <NavBarLogin/>
  <HomeCard/>
</template>
  
<script>
  
import HomeCard from '@/components/HomeCard.vue'
import NavBarLogin from '@/components/NavBarLogin.vue'
  
export default {
  name: 'BuyPage',
  components: {
    HomeCard,
    NavBarLogin
  }
}
</script>