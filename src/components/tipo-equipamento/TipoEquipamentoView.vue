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
          <button @click="null">Botao</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" src="./TipoEquipamentoView.ts"></script>
  <style scoped src="./TipoEquipamentoView.css"></style>
  
  