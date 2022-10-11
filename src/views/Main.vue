<template>
  <NavBar/>
  <MainCard/>
  <ListCard/>
</template>
  
<script>
  
import MainCard from '@/components/MainCard.vue'
import NavBar from '@/components/NavBar.vue'
import ListCard from '@/components/ListCard.vue'
  
export default {
  name: 'MainPage',
  components: {
    MainCard,
    ListCard,
    NavBar
  }
}
</script>