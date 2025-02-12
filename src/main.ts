import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router/';

// Importando estilos globais
import '@/assets/global/body.css';
import '@/assets/global/border.css';
import '@/assets/global/button.css';
import '@/assets/global/content_style.css';
import '@/assets/global/scrollbar.css';



const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
