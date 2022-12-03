<template>

<div class="uk-container 
  uk-margin-medium-top 
  uk-margin-large-left 
  uk-margin-large-right
  ">
    
  <form v-on:submit.prevent="submitForm">
    <legend class="uk-legend">Compra de Ativos</legend>

    <div class="uk-margin">
      <label class="uk-form-label">Carteira:</label>
      <br>
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: chevron-double-right"></span>
        <input class="uk-input" type="text" placeholder="Carteira" v-model="form.wallet">
      </div>
    </div>

    <div class="uk-margin">
      <label class="uk-form-label">Nome do Ativo:</label>
      <br>
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: chevron-double-right"></span>
        <input class="uk-input" type="text" placeholder="Vale S.A" v-model="form.name">
      </div>
    </div>

    <div class="uk-margin">
      <label class="uk-form-label">Ticker:</label>
      <br>
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: chevron-double-right"></span>
        <input class="uk-input" type="text" placeholder="VALE3 ou VALE3F" v-model="form.ticker">
      </div>
    </div>

    <div class="uk-margin">
      <label class="uk-form-label">Preço:</label>
      <br>
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: chevron-double-right"></span>
        <input class="uk-input" type="number" step="0.01" placeholder="95,99" v-model="form.price">
      </div>
    </div>

    <div class="uk-margin">
      <label class="uk-form-label">Data da Compra:</label>
      <br>
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: calendar"></span>
        <input class="uk-input" type="date" v-model="form.date">
      </div>
    </div>

    <button type="submit" class="uk-button uk-button-primary">SALVAR</button>
  </form>
</div>

</template>


<script>
import router from '@/router';
import axios from 'axios';

export default {
  name: 'BuyForm',
  data(){
    return{
      form: {
        wallet: '',
        name: '',
        ticker: '',
        price: '',
        date: ''
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
      axios.post('http://localhost:3000/buy', this.form)
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