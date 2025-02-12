import { defineComponent, reactive, ref, onMounted } from 'vue';
import { useExercicioFichaStore } from '../../store/ExercicioFichaStore';
import type { ExercicioFicha } from '../../models/ExercicioFicha';
import type { ExercicioFichaResponse } from '../../models/ExercicioFichaResponse';
import { listExercicios } from '@/services/ExercicioService';
import { listFichas } from '@/services/FichaService';
import { listEquipamentos } from '@/services/EquipamentoService';
import type { Exercicio } from '@/models/Exercicio';
import type { FichaResponse } from '@/models/FichaResponse';
import type { EquipamentoResponse } from '@/models/EquipamentoResponse';

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
    const editingId = ref<number | null>(null)
    const lista_exercicios = ref<Exercicio[]>([]);
    const lista_fichas = ref<FichaResponse[]>([]);
    const lista_equipamentos = ref<EquipamentoResponse[]>([]);

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

    onMounted(async () => {
      await store.fetchExerciciosFicha();
      lista_exercicios.value = await listExercicios();
      lista_fichas.value = await listFichas();
      lista_equipamentos.value = await listEquipamentos();
    });

    return {
      form,
      isEditing,
      exerciciosFicha: store.exerciciosFicha,
      handleSubmit,
      edit,
      remove,
      cancelEdit,
      lista_exercicios,
      lista_fichas,
      lista_equipamentos
    };
  },
});