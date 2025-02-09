<!-- src/views/PlanoView.vue -->
<template>
    <div class="plano-view">
      <h1>Planos</h1>
      
      <!-- Formulário para cadastrar/editar plano -->
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="form.nome" required />
        </div>
        <div>
          <label for="descricao">Descrição:</label>
          <input type="text" id="descricao" v-model="form.descricao" required />
        </div>
        <div>
          <label for="valor">Valor:</label>
          <input type="number" id="valor" v-model.number="form.valor" step="0.01" required />
        </div>
        <div>
          <label for="duracao_meses">Duração (meses):</label>
          <input type="number" id="duracao_meses" v-model.number="form.duracao_meses" required />
          
        </div>
        <button type="submit">{{ isEditing ? 'Atualizar' : 'Adicionar' }}</button>
        <button type="button" v-if="isEditing" @click="cancelEdit">Cancelar</button>
      </form>
  
      <!-- Lista de planos -->
      <ul>
        <li v-for="plano in planos" :key="plano.id">
          <div>
            <strong>{{ plano.nome }}</strong> - {{ plano.descricao }} - R$ {{ plano.valor }} - {{ plano.duracao_meses }} meses
          </div>
          <button @click="edit(plano)">Editar</button>
          <button @click="remove(plano.id)">Deletar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, ref, onMounted } from 'vue';
  import { usePlanoStore } from '../store/PlanoStore';
  import type { Plano } from '../models/Plano';
  
  export default defineComponent({
    name: 'PlanoView',
    setup() {
      const store = usePlanoStore();
  
      // Estado do formulário utilizando a interface Plano
      const form = reactive<Plano>({
        id: 0,
        nome: '',
        descricao: '',
        valor: 0,
        duracao_meses: 0,
      });
  
      const isEditing = ref(false);
      const editingId = ref<number | null>(null);
  
      // Envio do formulário para criar ou atualizar o plano
      const handleSubmit = async () => {
        if (isEditing.value && editingId.value !== null) {
          await store.updateItem(editingId.value, form);
        } else {
          await store.addItem(form);
        }
        resetForm();
      };
  
      // Prepara o formulário para edição, carregando os dados do plano selecionado
      const edit = (plano: Plano) => {
        form.id = plano.id;
        form.nome = plano.nome;
        form.descricao = plano.descricao;
        form.valor = plano.valor;
        form.duracao_meses = plano.duracao_meses;
        isEditing.value = true;
        editingId.value = plano.id;
      };
  
      // Chama a ação para remover um plano
      const remove = async (id: number) => {
        await store.removeItem(id);
      };
  
      // Reseta o formulário para o estado inicial
      const resetForm = () => {
        form.id = 0;
        form.nome = '';
        form.descricao = '';
        form.valor = 0;
        form.duracao_meses = 0;
        isEditing.value = false;
        editingId.value = null;
      };
  
      const cancelEdit = () => {
        resetForm();
      };
  
      // Busca os planos ao montar o componente
      onMounted(() => {
        store.fetchItems();
      });
  
      return {
        form,
        isEditing,
        planos: store.items,
        handleSubmit,
        edit,
        remove,
        cancelEdit,
      };
    },
  });
  </script>
  
  <style scoped>
  .plano-view {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .plano-view form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .plano-view form div {
    margin-bottom: 10px;
  }
  </style>
  