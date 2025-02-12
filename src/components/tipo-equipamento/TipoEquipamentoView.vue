<!-- src/views/TipoEquipamentoView.vue -->
<template>
    <div class="content-wrapper">
      <h1>Cadastro(Tipo de equipamento)</h1>
      
      <!-- Formulário para adicionar/editar -->
      <div class="form-section">
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
      </div>
      <h1>Tipos de Equipamentos</h1>
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
  
  <script lang="ts" src="./TipoEquipamentoView.ts"></script>
  <style scoped src="../../assets/global/content_style.css"></style>
  
  