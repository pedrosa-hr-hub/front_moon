<template>
    <NavBar/>
    <Sell/>
</template>
    
<script>
    
import Sell from '@/components/SellForm.vue'
import NavBar from '@/components/NavBar.vue'
    
export default {
    name: 'SellPage',
    components: {
      Sell,
      NavBar
    }
}
</script>