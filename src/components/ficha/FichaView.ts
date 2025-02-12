// src/views/FichaView.ts
import { defineComponent, reactive, ref, onMounted } from 'vue';
import { useFichaStore } from '../../store/FichaStore';
import type { Ficha } from '../../models/Ficha';
import type { FichaResponse } from '../../models/FichaResponse';

import type { Aluno } from '@/models/Aluno';
import type { ProfessorResponse } from '@/models/ProfessorResponse';
// import ExercicioView from '../ExercicioView.vue';
import { deleteExercicioFicha } from '@/services/ExercicioFichaService';
import { listAlunos } from '@/services/AlunoService';
import { listProfessores } from '@/services/ProfessorService';

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
    const lista_alunos = ref<Aluno[]>([]);
    const lista_professores = ref<ProfessorResponse[]>([]);

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
      form.dataInicio = ficha.data_inicio;
      form.dataFim = ficha.data_fim;
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

    onMounted(async() => {
      await store.fetchFichas();
      lista_alunos.value = await listAlunos();
      lista_professores.value = await listProfessores();
    });

    return {
      form,
      isEditing,
      fichas: store.fichas,
      handleSubmit,
      edit,
      remove,
      cancelEdit,
      lista_alunos,
      lista_professores
    };
  },
});
