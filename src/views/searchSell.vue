<template>
    <NavBar/>
    <ListCard/>
  </template>
    
  <script>
    
  import NavBar from '@/components/NavBar.vue'
  import ListCard from '@/components/ListCardSell.vue'
    
  export default {
    name: 'ListSellPage',
    components: {
      ListCard,
      NavBar
    }
  }
  </script>