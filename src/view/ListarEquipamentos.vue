<template>
    <TableList titulo="Olá, Mundo!" :conteudos="conteudos">
        <template #item-div>
            <div class="item-container" v-for="conteudo in conteudos">
                <img class="item-img" src="../assets/icons/placeholder.png">
                <ul class="info-list">
                    <li v-for="([key, value], index) in Object.entries(conteudo)">
                       <b>{{key}}</b>:{{value}}  
                    </li>
                </ul>
                <img src="../assets/icons/next.png" class="item-img">
            </div>  
        </template>
    </TableList>
</template>

<script setup lang="ts">
    import TableList from '@/components/TableList.vue';

    let conteudos = [{
        nome: "Cadeira Extensora",
        data_fabricação: "18/09/2023",
        1:"ksdskdsk",
        2:10,
        3:"sdsdjsdbdjbsdkfbsj"
        },
        {
            nome:"Supino reto",
            data_fabricacao: "10/02/2015"
        },
        {
            nome:"Supino reto",
            data_fabricacao: "10/02/2015"
        },
        {
            nome:"Supino reto",
            data_fabricacao: "10/02/2015"
        },
        {
            nome:"Supino reto",
            data_fabricacao: "10/02/2015"
        },
        {
            nome:"Supino reto",
            data_fabricacao: "10/02/2015"
        },
        {
            nome:"Supino reto",
            data_fabricacao: "10/02/2015"
        },
        {
            nome:"Supino reto",
            data_fabricacao: "10/02/2015"
        }
    ];

    /*Criar um método que retorna uma lista de objetos, cada objeto sendo uma linha de uma tabel*/
</script>


