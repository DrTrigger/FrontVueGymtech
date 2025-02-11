<template>
    <div class="main-container">
        <h2 style="font-size: 48px;">{{ titulo }}</h2>

        <h3 v-if="listaConteudos.length === 0" style="color:black">Carregando...</h3>
        <div v-else class="item-list-wrapper">
            <div class="item-container" v-for="conteudo in listaConteudos">
                
                <img class="item-img" src="../assets/icons/placeholder.png">
                <ul class="info-list">
                    <li v-for="([key, value], index) in Object.entries(conteudo)">
                       <b>{{key}}</b>:{{value}}  
                    </li>
                </ul>
                <slot name="next-button-icon"></slot>
            </div>  
        </div>
        
    </div>

</template>

<script setup lang="ts">
import {defineProps, ref, onMounted} from 'vue';

//Definindo os atributos do componente
const props = defineProps({
    titulo: String,
    conteudos:Promise<Object[]>,//Recebe objetos mediante a resolução de uma promise
    contexto: String
});

let listaConteudos = ref<Object[]>([]);//Variável para guardar os valores sendo recebidos pela resolução da promise

//Pega os dados da promise quando o componente terminar de carregar
onMounted(async () =>{
    listaConteudos.value = await props.conteudos;
})

</script>

<style>
.main-container{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
    align-items: center;
    background-color: darkslategray;
}

.item-list-wrapper{
    background-color: rgb(21, 36, 36);
    max-height: 70vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-y: scroll;
}

.item-container{
    background-color:lightslategray;
    display: flex;
    width: 90%;
    height: 50%;
    margin: 5px auto;
    padding: 5px;
    align-items: center;
    justify-content: center;
}

.item-img{
    width: 5%;
    height: 5%;
}

.info-list{
    display: flex;
    /* flex-direction: row; */
    /* flex-wrap: wrap; /*Define se terá quebra de linha ao ultrapassar o limite o flex container pai/*/
    
    flex-flow: row nowrap; /*Atalho para flex-direction e flex-wrap*/
    justify-content: space-around;
    width: 60%;
    margin: auto;
    background-color: red;
}

.info-list li{
    display: block;
    margin: 10px;
    /* background-color: blue; */
    font-size: 14px;
}

</style>