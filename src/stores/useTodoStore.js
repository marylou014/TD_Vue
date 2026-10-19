import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import {useFetch} from "@/composables/useFetch.js";


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

        for(let i = 0; i < liste.value.length; i++){
            if (liste.value[i].id === id){
                liste.value.splice(i, 1)
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

    // gère le retour de l'api
    const {data, error, loading} = useFetch('https://data.economie.gouv.fr/api/v2/catalog/facets');

    watch(data, (json) => {
        const publishers = json.facets.find(f => f.name === 'publisher')
        publishers.facets
            .slice(0, 10)
            .forEach(p => ajout(p.name))
    })

    return {
        liste,
        ajout,
        suppression,
        basculer,
        tacheRestante
    }
})

