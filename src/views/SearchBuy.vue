<template>
    <NavBar/>
    <ListCard/>
  </template>
    
  <script>
    
  import NavBar from '@/components/NavBar.vue'
  import ListCard from '@/components/ListCardBuy.vue'
    
  export default {
    name: 'MainPage',
    components: {
      ListCard,
      NavBar
    }
  }
  </script>