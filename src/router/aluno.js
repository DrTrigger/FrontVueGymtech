//Rotas que o aluno pode acessar

//Importando métodos para criação e configuração de rotas
import {createRouter, createWebHistory} from 'vue-router';


//Importando os visuais
import detalhes_aluno from '../view/DetalhesAluno.vue'
import editar_aluno from '../view/EditarAluno.vue';

//Definindo estrutura que associa o caminho da url a cada página
const routes = [ 
    {path:'/aluno/perfil', component: detalhes_aluno},
    
    {path:'/aluno/editar', component:editar_aluno}
];

//Exportando a estrutura de rotas
export default router;


