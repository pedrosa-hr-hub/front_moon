<template>

<div class="uk-container 
  uk-margin-medium-top 
  uk-margin-large-left 
  uk-margin-large-right  
  uk-height-max-large">
    
  <form v-on:submit.prevent="submitForm">
    <legend class="uk-legend">Login</legend>

    <div class="uk-margin">
      <label class="uk-form-label">E-mail:</label>
      <br>
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: user"></span>
        <input class="uk-input" type="text" placeholder="Usuário" v-model="form.email">
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
        email: '',
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
      axios.post(`${process.env.VUE_APP_API_URL}/userAuth`, this.form)
      .then((res) => {
        document.cookie = `user=${res.data.id};max-age=1800;`
        this.chageRoute('/menu');
      })
      .catch((error) => {
        this.alert_error(error);
      })
    }
  }
}
</script>
