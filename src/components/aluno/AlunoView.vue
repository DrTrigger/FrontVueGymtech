<!-- src/views/AlunoView.vue -->
<template>
    <div class="content-wrapper">
      <h1>Cadastro(Aluno)</h1>
      
      <!-- Formulário para cadastrar/editar aluno -->
      <div class="form-section">
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
      </div>

      <h1>Alunos</h1>
      <!-- Lista de alunos -->
      <ul>
        <li v-for="aluno in alunos" :key="aluno.id">
          <div>
            <strong>{{ aluno.nome }}</strong>
            <br>
            <span>CPF: {{ aluno.cpf }}</span>
            <br>
            <span>Email: {{ aluno.email }}</span>
          </div>
          <button @click="edit(aluno)">Editar</button>
          <button @click="remove(aluno.id)">Deletar</button>
        </li>
      </ul>
    </div>
  </template>
  <script lang="ts" src="./AlunoView.ts"></script>
  <style scoped src="../../assets/global/content_style.css"></style>