<template>

<div class="uk-container 
  uk-margin-medium-top 
  uk-margin-large-left 
  uk-margin-large-right  
  uk-height-max-large">
    
  <form v-on:submit.prevent="submitForm">
    <legend class="uk-legend">Login</legend>

    <div class="uk-margin">
      <label class="uk-form-label">Usuário:</label>
      <br>
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: user"></span>
        <input class="uk-input" type="text" placeholder="Usuário" v-model="form.user">
      </div>
    </div>

    <div class="uk-margin">
      <label class="uk-form-label">Senha:</label>
      <br>
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: lock"></span>
        <input class="uk-input" type="password" placeholder="*******" v-model="form.password">
      </div>
    </div>

    <button type="submit" class="uk-button uk-button-primary">ENTRAR</button>

  </form>

    <div class="uk-margin">
      <button class="uk-button uk-button-text uk-button-small">Esqueci a Senha</button>
    </div>

</div>
</template>

<script>
import router from '@/router';
import axios from 'axios';

export default {
  name: 'Login',
  data(){
    return{
      form: {
        user: '',
        password: '',
      }
    }
  },
  methods:{
    chageRoute(route){
      router.push(route);
    },
    alert_error(error){
      alert(error);
    },
    submitForm(){
      axios.post('http://localhost:3000/userAuth', this.form)
      .then((res) => {
        this.chageRoute('/menu');
      })
      .catch((error) => {
        this.alert_error(error);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
