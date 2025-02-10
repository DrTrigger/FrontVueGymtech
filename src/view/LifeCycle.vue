
<!--HTML -->
<template>
    <!-- Padrões de escrita
        -> nomes de classes e ids de elementos com letra minúscula e em kebab case (ex.: lista-usuarios,tabela-planos-disponiveis,...)
    -->
    <h1>{{ texto }}</h1>
    <!-- Lifecycle são açõe que podem acontecer em três etapas do componente: 
        - Antes de sua criação;
        - Durante sua criação;
        - Depois da sua criação -->
</template>

<!--JAVASCRIPT-->
<script setup lang="ts">
/*
    Padrões de escrita:
    -> nomes de funções em camel case (ex.: criaFicha, alteraPlano,...);
    -> variáveis e constantes comuns (não sendo referências para funções) em snake case ( ex.: mensagem_aviso, nome_usuario, ...)
*/

    import { onMounted, ref} from 'vue';

    let texto = ref('Alterando texto...');

    onMounted(() =>{
        setTimeout(() => {
            texto.value = "Hello, World!";
        }, 3000);//O valor é em milissegundos 

    });

</script>

<!--CSS-->
<style scoped>
    h1{
        background-color: blue;
    }
</style>