<template>
  <NavBar/>
  <HomeCard/>
</template>
  
<script>
  
import HomeCard from '@/components/HomeCard.vue'
import NavBar from '@/components/NavBar.vue'
  
export default {
  name: 'BuyPage',
  components: {
    HomeCard,
    NavBar
  }
}
</script>