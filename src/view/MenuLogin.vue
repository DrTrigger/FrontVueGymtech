
<!--HTML -->
<template>
<!-- Padrões de escrita
    -> nomes de classes e ids de elementos com letra minúscula e em kebab case (ex.: lista-usuarios,tabela-planos-disponiveis,...)
 -->
    <div class="homepage">
        <div class="welcome-message-container">
            <h1 style="font-size:72px;text-align:start;">Sistema Gymtech</h1>
            <h3 style="font-size: 36px;text-align: start;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque enim architecto sint dignissimos doloribus!</h3>
        </div>

        <div class="login-container">
            <img src="../assets/icons/logo.png" alt="#" style="height: 90px;width: 90px; border-radius: 50px; filter: invert()">
            <label for="login" class="input-container">
                <p>Matrícula/CREF</p>
                <input type="text" value="">
            </label>
            <label for="senha" class="input-container">
                <p>Login</p>
                <input type="text" value="">
            </label>
            <br>
            <button style="height: 8vh; width: 50%;" class="btn-submit">Entrar</button>
            <br>
            <a href="./SignUp.vue" style="font-size: 14px;">Criar uma conta</a>
        </div>
    </div>
</template>

<!--JAVASCRIPT-->
<script setup>
/*
    Padrões de escrita:
    -> nomes de funções em camel case (ex.: criaFicha, alteraPlano,...);
    -> variáveis e constantes comuns (não sendo referências para funções) em snake case ( ex.: mensagem_aviso, nome_usuario, ...)
*/
</script>

<!--CSS-->
<style>
    

    body{ 
        font-family: Arial, Helvetica, sans-serif;
        margin: auto;
        width: 100%;
        height: 100vh; /*vh - a altura do elemento em relação a altura da viewport*/
        color: azure;     
    }

    .homepage{
        display: flex;
        background-image: url("../assets/homepage_background2.jpg");/*define a imagem do background do elemento*/
        background-size: cover;
        flex-direction: row;
        margin: auto;
        height: 100vh;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .welcome-message-container{
        display: flex;
        color:rgb(218, 218, 218);
        background-color:rgba(0, 0, 0, 0.5);
        width: 40%;
        height: 80%;
        margin-right: 80px;
        padding: 50px;
        box-sizing: content-box;
        flex-direction: column;
        justify-content: center;
    }

    :root{
        --border-color-top-left: #daf470;
        --border-color-right: #f07c00;
        --border-color-bottom: #ffe600e0;

        --border-style: solid;
    }

    .login-container{
        display: flex;
        background-color:rgb(21, 22, 22);
        /* float: right; */
        width: 25%;
        height: 70vh;
        padding: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 5px var(--border-style) var(--border-color-top-left);
        border-bottom: 5px var(--border-style) var(--border-color-bottom);
        border-right: 5px var(--border-style) var(--border-color-right);
    }

    .login-container *:not(img, .input-container, .input-container p, a){
        border: 5px var(--border-style) var(--border-color-top-left);
        border-bottom: 5px var(--border-style) var(--border-color-bottom);
        border-right: 5px var(--border-style) var(--border-color-right);   
    }

    .login-container a{
        text-decoration: underline;
        color: azure;
    }

    .login-container a:hover{
        color: rgb(203, 216, 216);
    }

    .login-container button{
        background-color: rgb(41, 41, 38);
        /* color: yellow;  */
        font-weight: 600;
        border-radius: 25px;  
    }

    .login-container button:hover{
        background-color: rgb(23, 24, 24);
    }

    .input-container{
        display:flex;
        align-items: start;/*alinha os itens no eixo principal(o padrão é horizontal)*/
        align-self:flex-start;/*alinha a si próprio caso esteja dentro de um container (flex start só funciona para itens-pai com display:flex)*/
        padding: 20px 0;
        /* background-color: red; */
        width: 100%;
        flex-direction: column;
    }

    .input-container p{
        font-size: 14px;
        color: azure;
    }

    .input-container input{
        height: 4vh;
        width: 100%;
        border-radius: 10px;
        border: 2px solid gray;
        border-bottom: 2px solid black;
        border-right: 2px solid black;
    }
</style>
