<template>

<div class="uk-container 
  uk-margin-medium-top 
  uk-margin-large-left 
  uk-margin-large-right  
  uk-height-max-large">
    
  <form action="">
    <legend class="uk-legend">Login</legend>

    <div class="uk-margin">
      <label class="uk-form-label">Usuário:</label>
      <br>
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: user"></span>
        <input class="uk-input" type="text" placeholder="Usuário">
      </div>
    </div>

    <div class="uk-margin">
      <label class="uk-form-label">Senha:</label>
      <br>
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: lock"></span>
        <input class="uk-input" type="password" placeholder="*******">
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
export default {
  name: 'Login'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
