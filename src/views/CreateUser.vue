<template>
  <NavBar/>
  <CreateUser/>
</template>
  
<script>
  
import CreateUser from '@/components/CreateUserForm.vue'
import NavBar from '@/components/NavBar.vue';
  
export default {
  name: 'LoginPage',
  components: {
    CreateUser,
    NavBar
}
}
</script>