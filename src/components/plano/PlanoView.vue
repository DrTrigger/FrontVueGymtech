<!-- src/views/PlanoView.vue -->
<template>
    <div class="content-wrapper">
      <h1>Cadastro(Plano)</h1>
      
      <!-- Formulário para cadastrar/editar plano -->
      <div class="form-section">
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
      </div>
  
      <h1>Planos</h1>
      <!-- Lista de planos -->
      <ul>
        <li v-for="plano in planos" :key="plano.id">
          <div>
            <strong>{{ plano.nome }}</strong> <br>- {{ plano.descricao }} <br> - R$ {{ plano.valor }} <br> - {{ plano.duracao_meses }} meses
          </div>
          <button @click="edit(plano)">Editar</button>
          <button @click="remove(plano.id)">Deletar</button>
        </li>
      </ul>
    </div>
  </template>
  
<script lang="ts" src="./PlanoView.ts"></script>
<style scoped src="../../assets/global/content_style.css"></style>

  