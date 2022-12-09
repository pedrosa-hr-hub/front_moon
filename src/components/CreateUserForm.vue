<template>

    <div class="uk-container 
      uk-margin-medium-top 
      uk-margin-large-left 
      uk-margin-large-right  
      uk-height-max-large">
        
      <form v-on:submit.prevent="submitForm">
        <legend class="uk-legend">Criando Novo Usuário</legend>
    
        <div class="uk-margin">
          <label class="uk-form-label">Nome:</label>
          <br>
          <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input class="uk-input" type="text" placeholder="Seu nome" v-model="form.user">
          </div>
        </div>
    
        <div class="uk-margin">
          <label class="uk-form-label">E-mail:</label>
          <br>
          <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: mail"></span>
            <input class="uk-input" type="email" autocomplete="email" placeholder="exemplo@outlook.com" v-model="form.email">
          </div>
        </div>
    
        <div class="uk-margin">
          <label class="uk-form-label">Senha:</label>
          <br>
          <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input class="uk-input" type="password" placeholder="********" v-model="password">
          </div>
        </div>
    
        <div class="uk-margin">
          <label class="uk-form-label">Confirme a Senha:</label>
          <br>
          <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input class="uk-input" type="password" placeholder="********" v-model="password_confirm">
          </div>
        </div>
    
        <button type="submit" class="uk-button uk-button-primary">CRIAR</button>
      </form>
    </div>
    
</template>
    
<script>
  import router from '@/router';
  import axios from 'axios';

  export default {
    name: 'CreateUserForm',
    data(){
    return{
      form: {
        user: '',
        email: '',
        password: ''
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
        if (this.password == this.password_confirm) {

          this.form.password = this.password;

          axios.post(`${process.env.VUE_APP_API_URL}/user`, this.form)
          .then(() => {
            this.chageRoute('/login');
          }).catch((error) => {
            this.alert_error(error);
          })
        } else {
          this.alert_error("Password not match, verify values");
        }
      }
    }
  }
</script>