import { defineComponent, reactive, ref, onMounted } from "vue";

export default defineComponent({
    name:"MainMenu",
    setup(){
        let opt_list = ref(["Alunos", "Professores", "Fichas", "Exercicios","Exercicios por Ficha" , "Planos", "Contratos", "Equipamentos", "Grupos de Equipamentos"]);
        
        return { opt_list }; //Obs.: Precisa ter os colchetes para o arquivo vue reconhecer essa variável
    }
}); 
