import { defineComponent, reactive, ref, onMounted } from 'vue';
import { usePlanoStore } from '../../store/PlanoStore';
import type { Plano } from '../../models/Plano';

export default defineComponent({
  name: 'PlanoView',
  setup() {
    const store = usePlanoStore();

    // Estado do formulário utilizando a interface Plano
    const form = reactive<Plano>({
      id: 0,
      nome: '',
      descricao: '',
      valor: 0,
      duracao_meses: 0,
    });

    const isEditing = ref(false);
    const editingId = ref<number | null>(null);

    // Envio do formulário para criar ou atualizar o plano
    const handleSubmit = async () => {
      if (isEditing.value && editingId.value !== null) {
        await store.updateItem(editingId.value, form);
      } else {
        await store.addItem(form);
      }
      resetForm();
    };

    // Prepara o formulário para edição, carregando os dados do plano selecionado
    const edit = (plano: Plano) => {
      form.id = plano.id;
      form.nome = plano.nome;
      form.descricao = plano.descricao;
      form.valor = plano.valor;
      form.duracao_meses = plano.duracao_meses;
      isEditing.value = true;
      editingId.value = plano.id;
    };

    // Chama a ação para remover um plano
    const remove = async (id: number) => {
      await store.removeItem(id);
    };

    // Reseta o formulário para o estado inicial
    const resetForm = () => {
      form.id = 0;
      form.nome = '';
      form.descricao = '';
      form.valor = 0;
      form.duracao_meses = 0;
      isEditing.value = false;
      editingId.value = null;
    };

    const cancelEdit = () => {
      resetForm();
    };

    // Busca os planos ao montar o componente
    onMounted(() => {
      store.fetchItems();
    });

    return {
      form,
      isEditing,
      planos: store.items,
      handleSubmit,
      edit,
      remove,
      cancelEdit,
    };
  },
});
