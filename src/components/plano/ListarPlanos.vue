<template>
    <GenericList titulo="Planos" :conteudos="conteudos">
    </GenericList>
</template>

<script setup lang="ts">
    import GenericList from '../generic/list/GenericList.vue';
    import { listPlanos } from '@/services/PlanoService';

    // let conteudos = listEquipamentos();

    let conteudos = listPlanos();

    /*Criar um método que retorna uma lista de objetos, cada objeto sendo uma linha de uma tabel*/
</script>