<script setup lang="ts">
import AlunoView from './components/AlunoView.vue';
import ContratoView from './components/ContratoView.vue';
import ExercicioView from './components/ExercicioView.vue';
import PlanoView from './components/PlanoView.vue';
import ProfessorView from './components/ProfessorView.vue';
import TipoEquipamentoView from './components/TipoEquipamentoView.vue';
import EquipamentoView from './components/EquipamentoView.vue';
import ExercicioFicha from './components/ExercicioFicha.vue';
import FichaView from './components/FichaView.vue';

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <FichaView/>
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
