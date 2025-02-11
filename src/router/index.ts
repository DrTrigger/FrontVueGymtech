//Arquivo que une os arquivos de rotas para exportação no main.ts

import {createRouter, createWebHistory, type Router, type RouteRecordRaw} from 'vue-router';

import homepage_view from '../components/menu/MainMenu.vue';
import aluno_view from '../components/aluno/AlunoView.vue';
import professor_view from '../components/professor/ProfessorView.vue';
import plano_view from '../components/plano/PlanoView.vue';
import contrato_view from '../components/contrato/ContratoView.vue'
import ficha_view from '../components/ficha/FichaView.vue';
import exercicio_view from '../components/exercicio/ExercicioView.vue';
import exercicio_ficha_view from '../components/exercicio-ficha/ExercicioFichaView.vue';
import equipamento_view from '../components/equipamento/EquipamentoView.vue';
import tipo_equipamento_view from '../components/tipo-equipamento/TipoEquipamentoView.vue';



const routes: RouteRecordRaw[] = [
    {path: '/', component: homepage_view},
    {path: '/Alunos', component: aluno_view},
    {path: '/Professores', component: professor_view},
    {path: '/Planos', component: plano_view},
    {path: '/Contratos', component: contrato_view},
    {path: '/Fichas', component: ficha_view},
    {path: '/Exercicios', component: exercicio_view},
    {path: '/Exercicios_por_Ficha', component: exercicio_ficha_view},
    {path: '/Equipamentos', component: equipamento_view},
    {path: '/Grupos_de_Equipamentos', component: tipo_equipamento_view},
    {path: '/:pathMatch(.*)*', redirect: '/'}
];

const router:Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;