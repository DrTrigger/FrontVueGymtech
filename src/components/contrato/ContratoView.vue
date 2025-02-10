<!-- src/views/ContratoView.vue -->
<template>
  <div class="contrato-view">
    <h1>Contratos</h1>
    
    <!-- Formulário para cadastrar/editar contrato -->
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="idPessoa">ID Pessoa:</label>
        <input type="number" id="idPessoa" v-model.number="form.idPessoa" required />
      </div>
      <div>
        <label for="idPlano">ID Plano:</label>
        <input type="number" id="idPlano" v-model.number="form.idPlano" required />
      </div>
      <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="form.nome" required />
      </div>
      <div>
        <label for="data_inicio">Data Início:</label>
        <input type="datetime-local" id="data_inicio" v-model="form.data_inicio" required />
      </div>
      <div>
        <label for="data_fim">Data Fim:</label>
        <input type="datetime-local" id="data_fim" v-model="form.data_fim" required />
      </div>
      <div>
        <label for="data_vencimento">Data Vencimento:</label>
        <input type="datetime-local" id="data_vencimento" v-model="form.data_vencimento" required />
      </div>
      <div>
        <label for="status">Status:</label>
        <input type="text" id="status" v-model="form.status" required />
      </div>
      <div>
        <label for="valor_pago">Valor Pago:</label>
        <input type="number" id="valor_pago" v-model.number="form.valor_pago" step="0.01" required />
      </div>
      <button type="submit">{{ isEditing ? 'Atualizar' : 'Adicionar' }}</button>
      <button type="button" v-if="isEditing" @click="cancelEdit">Cancelar</button>
    </form>

    <!-- Lista de contratos -->
    <ul>
      <li v-for="contrato in contratos" :key="contrato.id">
        <div>
          <strong>{{ contrato.nome }}</strong> - Status: {{ contrato.status }}
          <div>
            Aluno: {{ contrato.aluno.nome }} (ID: {{ contrato.aluno.id }})
          </div>
          <div>
            Plano: {{ contrato.plano.nome }} (ID: {{ contrato.plano.id }})
          </div>
          <div>Data Início: {{ contrato.data_inicio }}</div>
          <div>Data Fim: {{ contrato.data_fim }}</div>
          <div>Data Vencimento: {{ contrato.data_vencimento }}</div>
          <div>Valor Pago: {{ contrato.valor_pago }}</div>
        </div>
        <button @click="edit(contrato)">Editar</button>
        <button @click="remove(contrato.id)">Deletar</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./ContratoView.ts"></script>
<style scoped src="./ContratoView.css"></style>