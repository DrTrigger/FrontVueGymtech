<!-- src/views/ProfessorView.vue -->
<template>
    <div class="professor-view">
      <h1>Professores</h1>
      
      <!-- Formulário para cadastrar/editar professor -->
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
        <!-- O campo senha é exibido somente na criação -->
        <div v-if="!isEditing">
          <label for="senha">Senha:</label>
          <input type="password" id="senha" v-model="form.senha" required />
        </div>
        <div>
          <label for="salario">Salário:</label>
          <input type="number" id="salario" v-model.number="form.salario" step="0.01" required />
        </div>
        <div>
          <label for="cref">CREF:</label>
          <input type="text" id="cref" v-model="form.cref" required />
        </div>
        <div>
          <label for="carga_horaria_semanal">Carga Horária Semanal:</label>
          <input type="number" id="carga_horaria_semanal" v-model.number="form.carga_horaria_semanal" required />
        </div>
        <button type="submit">{{ isEditing ? 'Atualizar' : 'Adicionar' }}</button>
        <button type="button" v-if="isEditing" @click="cancelEdit">Cancelar</button>
      </form>
  
      <!-- Lista de professores -->
      <ul>
        <li v-for="prof in professors" :key="prof.id">
          <div>
            <strong>{{ prof.nome }}</strong>
            <div>Data de Nascimento: {{ prof.data_nascimento }}</div>
            <div>CPF: {{ prof.cpf }}</div>
            <div>Email: {{ prof.email }}</div>
            <div>Salário: R$ {{ prof.salario }}</div>
            <div>CREF: {{ prof.cref }}</div>
            <div>Carga Horária Semanal: {{ prof.carga_horaria_semanal }}</div>
          </div>
          <button @click="edit(prof)">Editar</button>
          <button @click="remove(prof.id)">Deletar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, ref, onMounted } from 'vue';
  import { useProfessorStore } from '../store/ProfessorStore';
  import type { Professor } from '../models/Professor';
  import type { ProfessorResponse } from '../models/ProfessorResponse';
  
  export default defineComponent({
    name: 'ProfessorView',
    setup() {
      const store = useProfessorStore();
      
      // Formulário usando o modelo ProfessorInput
      const form = reactive<Professor>({
        nome: '',
        data_nascimento: '',
        cpf: '',
        email: '',
        senha: '',
        salario: 0,
        cref: '',
        carga_horaria_semanal: 0,
      });
      
      const isEditing = ref(false);
      const editingId = ref<number | null>(null);
      
      const handleSubmit = async () => {
        if (isEditing.value && editingId.value !== null) {
          await store.updateProfessor(editingId.value, form);
        } else {
          await store.addProfessor(form);
        }
        resetForm();
      };
      
      // Ao editar, preenche o formulário com os dados do professor recebido (ProfessorResponse)
      const edit = (prof: ProfessorResponse) => {
        form.nome = prof.nome;
        form.data_nascimento = prof.data_nascimento;
        form.cpf = prof.cpf;
        form.email = prof.email;
        // Em edição, a senha não é retornada – o campo permanece vazio para que o usuário informe, se necessário
        form.senha = '';
        form.salario = prof.salario;
        form.cref = prof.cref;
        form.carga_horaria_semanal = prof.carga_horaria_semanal;
        isEditing.value = true;
        editingId.value = prof.id;
      };
      
      const remove = async (id: number) => {
        await store.removeProfessor(id);
      };
      
      const resetForm = () => {
        form.nome = '';
        form.data_nascimento = '';
        form.cpf = '';
        form.email = '';
        form.senha = '';
        form.salario = 0;
        form.cref = '';
        form.carga_horaria_semanal = 0;
        isEditing.value = false;
        editingId.value = null;
      };
      
      const cancelEdit = () => {
        resetForm();
      };
      
      onMounted(() => {
        store.fetchProfessores();
      });
      
      return {
        form,
        isEditing,
        professors: store.professors,
        handleSubmit,
        edit,
        remove,
        cancelEdit,
      };
    },
  });
  </script>
  
  <style scoped>
  .professor-view {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .professor-view form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .professor-view form div {
    margin-bottom: 10px;
  }
  
  .professor-view ul {
    list-style: none;
    padding: 0;
  }
  
  .professor-view li {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  