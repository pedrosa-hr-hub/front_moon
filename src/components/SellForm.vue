<template>

<div class="uk-container 
    uk-margin-medium-top 
    uk-margin-large-left 
    uk-margin-large-right  
    uk-height-max-large">
        
    <form action="">
    <legend class="uk-legend">Venda de Ativos</legend>
    
    <div class="uk-margin">
        <label class="uk-form-label">Nome:</label>
        <br>
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: chevron-double-right"></span>
            <input class="uk-input" type="text" placeholder="Vale S.A">
        </div>
    </div>
    
    <div class="uk-margin">
        <label class="uk-form-label">Ticker:</label>
        <br>
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: chevron-double-right"></span>
            <input class="uk-input" type="text" placeholder="VALE3 ou VALE3F">
        </div>
    </div>
    
    <div class="uk-margin">
        <label class="uk-form-label">Preço:</label>
        <br>
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: chevron-double-right"></span>
            <input class="uk-input" type="number" step="0.01" placeholder="95,99">
        </div>
    </div>
    
    <div class="uk-margin">
        <label class="uk-form-label">Data da Venda:</label>
        <br>
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: calendar"></span>
            <input class="uk-input" type="date">
        </div>
    </div>
    
    <button type="submit" class="uk-button uk-button-primary">SALVAR</button>
    </form>
</div>
    
</template>
    
<script>
export default {
    name: 'SellForm'
}
</script>
    
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    
 </style>