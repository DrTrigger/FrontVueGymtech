//Rotas que aluno e professor podem acessar


//Importando o métodos createRouter e createWebHistory
import {createRouter, createWebHistory} from 'vue-router';
/*
createRouter - Método que define as rotas da aplicação

createWebHistory - Método que configura a url de modo que ela atualize sem precisar recarregar a página
*/


// Importando as páginas
import menu_login from '../view/MenuLogin.vue';
import cadastrar_usuario from '../view/CadastrarUsuario.vue';
import detalhes_ficha from '../view/DetalhesFicha.vue';

import listar_planos from '../view/ListarPlanos.vue'
import detalhes_plano from '../view/DetalhesPlano.vue'

//Definindo estrutura de rotas
const routes = [
    {path: '/', component: menu_login},

    {path: '/cadastro', component: cadastrar_usuario},

    {path: 'ficha/:id/detalhes', component: detalhes_ficha},//O : serve para indicar um valor variável no path (neste caso, um valor id variável)

    {path: '/planos', component: listar_planos},

    {path: 'plano/:id/detalhes', component: detalhes_plano}
];


//Exportando a estrutura de rotas
export default routes;