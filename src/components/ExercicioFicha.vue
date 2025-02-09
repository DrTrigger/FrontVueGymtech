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
  
  <script lang="ts">
  import { defineComponent, reactive, ref, onMounted } from 'vue';
  import { useExercicioFichaStore } from '../store/ExercicioFichaStore';
  import type { ExercicioFicha } from '../models/ExercicioFicha';
  import type { ExercicioFichaResponse } from '../models/ExercicioFichaResponse';
  
  export default defineComponent({
    name: 'ExercicioFichaView',
    setup() {
      const store = useExercicioFichaStore();
  
      // Formulário baseado no modelo ExercicioFichaInput
      const form = reactive<ExercicioFicha>({
        id_exercicio: 0,
        id_ficha: 0,
        id_equipamento: 0,
        numero_repeticao: 0,
        tempo_descanso: 0,
        peso: 0,
      });
  
      const isEditing = ref(false);
      const editingId = ref<number | null>(null);
  
      const handleSubmit = async () => {
        if (isEditing.value && editingId.value !== null) {
          await store.updateExercicioFicha(editingId.value, form);
        } else {
          await store.addExercicioFicha(form);
        }
        resetForm();
      };
  
      // Ao editar, preenche o formulário com os dados da resposta
      const edit = (exercicio: ExercicioFichaResponse) => {
        form.id_exercicio = exercicio.exercicio.id_exercicio;
        form.id_ficha = exercicio.id_ficha;
        form.id_equipamento = exercicio.equipamento.idEquipamento;
        form.numero_repeticao = exercicio.numero_repeticao;
        form.tempo_descanso = exercicio.tempo_descanso;
        form.peso = exercicio.peso;
        isEditing.value = true;
        editingId.value = exercicio.id_exercicio_ficha;
      };
  
      const remove = async (id: number) => {
        await store.removeExercicioFicha(id);
      };
  
      const resetForm = () => {
        form.id_exercicio = 0;
        form.id_ficha = 0;
        form.id_equipamento = 0;
        form.numero_repeticao = 0;
        form.tempo_descanso = 0;
        form.peso = 0;
        isEditing.value = false;
        editingId.value = null;
      };
  
      const cancelEdit = () => {
        resetForm();
      };
  
      onMounted(() => {
        store.fetchExerciciosFicha();
      });
  
      return {
        form,
        isEditing,
        exerciciosFicha: store.exerciciosFicha,
        handleSubmit,
        edit,
        remove,
        cancelEdit,
      };
    },
  });
  </script>
  
  <style scoped>
  .exercicio-ficha-view {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .exercicio-ficha-view form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .exercicio-ficha-view form div {
    margin-bottom: 10px;
  }
  
  .exercicio-ficha-view ul {
    list-style: none;
    padding: 0;
  }
  
  .exercicio-ficha-view li {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  