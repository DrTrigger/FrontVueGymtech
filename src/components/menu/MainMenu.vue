
<!--HTML -->
<template>
<!-- Padrões de escrita
    -> nomes de classes e ids de elementos com letra minúscula e em kebab case (ex.: lista-usuarios,tabela-planos-disponiveis,...)
 -->
    <div class="homepage">
        <div class="welcome-message-container">
            <img src="../../assets/global/icons/logo.png" alt="#">
            <h1 style="font-size:72px;text-align:start;">Sistema Gymtech</h1>
            <h3 style="font-size: 36px;text-align: start;">Sistema de gerenciamento de recursos de academia.</h3>
        </div>

        <div class="options-section">
            <h2 style="text-align: center;">Recursos Disponíveis</h2>
            <div class="options">
                <router-link v-for="opt in opt_list" :to="`${opt.replace(/ /g,'_')}`">
                    <button>{{ opt }}</button>
                </router-link>
            </div>
            <br>
            <!-- <button style="height: 8vh; width: 50%;" class="btn-submit">Entrar</button> -->
            <br>
            <!-- <a href="./SignUp.vue" style="font-size: 14px;">Criar uma conta</a> -->
        </div>
    </div>
</template>

<!--JAVASCRIPT-->
<script lang="ts" src="./MainMenu.ts"></script>

<!--CSS-->
<style src="./MainMenu.css"></style>
