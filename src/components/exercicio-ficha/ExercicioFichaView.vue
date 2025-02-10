<!-- src/views/ExercicioFichaView.vue -->
<template>
  <div class="exercicio-ficha-view">
    <h1>Exercícios da Ficha</h1>
    
    <!-- Formulário para cadastrar/editar exercício da ficha -->
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="id_exercicio">ID Exercício:</label>
        <input type="number" id="id_exercicio" v-model.number="form.id_exercicio" required />
      </div>
      <div>
        <label for="id_ficha">ID Ficha:</label>
        <input type="number" id="id_ficha" v-model.number="form.id_ficha" required />
      </div>
      <div>
        <label for="id_equipamento">ID Equipamento:</label>
        <input type="number" id="id_equipamento" v-model.number="form.id_equipamento" required />
      </div>
      <div>
        <label for="numero_repeticao">Número de Repetição:</label>
        <input type="number" id="numero_repeticao" v-model.number="form.numero_repeticao" required />
      </div>
      <div>
        <label for="tempo_descanso">Tempo de Descanso (segundos):</label>
        <input type="number" id="tempo_descanso" v-model.number="form.tempo_descanso" required />
      </div>
      <div>
        <label for="peso">Peso:</label>
        <input type="number" id="peso" v-model.number="form.peso" required />
      </div>
      <button type="submit">{{ isEditing ? 'Atualizar' : 'Adicionar' }}</button>
      <button type="button" v-if="isEditing" @click="cancelEdit">Cancelar</button>
    </form>

    <!-- Lista de exercícios da ficha -->
    <ul>
      <li v-for="exercicio in exerciciosFicha" :key="exercicio.id_exercicio_ficha">
        <div>
          <strong>ID: {{ exercicio.id_exercicio_ficha }}</strong> - {{ exercicio.exercicio.nome }}
          <div>ID Ficha: {{ exercicio.id_ficha }}</div>
          <div>Equipamento: {{ exercicio.equipamento.nome }}</div>
          <div>N° de Repetições: {{ exercicio.numero_repeticao }}</div>
          <div>Equipamento: {{ exercicio.equipamento.idEquipamento }}</div>
          <div>Tempo de Descanso: {{ exercicio.tempo_descanso }} seg</div>
          <div>Peso: {{ exercicio.peso }}</div>
          <!-- Se desejar exibir matricula_aluno, você pode adicionar aqui -->
        </div>
        <button @click="edit(exercicio)">Editar</button>
        <button @click="remove(exercicio.id_exercicio_ficha)">Deletar</button>
      </li>
    </ul>
  </div>
</template>


<script lang="ts" src="./ExercicioFichaView.ts"></script>
<style scoped src="./ExercicioFichaView.css"></style>