<template>
  <NavBar/>
  <MainCard/>
  <MainNavCard/>
</template>
  
<script>
  
import MainCard from '@/components/MainCard.vue'
import NavBar from '@/components/NavBar.vue'
import MainNavCard from '@/components/MainNavCard.vue';
  
export default {
  name: 'MainPage',
  components: {
    MainCard,
    NavBar,
    MainNavCard
  }
}
</script>