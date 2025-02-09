<template>
    <div>
        <img src="" alt="">

        <div>
            <img src="" alt="">
            <h2>{{ nome_item }}</h2>
        </div>

        <div v-for="[key,value] in Object?.entries(infos)">
            <div name="info-div">
                <h3>{{ key }}</h3>
                <h4>{{ value }}</h4>
            </div>
        </div>

        <div>
            <button>Editar</button>
            <button>Deletar</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        nome_item: String,
        infos:Object 
    });

</script>


<style>

</style>