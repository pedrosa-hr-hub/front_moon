<template>
    <NavBar/>
    <ListCard/>
  </template>
    
  <script>
    
  import NavBar from '@/components/NavBar.vue'
  import ListCard from '@/components/ListCardBuy.vue'
    
  export default {
    name: 'ListBuyPage',
    components: {
      ListCard,
      NavBar
    }
  }
  </script>