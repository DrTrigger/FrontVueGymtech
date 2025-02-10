  <!-- src/views/FichaView.vue -->
<template>
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

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue';
import { useFichaStore } from '../store/FichaStore';
import type { Ficha } from '../models/Ficha';
import type { FichaResponse } from '../models/FichaResponse';

export default defineComponent({
  name: 'FichaView',
  setup() {
    const store = useFichaStore();

    // Formulário baseado no modelo FichaInput
    const form = reactive<Ficha>({
      dataInicio: '',
      dataFim: '',
      idAluno: 0,
      idProfessor: 0,
    });

    const isEditing = ref(false);
    const editingId = ref<number | null>(null);

    const handleSubmit = async () => {
      if (isEditing.value && editingId.value !== null) {
        await store.updateFicha(editingId.value, form);
      } else {
        await store.addFicha(form);
      }
      resetForm();
    };

    // Ao clicar em "Editar", preenche o formulário com os dados da ficha (FichaResponse)
    const edit = (ficha: FichaResponse) => {
      form.dataInicio = ficha.data_inicio ? ficha.data_inicio.substring(0, 16) : '';
      form.dataFim = ficha.data_fim ? ficha.data_fim.substring(0, 16) : '';
      form.idAluno = ficha.aluno.id;
      form.idProfessor = ficha.professor.id;
      isEditing.value = true;
      editingId.value = ficha.id;
    };

    const remove = async (id: number) => {
      await store.removeFicha(id);
    };

    const resetForm = () => {
      form.dataInicio = '';
      form.dataFim = '';
      form.idAluno = 0;
      form.idProfessor = 0;
      isEditing.value = false;
      editingId.value = null;
    };

    const cancelEdit = () => {
      resetForm();
    };

    onMounted(() => {
      store.fetchFichas();
    });

    return {
      form,
      isEditing,
      fichas: store.fichas,
      handleSubmit,
      edit,
      remove,
      cancelEdit,
    };
  },
});
</script>

<style scoped>
.ficha-view {
  max-width: 800px;
  margin: 0 auto;
}

.ficha-view form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.ficha-view form div {
  margin-bottom: 10px;
}

.ficha-view ul {
  list-style: none;
  padding: 0;
}

.ficha-view li {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
