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

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue';
import { useExercicioStore } from '../store/ExercicioStore';
import type { Exercicio } from '../models/Exercicio';

export default defineComponent({
  name: 'ExercicioView',
  setup() {
    const store = useExercicioStore();

    // Estado do formulário
    const form = reactive<Exercicio>({
      id_exercicio: undefined,
      grupoMuscular: '',
      nome: '',
    });

    const isEditing = ref(false);

    const handleSubmit = async () => {
      if (isEditing.value && form.id_exercicio !== undefined) {
        await store.updateItem(form.id_exercicio, form);
      } else {
        await store.addItem(form);
      }
      resetForm();
    };

    const edit = (exercicio: Exercicio) => {
      form.id_exercicio = exercicio.id_exercicio;
      form.grupoMuscular = exercicio.grupoMuscular;
      form.nome = exercicio.nome;
      isEditing.value = true;
    };

    const remove = async (id?: number) => {
      if (id !== undefined) {
        await store.removeItem(id);
      }
    };

    const resetForm = () => {
      form.id_exercicio = undefined;
      form.grupoMuscular = '';
      form.nome = '';
      isEditing.value = false;
    };

    const cancelEdit = () => {
      resetForm();
    };

    onMounted(() => {
      store.fetchItems();
    });

    return {
      form,
      isEditing,
      exercicios: store.items,
      handleSubmit,
      edit,
      remove,
      cancelEdit,
    };
  },
});
</script>

<style scoped>
.exercicio-view {
  max-width: 600px;
  margin: 0 auto;
}

.exercicio-view form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.exercicio-view form div {
  margin-bottom: 10px;
}
</style>
