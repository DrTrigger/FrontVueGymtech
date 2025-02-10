//declarando a existência do módulo router e das rotas definidas em router/
declare module "./router/" {
    import {Router} from "vue-router";
    const router: Router;
    export default router;
}