<template>
  <NavBar/>
  <MainCard/>
</template>
  
<script>
  
import MainCard from '@/components/MainCard.vue'
import NavBar from '@/components/NavBar.vue'
  
export default {
  name: 'MainPage',
  components: {
    MainCard,
    NavBar
  }
}
</script>