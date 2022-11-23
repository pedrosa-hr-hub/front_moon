<template>

<div class="uk-container 
  uk-margin-medium-top 
  uk-margin-large-left 
  uk-margin-large-right  
  uk-height-max-large">
    
  <form v-on:submit.prevent="submitForm">
    <legend class="uk-legend">Criando Nova Carteira</legend>

    <div class="uk-margin">
      <label class="uk-form-label">Nome:</label>
      <br>
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: user"></span>
        <input class="uk-input" type="text" placeholder="Seu nome" v-model="form.wallet">
      </div>
    </div>
    <button type="submit" class="uk-button uk-button-primary">CRIAR</button>
  </form>
</div>

</template>

<script>
import router from '@/router';
import axios from 'axios';

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

export default {
  name: 'WalletForm',
  data(){
    return{
      form: {
        wallet: '',
        user: getCookie("user")
      }
    }
  },
  methods: {
    chageRoute(route){
      router.push(route);
    },
    alert_error(error){
      alert(error);
    },
    submitForm(){
      axios.post('http://localhost:3000/wallet', this.form)
      .then(() => {
        this.chageRoute('/menu');
      })
      .catch((error) => {
        this.alert_error(error);
      })
    }
  }
}
</script>