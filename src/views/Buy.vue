<template>
  <NavBar/>
  <Buy/>
</template>
  
<script>
  
import Buy from '@/components/BuyForm.vue'
import NavBar from '@/components/NavBar.vue'
  
export default {
  name: 'BuyPage',
  components: {
    Buy,
    NavBar
  }
}
</script>