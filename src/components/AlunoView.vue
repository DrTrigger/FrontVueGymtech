<!-- src/views/AlunoView.vue -->
<template>
    <div class="aluno-view">
      <h1>Alunos</h1>
      
      <!-- Formulário para cadastrar/editar aluno -->
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="form.nome" required />
        </div>
        <div>
          <label for="data_nascimento">Data de Nascimento:</label>
          <input type="datetime-local" id="data_nascimento" v-model="form.data_nascimento" required />
        </div>
        <div>
          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" v-model="form.cpf" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div>
          <label for="senha">Senha:</label>
          <input type="password" id="senha" v-model="form.senha" required />
        </div>
        <div>
          <label for="data_matricula">Data de Matrícula:</label>
          <input type="datetime-local" id="data_matricula" v-model="form.data_matricula" required />
        </div>
        <div>
          <label for="matricula_aluno">Matrícula:</label>
          <input type="text" id="matricula_aluno" v-model="form.matricula_aluno" required />
        </div>
        <div>
          <label for="restricao_medica">Restrição Médica:</label>
          <input type="text" id="restricao_medica" v-model="form.restricao_medica" required />
        </div>
        <button type="submit">{{ isEditing ? 'Atualizar' : 'Adicionar' }}</button>
        <button type="button" v-if="isEditing" @click="cancelEdit">Cancelar</button>
      </form>
  
      <!-- Lista de alunos -->
      <ul>
        <li v-for="aluno in alunos" :key="aluno.id">
          <div>
            <strong>{{ aluno.nome }}</strong>
            <span>CPF: {{ aluno.cpf }}</span>
            <span>Email: {{ aluno.email }}</span>
          </div>
          <button @click="edit(aluno)">Editar</button>
          <button @click="remove(aluno.id)">Deletar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, ref, onMounted } from 'vue';
  import { useAlunoStore } from '../store/AlunoStore';
  import type { Aluno } from '../models/Aluno';
  
  export default defineComponent({
    name: 'AlunoView',
    setup() {
      const store = useAlunoStore();
  
      // Estado do formulário
      const form = reactive<Aluno>({
        id: undefined,
        nome: '',
        data_nascimento: '',
        cpf: '',
        email: '',
        senha: '',
        data_matricula: '',
        matricula_aluno: '',
        restricao_medica: '',
      });
  
      const isEditing = ref(false);
  
      const handleSubmit = async () => {
        if (isEditing.value && form.id !== undefined) {
          await store.updateItem(form.id, form);
        } else {
          await store.addItem(form);
        }
        resetForm();
      };
  
      const edit = (aluno: Aluno) => {
        form.id = aluno.id;
        form.nome = aluno.nome;
        form.data_nascimento = aluno.data_nascimento;
        form.cpf = aluno.cpf;
        form.email = aluno.email;
        form.senha = aluno.senha;
        form.data_matricula = aluno.data_matricula;
        form.matricula_aluno = aluno.matricula_aluno;
        form.restricao_medica = aluno.restricao_medica;
        isEditing.value = true;
      };
  
      const remove = async (id?: number) => {
        if (id !== undefined) {
          await store.removeItem(id);
        }
      };
  
      const resetForm = () => {
        form.id = undefined;
        form.nome = '';
        form.data_nascimento = '';
        form.cpf = '';
        form.email = '';
        form.senha = '';
        form.data_matricula = '';
        form.matricula_aluno = '';
        form.restricao_medica = '';
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
        alunos: store.items,
        handleSubmit,
        edit,
        remove,
        cancelEdit,
      };
    },
  });
  </script>
  
  <style scoped>
  .aluno-view {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .aluno-view form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .aluno-view form div {
    margin-bottom: 10px;
  }
  </style>
  