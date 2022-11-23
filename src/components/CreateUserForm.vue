<template>

    <div class="uk-container 
      uk-margin-medium-top 
      uk-margin-large-left 
      uk-margin-large-right  
      uk-height-max-large">
        
      <form action="">
        <legend class="uk-legend">Criando Novo Usuário</legend>
    
        <div class="uk-margin">
          <label class="uk-form-label">Nome:</label>
          <br>
          <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input class="uk-input" type="text" placeholder="Seu nome">
          </div>
        </div>
    
        <div class="uk-margin">
          <label class="uk-form-label">E-mail:</label>
          <br>
          <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: mail"></span>
            <input class="uk-input" type="email" autocomplete="email" placeholder="exemplo@outlook.com">
          </div>
        </div>
    
        <div class="uk-margin">
          <label class="uk-form-label">Senha:</label>
          <br>
          <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input class="uk-input" type="password" placeholder="********">
          </div>
        </div>
    
        <div class="uk-margin">
          <label class="uk-form-label">Confirme a Senha:</label>
          <br>
          <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input class="uk-input" type="password" placeholder="********">
          </div>
        </div>
    
        <button type="submit" class="uk-button uk-button-primary">CRIAR</button>
      </form>
    </div>
    
    </template>
    
    <script>
    export default {
      name: 'CreateUserForm'
    }
    </script>