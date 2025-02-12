import { defineComponent, reactive, ref, onMounted } from 'vue';
import { useContratoStore } from '../../store/ContratoStore';
import type { Contrato } from '../../models/Contrato';
import type { ContratoResponse } from '../../models/ContratoResponse';
import type { Plano } from '@/models/Plano';
import { listPlanos } from '@/services/PlanoService';
import type { Aluno } from '@/models/Aluno';
import { listAlunos } from '@/services/AlunoService';
export default defineComponent({
  name: 'ContratoView',
  setup() {
    const store = useContratoStore();

    // Formulário usa a interface ContratoInput
    const form = reactive<Contrato>({
      idPessoa: 0,
      idPlano: 0,
      nome: '',
      data_inicio: '',
      data_fim: '',
      data_vencimento: '',
      status: '',
      valor_pago: 0,
    });

    const isEditing = ref(false);
    const editingId = ref<number | null>(null);
    const lista_planos = ref<Plano[]>([]);
    const lista_alunos = ref<Aluno[]>([]);

    const handleSubmit = async () => {
      if (isEditing.value && editingId.value !== null) {
        await store.updateContrato(editingId.value, form);
      } else {
        await store.addContrato(form);
      }
      resetForm();
      store.fetchContratos();
    };

    // Ao editar, os dados recebidos (ContratoResponse) possuem os objetos aninhados
    const edit = (contrato: ContratoResponse) => {
      // Para o formulário, extraímos os IDs dos objetos aluno e plano
      form.idPessoa = contrato.aluno.id;
      form.idPlano = contrato.plano.id;
      form.nome = contrato.nome;
      form.data_inicio = contrato.data_inicio;
      form.data_fim = contrato.data_fim;
      form.data_vencimento = contrato.data_vencimento;
      form.status = contrato.status;
      form.valor_pago = contrato.valor_pago;
      isEditing.value = true;
      editingId.value = contrato.id;
    };

    const remove = async (id: number) => {
      await store.removeContrato(id);
    };

    const resetForm = () => {
      form.idPessoa = 0;
      form.idPlano = 0;
      form.nome = '';
      form.data_inicio = '';
      form.data_fim = '';
      form.data_vencimento = '';
      form.status = '';
      form.valor_pago = 0;
      isEditing.value = false;
      editingId.value = null;
    };
    
    const cancelEdit = () => {
      resetForm();
    };

    onMounted(async () => {
      await store.fetchContratos();
      lista_planos.value = await listPlanos();
      lista_alunos.value = await listAlunos();
    });

    return {
      form,
      isEditing,
      contratos: store.contratos,
      handleSubmit,
      edit,
      remove,
      cancelEdit,
      lista_planos,
      lista_alunos
    };
  },
});

