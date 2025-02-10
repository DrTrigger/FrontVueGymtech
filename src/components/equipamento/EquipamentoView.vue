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
  
  <script lang="ts" src="./EquipamentoView.ts"></script>
  <style scoped src="./EquipamentoView.css"></style>
  

  