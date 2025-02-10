<script setup lang="ts">
import AlunoView from './components/../components/aluno/AlunoView.vue';
import ExercicioView from './components/exercicio/ExercicioView.vue';
import PlanoView from './components/plano/PlanoView.vue';
import ProfessorView from './components/professor/ProfessorView.vue';
import TipoEquipamentoView from './components/tipo-equipamento/TipoEquipamentoView.vue';
import ExercicioFicha from './components/exercicio-ficha/ExercicioFichaView.vue';
import FichaView from './components/ficha/FichaView.vue';
import ContratoView from './components/contrato/ContratoView.vue';
import EquipamentoView from './components/equipamento/EquipamentoView.vue';
import ExercicioFichaView from './components/exercicio-ficha/ExercicioFichaView.vue';


</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <TipoEquipamentoView/>
    </div>
  </header>

  <main>
    
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
