<!-- src/views/EquipamentoView.vue -->
<template>
    <div class="equipamento-view">
      <h1>Equipamentos</h1>
      
      <!-- Formulário para cadastrar/editar equipamento -->
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="form.nome" required />
        </div>
        <div>
          <label for="id_tipo_equipamento">ID Tipo de Equipamento:</label>
          <input type="number" id="id_tipo_equipamento" v-model.number="form.id_tipo_equipamento" required />
        </div>
        <div>
          <label for="peso">Peso:</label>
          <input type="number" id="peso" v-model.number="form.peso" step="0.01" required />
        </div>
        <div>
          <label for="fabricante">Fabricante:</label>
          <input type="text" id="fabricante" v-model="form.fabricante" required />
        </div>
        <div>
          <label for="dataAquisicao">Data de Aquisição:</label>
          <input type="datetime-local" id="dataAquisicao" v-model="form.dataAquisicao" required />
        </div>
        <div>
          <label for="estado">Estado:</label>
          <input type="text" id="estado" v-model="form.estado" required />
        </div>
        <div>
          <label for="descricao">Descrição:</label>
          <input type="text" id="descricao" v-model="form.descricao" required />
        </div>
        <button type="submit">{{ isEditing ? 'Atualizar' : 'Adicionar' }}</button>
        <button type="button" v-if="isEditing" @click="cancelEdit">Cancelar</button>
      </form>
  
      <!-- Lista de equipamentos -->
      <ul>
        <li v-for="equip in equipamentos" :key="equip.idEquipamento">
          <div>
            <strong>{{ equip.nome }}</strong>
            <div>Peso: {{ equip.peso }}</div>
            <div>Fabricante: {{ equip.fabricante }}</div>
            <div>Data de Aquisição: {{ equip.dataAquisicao }}</div>
            <div>Estado: {{ equip.estado }}</div>
            <div>Descrição: {{ equip.descricao }}</div>
            <!-- Exibindo dados do tipo de equipamento -->
            <div v-if="equip.tipoEquipamento">
              Tipo: {{ equip.tipoEquipamento.nomeTipo }} – {{ equip.tipoEquipamento.descricao }}
            </div>
          </div>
          <button @click="edit(equip)">Editar</button>
          <button @click="remove(equip.idEquipamento)">Deletar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, ref, onMounted } from 'vue';
  import { useEquipamentoStore } from '../store/EquipamentoStore';
  import type { Equipamento } from '../models/Equipamento';
  import type { EquipamentoResponse } from '../models/EquipamentoResponse';
  
  export default defineComponent({
    name: 'EquipamentoView',
    setup() {
      const store = useEquipamentoStore();
  
      // Formulário usando o modelo EquipamentoInput
      const form = reactive<Equipamento>({
        nome: '',
        id_tipo_equipamento: 0,
        peso: 0,
        fabricante: '',
        dataAquisicao: '',
        estado: '',
        descricao: '',
      });
  
      const isEditing = ref(false);
      const editingId = ref<number | null>(null);
  
      const handleSubmit = async () => {
        if (isEditing.value && editingId.value !== null) {
          await store.updateEquipamento(editingId.value, form);
        } else {
          await store.addEquipamento(form);
        }
        resetForm();
      };
  
      // Preenche o formulário para edição usando o EquipamentoResponse recebido
      const edit = (equip: EquipamentoResponse) => {
        form.nome = equip.nome;
        // Note que o campo id_tipo_equipamento não vem na resposta; normalmente o back-end retorna o objeto do tipo.
        // Você pode extrair o ID se o objeto possuir essa informação ou solicitar ao usuário.
        // Aqui, mantemos o valor atual ou limpa para preenchimento manual:
        form.id_tipo_equipamento = 0;
        form.peso = equip.peso;
        form.fabricante = equip.fabricante;
        form.dataAquisicao = equip.dataAquisicao;
        form.estado = equip.estado;
        form.descricao = equip.descricao;
        isEditing.value = true;
        editingId.value = equip.idEquipamento;
      };
  
      const remove = async (id: number) => {
        await store.removeEquipamento(id);
      };
  
      const resetForm = () => {
        form.nome = '';
        form.id_tipo_equipamento = 0;
        form.peso = 0;
        form.fabricante = '';
        form.dataAquisicao = '';
        form.estado = '';
        form.descricao = '';
        isEditing.value = false;
        editingId.value = null;
      };
  
      const cancelEdit = () => {
        resetForm();
      };
  
      onMounted(() => {
        store.fetchEquipamentos();
      });
  
      return {
        form,
        isEditing,
        equipamentos: store.equipamentos,
        handleSubmit,
        edit,
        remove,
        cancelEdit,
      };
    },
  });
  </script>
  
  <style scoped>
  .equipamento-view {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .equipamento-view form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .equipamento-view form div {
    margin-bottom: 10px;
  }
  
  .equipamento-view ul {
    list-style: none;
    padding: 0;
  }
  
  .equipamento-view li {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  