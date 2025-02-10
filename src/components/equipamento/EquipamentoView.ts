import { defineComponent, reactive, ref, onMounted } from 'vue';
import { useEquipamentoStore } from '../../store/EquipamentoStore';
import type { Equipamento } from '../../models/Equipamento';
import type { EquipamentoResponse } from '../../models/EquipamentoResponse';

export default defineComponent({
  name: 'EquipamentoView',
  setup() {
    const store = useEquipamentoStore();

    // Formulário usando o modelo EquipamentoInput
    const form = reactive<Equipamento>({
      nome: '',
      id_tipo_equipamento: 0,
      peso: 0,
      fabricante: '',
      dataAquisicao: '',
      estado: '',
      descricao: '',
    });

    const isEditing = ref(false);
    const editingId = ref<number | null>(null);

    const handleSubmit = async () => {
      if (isEditing.value && editingId.value !== null) {
        await store.updateEquipamento(editingId.value, form);
      } else {
        await store.addEquipamento(form);
      }
      resetForm();
    };

    // Preenche o formulário para edição usando o EquipamentoResponse recebido
    const edit = (equip: EquipamentoResponse) => {
      form.nome = equip.nome;
      // Note que o campo id_tipo_equipamento não vem na resposta; normalmente o back-end retorna o objeto do tipo.
      // Você pode extrair o ID se o objeto possuir essa informação ou solicitar ao usuário.
      // Aqui, mantemos o valor atual ou limpa para preenchimento manual:
      form.id_tipo_equipamento = 0;
      form.peso = equip.peso;
      form.fabricante = equip.fabricante;
      form.dataAquisicao = equip.dataAquisicao;
      form.estado = equip.estado;
      form.descricao = equip.descricao;
      isEditing.value = true;
      editingId.value = equip.idEquipamento;
    };

    const remove = async (id: number) => {
      await store.removeEquipamento(id);
    };

    const resetForm = () => {
      form.nome = '';
      form.id_tipo_equipamento = 0;
      form.peso = 0;
      form.fabricante = '';
      form.dataAquisicao = '';
      form.estado = '';
      form.descricao = '';
      isEditing.value = false;
      editingId.value = null;
    };

    const cancelEdit = () => {
      resetForm();
    };

    onMounted(() => {
      store.fetchEquipamentos();
    });

    return {
      form,
      isEditing,
      equipamentos: store.equipamentos,
      handleSubmit,
      edit,
      remove,
      cancelEdit,
    };
  },
});
