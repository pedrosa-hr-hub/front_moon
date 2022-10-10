<template>

<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left uk-margin-small-left">

        <ul class="uk-navbar-nav">
            <li class="uk-active">
                <a href="/">
                    <div>
                        Moon
                        <div class="uk-navbar-subtitle">Investiment</div>
                    </div>
                </a>
            </li>
            <li><a href="/novoUsuario">Criar Novo Usuario</a></li>
            <li><a href="/compra">Compra</a></li>
            <li><a href="/venda">Venda</a></li>
        </ul>

    </div>
</nav>

</template>
    
<script>
export default {
    name: 'NavBarComponent'
}
</script>
    
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    
</style>