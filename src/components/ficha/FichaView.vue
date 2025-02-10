<template>
  <!-- HTML do seu componente aqui -->
  <div class="ficha-view">
    <h1>Fichas</h1>

    <!-- Formulário para cadastrar/editar ficha -->
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="dataInicio">Data Início:</label>
        <input type="datetime-local" id="dataInicio" v-model="form.dataInicio" required />
      </div>
      <div>
        <label for="dataFim">Data Fim:</label>
        <input type="datetime-local" id="dataFim" v-model="form.dataFim" required />
      </div>
      <div>
        <label for="idAluno">ID Aluno:</label>
        <input type="number" id="idAluno" v-model.number="form.idAluno" required />
      </div>
      <div>
        <label for="idProfessor">ID Professor:</label>
        <input type="number" id="idProfessor" v-model.number="form.idProfessor" required />
      </div>
      <button type="submit">{{ isEditing ? 'Atualizar' : 'Adicionar' }}</button>
      <button type="button" v-if="isEditing" @click="cancelEdit">Cancelar</button>
    </form>

    <!-- Lista de fichas -->
    <ul>
      <li v-for="ficha in fichas" :key="ficha.id">
        <div>
          <strong>ID: {{ ficha.id }}</strong>
          <div>Data Início: {{ ficha.data_inicio }}</div>
          <div>Data Fim: {{ ficha.data_fim }}</div>
          <div>Aluno: {{ ficha.aluno.nome }} (ID: {{ ficha.aluno.id }})</div>
          <div>Professor: {{ ficha.professor.nome }} (ID: {{ ficha.professor.id }})</div>
          <div>
            <strong>Exercícios:</strong>
            <ul>
              <li v-for="ex in ficha.exercicioFichaList" :key="ex.id_exercicio_ficha">
                ID Exercício Ficha: {{ ex.id_exercicio_ficha }} — 
                Exercicio: {{ ex.exercicio.nome }},
                Equipamento: {{ ex.equipamento.nome }},
                Repetições: {{ ex.numero_repeticao }},
                Descanso: {{ ex.tempo_descanso }} seg,
                Peso: {{ ex.peso }}
                <button @click="null">Editar</button>
                <button @click="null">Deletar</button>
              </li>
            </ul>
          </div>
        </div>
        <button @click="edit(ficha)">Editar</button>
        <button @click="remove(ficha.id)">Deletar</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./FichaView.ts"></script>
<style scoped src="./FichaView.css"></style>
