import { defineComponent, reactive, onMounted, ref } from 'vue';
import { useExercicioStore } from '../../store/ExercicioStore';
import type { Exercicio } from '../../models/Exercicio';

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
