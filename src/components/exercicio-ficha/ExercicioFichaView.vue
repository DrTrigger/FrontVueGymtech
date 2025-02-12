<!-- src/views/ExercicioFichaView.vue -->
<template>

  <div class="content-wrapper">
    <h1>Cadastro(Exercícios por Ficha)</h1>
    
    <!-- Formulário para cadastrar/editar exercício da ficha -->
    <div class="form-section">
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="id_exercicio">Exercício:</label>
          <select name="exercicios" id="exercicios">
              <option v-for="exercicio in lista_exercicios.values()">{{ exercicio.nome}}</option>
          </select>
        </div>
        <div>
          <label for="id_ficha">Ficha:</label>
          <select name="fichas" id="fichas">
              <option v-for="ficha in lista_fichas.values()">{{ ficha.id}}</option>
          </select>
        </div>
        <div>
          <label for="id_equipamento">Equipamento:</label>
          <select name="exercicios" id="exercicios">
              <option v-for="equipamento in lista_equipamentos.values()">{{ equipamento.nome}}</option>
          </select>
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
    </div>

    <h1>Exercícios por fichas</h1>
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
<style scoped src="../../assets/global/content_style.css"></style>