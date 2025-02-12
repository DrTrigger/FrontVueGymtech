import { defineComponent, reactive, ref, onMounted } from 'vue';
import { useProfessorStore } from '../../store/ProfessorStore';
import type { Professor } from '../../models/Professor';
import type { ProfessorResponse } from '../../models/ProfessorResponse';

export default defineComponent({
  name: 'ProfessorView',
  setup() {
    const store = useProfessorStore();
    
    // Formulário usando o modelo ProfessorInput
    const form = reactive<Professor>({
      nome: '',
      data_nascimento: '',
      cpf: '',
      email: '',
      senha: '',
      salario: 0,
      cref: '',
      carga_horaria_semanal: 0,
    });
    
    const isEditing = ref(false);
    const editingId = ref<number | null>(null);
    
    const handleSubmit = async () => {
      if (isEditing.value && editingId.value !== null) {
        await store.updateProfessor(editingId.value, form);
      } else {
        await store.addProfessor(form);
      }
      resetForm();
    };
    
    // Ao editar, preenche o formulário com os dados do professor recebido (ProfessorResponse)
    const edit = (prof: ProfessorResponse) => {
      form.nome = prof.nome;
      form.data_nascimento = prof.data_nascimento;
      form.cpf = prof.cpf;
      form.email = prof.email;
      // Em edição, a senha não é retornada – o campo permanece vazio para que o usuário informe, se necessário
      form.senha = '';
      form.salario = prof.salario;
      form.cref = prof.cref;
      form.carga_horaria_semanal = prof.carga_horaria_semanal;
      isEditing.value = true;
      editingId.value = prof.id;
    };
    
    const remove = async (id: number) => {
      await store.removeProfessor(id);
    };
    
    const resetForm = () => {
      form.nome = '';
      form.data_nascimento = '';
      form.cpf = '';
      form.email = '';
      form.senha = '';
      form.salario = 0;
      form.cref = '';
      form.carga_horaria_semanal = 0;
      isEditing.value = false;
      editingId.value = null;
    };
    
    const cancelEdit = () => {
      resetForm();
    };
    
    onMounted(async () => {
      await store.fetchProfessores();
    });
    
    return {
      form,
      isEditing,
      professors: store.professors,
      handleSubmit,
      edit,
      remove,
      cancelEdit,
    };
  },
});
