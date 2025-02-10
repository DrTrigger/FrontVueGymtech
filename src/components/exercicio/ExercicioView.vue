<!-- src/views/ExercicioView.vue -->
<template>
  <div class="exercicio-view">
    <h1>Exercícios</h1>
    
    <!-- Formulário para adicionar/editar exercício -->
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="grupoMuscular">Grupo Muscular:</label>
        <input type="text" id="grupoMuscular" v-model="form.grupoMuscular" required />
      </div>
      <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="form.nome" required />
      </div>
      <button type="submit">{{ isEditing ? 'Atualizar' : 'Adicionar' }}</button>
      <button type="button" v-if="isEditing" @click="cancelEdit">Cancelar</button>
    </form>

    <!-- Lista de exercícios -->
    <ul>
      <li v-for="exercicio in exercicios" :key="exercicio.id_exercicio">
        <span>{{ exercicio.grupoMuscular }} - {{ exercicio.nome }}</span>
        <button @click="edit(exercicio)">Editar</button>
        <button @click="remove(exercicio.id_exercicio)">Deletar</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./ExercicioView.ts"></script>
<style scoped src="./ExercicioView.css"></style>


