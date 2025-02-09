<template>
    <div class="main-container">
        <h2 style="font-size: 48px;">{{ titulo }}</h2>
        <div class="item-list-wrapper">
            <slot name="item-div"></slot>
        </div>
        
    </div>

</template>

<script setup lang="ts">

    defineProps({
        titulo:String,
        conteudos: Array<Object>,
    });
    // //Definindo uma interface com os atributos do componente
    // interface Props { 
    //     titulo?:String,
    //     conteudos?:Array<String>;
    // }
    // /*Os atributos definidos na interface Props serão usados como elementos de interpolação*/

    // //Obs.: O uso de ? aponta que o atributo pode não receber valor nenhum

    // const atributos = defineProps<Props>();
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