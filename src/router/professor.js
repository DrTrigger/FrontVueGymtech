//Rotas que só o professor pode acessar

import {createRouter, createWebHistory} from 'vue-router'



//Importando as páginas
import detalhes_professor from '../view/DetalhesProfessor.vue';

import cadastrar_ficha from '../view/CadastrarFicha.vue';
import cadastrar_plano from '../view/CadastrarPlano.vue';
import cadastrar_equipamento from '../view/CadastrarEquipamento.vue';

import listar_fichas from '../view/ListarFichas.vue';
import listar_equipamentos from '../view/ListarEquipamentos.vue';

import detalhes_equipamento from '../view/DetalhesEquipamento.vue';

import editar_ficha from '../view/EditarFicha.vue';
import editar_plano from '../view/EditarPlano.vue';
import editar_equipamento from '../view/EditarEquipamento.vue';
import editar_professor from '../view/EditarProfessor.vue';


const routes = [
    {path: '/professor/perfil', component: detalhes_professor},

    {path: '/professor/editar', component: editar_professor},

    {path: '/ficha/criar', component: cadastrar_ficha},
    
    {path: '/fichas', component: listar_fichas},

    {path: '/ficha/:id/editar', component: editar_ficha},

    {path: '/plano/criar', component: cadastrar_plano},

    {path: 'plano/:id/editar', component: editar_plano},

    {path: '/equipamento/cadastrar', component: cadastrar_equipamento},

    {path: '/equipamentos', component: listar_equipamentos},

    {path: '/equipamento/:id/detalhes', component: detalhes_equipamento},
    
    {path: '/equipamento/:id/editar', component: editar_equipamento},   
];


//Exportando a estrutura de rotas
export default router;