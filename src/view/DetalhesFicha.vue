
<!--HTML -->
<template>
<!-- Padrões de escrita
    -> nomes de classes e ids de elementos com letra minúscula e em kebab case (ex.: lista-usuarios,tabela-planos-disponiveis,...)
 -->
 <ItemInfo :nome_item="objeto1.nome" :infos="objeto1"></ItemInfo>
</template>

<!--JAVASCRIPT-->
<script setup>
/*
    Padrões de escrita:
    -> nomes de funções em camel case (ex.: criaFicha, alteraPlano,...);
    -> variáveis e constantes comuns (não sendo referências para funções) em snake case ( ex.: mensagem_aviso, nome_usuario, ...)
*/


import ItemInfo from "../components/ItemInfo.vue";

let objeto1 = {
    nome: "Supino Reto",
    data_de_fabricacao: "18/02/2015",
    grupo_muscular: "Peitoral"
}

/*Criar um método que retorna o json com as informações do elemento selecionado 

parâmetros - id do elemento selecionado
*/ 
</script>

<!--CSS-->
<style>

</style>