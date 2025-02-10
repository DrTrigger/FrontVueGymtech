import { defineComponent, reactive, ref, onMounted } from 'vue';
import { useTipoEquipamentoStore } from '../../store/tipoEquipamentoStore';
import type { TipoEquipamento } from '../../models/TipoEquipamento';

export default defineComponent({
  name: 'TipoEquipamentoView',
  setup() {
    const store = useTipoEquipamentoStore();

    // Estado do formulário
    const form = reactive<TipoEquipamento>({
      idTipo: undefined,
      nomeTipo: '',
      descricao: ''
    });

    const isEditing = ref(false);

    const handleSubmit = async () => {
      if (isEditing.value && form.idTipo !== undefined) {
        await store.updateItem(form.idTipo, form);
      } else {
        await store.addItem(form);
      }
      resetForm();
    };

    const edit = (equip: TipoEquipamento) => {
      form.idTipo = equip.idTipo;
      form.nomeTipo = equip.nomeTipo;
      form.descricao = equip.descricao;
      isEditing.value = true;
    };

    const remove = async (id?: number) => {
      if (id !== undefined) {
        await store.removeItem(id);
      }
    };

    const resetForm = () => {
      form.idTipo = undefined;
      form.nomeTipo = '';
      form.descricao = '';
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
      tipoEquipamentos: store.items,
      handleSubmit,
      edit,
      remove,
      cancelEdit,
    };
  },
});
