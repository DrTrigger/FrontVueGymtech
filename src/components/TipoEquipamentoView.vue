<!-- src/views/TipoEquipamentoView.vue -->
<template>
    <div class="tipo-equipamento-view">
      <h1>Tipos de Equipamento</h1>
      
      <!-- Formulário para adicionar/editar -->
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="nomeTipo">Nome do Tipo:</label>
          <input type="text" id="nomeTipo" v-model="form.nomeTipo" required />
        </div>
        <div>
          <label for="descricao">Descrição:</label>
          <input type="text" id="descricao" v-model="form.descricao" required />
        </div>
        <button type="submit">{{ isEditing ? 'Atualizar' : 'Adicionar' }}</button>
        <button type="button" v-if="isEditing" @click="cancelEdit">Cancelar</button>
      </form>
  
      <!-- Lista de tipos de equipamento -->
      <ul>
        <li v-for="equip in tipoEquipamentos" :key="equip.idTipo">
          <span>{{ equip.nomeTipo }} - {{ equip.descricao }}</span>
          <button @click="edit(equip)">Editar</button>
          <button @click="remove(equip.idTipo)">Deletar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, ref, onMounted } from 'vue';
  import { useTipoEquipamentoStore } from '../store/tipoEquipamentoStore';
  import type { TipoEquipamento } from '../models/TipoEquipamento';
  
  export default defineComponent({
    name: 'TipoEquipamentoView',
    setup() {
      const store = useTipoEquipamentoStore();
  
      // Estado do formulário
      const form = reactive<TipoEquipamento>({
        idTipo: undefined,
        nomeTipo: '',
        descricao: ''
      });
  
      const isEditing = ref(false);
  
      const handleSubmit = async () => {
        if (isEditing.value && form.idTipo !== undefined) {
          await store.updateItem(form.idTipo, form);
        } else {
          await store.addItem(form);
        }
        resetForm();
      };
  
      const edit = (equip: TipoEquipamento) => {
        form.idTipo = equip.idTipo;
        form.nomeTipo = equip.nomeTipo;
        form.descricao = equip.descricao;
        isEditing.value = true;
      };
  
      const remove = async (id?: number) => {
        if (id !== undefined) {
          await store.removeItem(id);
        }
      };
  
      const resetForm = () => {
        form.idTipo = undefined;
        form.nomeTipo = '';
        form.descricao = '';
        isEditing.value = false;
      };
  
      const cancelEdit = () => {
        resetForm();
      };
  
      onMounted(() => {
        store.fetchItems();
      });
  
      return {
        form,
        isEditing,
        tipoEquipamentos: store.items,
        handleSubmit,
        edit,
        remove,
        cancelEdit,
      };
    },
  });
  </script>
  
  <style scoped>
  .tipo-equipamento-view {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .tipo-equipamento-view form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .tipo-equipamento-view form div {
    margin-bottom: 10px;
  }
  </style>
  