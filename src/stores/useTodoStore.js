import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
    // liste de tâches
    let liste = ref([
        {id : 1, tache: 'Tache 1', terminer: false},
        {id : 2, tache: 'Tache 2', terminer: false}
    ])

    //ACTION : ajout
    let nouvelId = 3
    function ajout(tache){
        liste.value.push({id : nouvelId, tache: tache , terminer : false}) //push les infos
        nouvelId++
    }

    // ACTION : suppression
    function suppression (id){
        //liste.value = liste.value.filter(t => t.id !== id)

        for(let i = 0; i < liste.value.length; i++){
            if (liste.value[i].id === id){
                // machin qui supprime
            }
        }
    }

    // ACTION : basculer le statu en terminer === true
    function basculer (id){
        for(let i = 0; i < liste.value.length; i++){
            if (liste.value[i].id === id){
                liste.value[i].terminer = !liste.value[i].terminer
            }
        }
    }

    //GETTER
    let tacheRestante = computed(() => {
        let nbTacheRestante = 0
        for(let i = 0; i < liste.value.length; i++){
            if (liste.value[i].terminer === false){
                nbTacheRestante++
            }
        }
        return nbTacheRestante
    })


    return {
        liste,
        ajout,
        suppression,
        basculer,
        tacheRestante
    }
})
