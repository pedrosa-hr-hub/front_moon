<template>

    <div class="uk-container uk-margin-medium-top">
        <div class="uk-card">
        <div class="uk-card-header">
            <center>
                <h3 class="uk-card-title">Listagem de Vendas</h3>
            </center>
        </div>
        <div class="uk-card-body">
            <center>
                <div>
                    <form v-on:submit.prevent="seachData">
                        <div class="uk-margin">
                        <label class="uk-form-label">Pesquisar:</label>
                        <br>
                        <div class="uk-inline">
                            <span class="uk-form-icon" uk-icon="icon: chevron-double-right"></span>
                            <input class="uk-input" type="text" placeholder="Carteira" v-model="seach.wallet">
                        </div>
                        <button type="submit" class="uk-button uk-button-primary">PESQUISAR</button>
                        </div>
                    </form>
                </div>
            </center>
            <div v-for="sell in sell" :key="sell.id">
                <h1>{{sell.name}}</h1>
                <p>{{sell.price}}</p>
                <p>{{sell.qtd}}</p>
            </div>
        </div>
        <div class="uk-card-footer">
        </div>
        </div>
    </div>
        
    </template>
        
    <script>
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
        name: 'CardListSell',
        data(){
            return{
                seach: {
                    wallet: '',
                    user: getCookie("user")
                },
                sell: [],
            }
        },
        methods:{
        alert_error(error){
          alert(error);
        },
        seachData(){
                axios.post('http://localhost:3000/sellWallet', this.seach)
                .then((response) => {
    
                    this.sell = response.data;
    
                })
                .catch((error) => {
                    this.alert_error(error);
                })
            }
        },
    }
    </script>