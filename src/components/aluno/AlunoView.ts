import { defineComponent, reactive, ref, onMounted } from 'vue';
import { useAlunoStore } from '../../store/AlunoStore';
import type { Aluno } from '../../models/Aluno';
  
export default defineComponent({
    name: 'AlunoView',
    setup() {
      const store = useAlunoStore();
  
      // Estado do formulário
      const form = reactive<Aluno>({
        id: undefined,
        nome: '',
        data_nascimento: '',
        cpf: '',
        email: '',
        senha: '',
        data_matricula: '',
        matricula_aluno: '',
        restricao_medica: '',
      });
  
      const isEditing = ref(false);
  
      const handleSubmit = async () => {
        if (isEditing.value && form.id !== undefined) {
          await store.updateItem(form.id, form);
        } else {
          await store.addItem(form);
        }
        resetForm();
      };
  
      const edit = (aluno: Aluno) => {
        form.id = aluno.id;
        form.nome = aluno.nome;
        form.data_nascimento = aluno.data_nascimento;
        form.cpf = aluno.cpf;
        form.email = aluno.email;
        form.senha = aluno.senha;
        form.data_matricula = aluno.data_matricula;
        form.matricula_aluno = aluno.matricula_aluno;
        form.restricao_medica = aluno.restricao_medica;
        isEditing.value = true;
      };
  
      const remove = async (id?: number) => {
        if (id !== undefined) {
          await store.removeItem(id);
        }
      };
  
      const resetForm = () => {
        form.id = undefined;
        form.nome = '';
        form.data_nascimento = '';
        form.cpf = '';
        form.email = '';
        form.senha = '';
        form.data_matricula = '';
        form.matricula_aluno = '';
        form.restricao_medica = '';
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
        alunos: store.items,
        handleSubmit,
        edit,
        remove,
        cancelEdit,
      };
    },
});
