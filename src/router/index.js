//Arquivo que une os arquivos de rotas para exportação no main.ts

import {createRouter, createWebHistory} from 'vue-router';

import globalRoutes from './global';
import alunoRoutes from './aluno';
import professorRoutes from './professor'

const routes = [globalRoutes, alunoRoutes, professorRoutes];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;