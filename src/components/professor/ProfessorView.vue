<!-- src/views/ProfessorView.vue -->
<template>
    <div class="content-wrapper">
      <h1>Cadastro(Professor)</h1>
      
      <!-- Formulário para cadastrar/editar professor -->
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
      </div>

      <h1>Professores</h1>
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

  <script lang="ts" src="./ProfessorView.ts"></script>
  <style scoped src="../../assets/global/content_style.css"></style>
  

