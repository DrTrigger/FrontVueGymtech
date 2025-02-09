<!-- src/views/ContratoView.vue -->
<template>
  <div class="contrato-view">
    <h1>Contratos</h1>
    
    <!-- Formulário para cadastrar/editar contrato -->
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="idPessoa">ID Pessoa:</label>
        <input type="number" id="idPessoa" v-model.number="form.idPessoa" required />
      </div>
      <div>
        <label for="idPlano">ID Plano:</label>
        <input type="number" id="idPlano" v-model.number="form.idPlano" required />
      </div>
      <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="form.nome" required />
      </div>
      <div>
        <label for="data_inicio">Data Início:</label>
        <input type="datetime-local" id="data_inicio" v-model="form.data_inicio" required />
      </div>
      <div>
        <label for="data_fim">Data Fim:</label>
        <input type="datetime-local" id="data_fim" v-model="form.data_fim" required />
      </div>
      <div>
        <label for="data_vencimento">Data Vencimento:</label>
        <input type="datetime-local" id="data_vencimento" v-model="form.data_vencimento" required />
      </div>
      <div>
        <label for="status">Status:</label>
        <input type="text" id="status" v-model="form.status" required />
      </div>
      <div>
        <label for="valor_pago">Valor Pago:</label>
        <input type="number" id="valor_pago" v-model.number="form.valor_pago" step="0.01" required />
      </div>
      <button type="submit">{{ isEditing ? 'Atualizar' : 'Adicionar' }}</button>
      <button type="button" v-if="isEditing" @click="cancelEdit">Cancelar</button>
    </form>

    <!-- Lista de contratos -->
    <ul>
      <li v-for="contrato in contratos" :key="contrato.id">
        <div>
          <strong>{{ contrato.nome }}</strong> - Status: {{ contrato.status }}
          <div>
            Aluno: {{ contrato.aluno.nome }} (ID: {{ contrato.aluno.id }})
          </div>
          <div>
            Plano: {{ contrato.plano.nome }} (ID: {{ contrato.plano.id }})
          </div>
          <div>Data Início: {{ contrato.data_inicio }}</div>
          <div>Data Fim: {{ contrato.data_fim }}</div>
          <div>Data Vencimento: {{ contrato.data_vencimento }}</div>
          <div>Valor Pago: {{ contrato.valor_pago }}</div>
        </div>
        <button @click="edit(contrato)">Editar</button>
        <button @click="remove(contrato.id)">Deletar</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue';
import { useContratoStore } from '../store/ContratoStore';
import type { Contrato } from '../models/Contrato';
import type { ContratoResponse } from '../models/ContratoResponse';

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

    onMounted(() => {
      store.fetchContratos();
    });

    return {
      form,
      isEditing,
      contratos: store.contratos,
      handleSubmit,
      edit,
      remove,
      cancelEdit,
    };
  },
});
</script>

<style scoped>
.contrato-view {
  max-width: 600px;
  margin: 0 auto;
}
.contrato-view form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.contrato-view form div {
  margin-bottom: 10px;
}
</style>
