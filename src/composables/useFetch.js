import {ref} from 'vue';

export function useFetch(url) {
    let data = ref(null) // resultat
    let error = ref(null) // erreur
    let loading = ref(true) // l'etat de chargement

    fetch(url)
        .then((r) => {
            if (!r.ok) throw new Error(r.status) // statu HTTP de l'erreur
            return r.json()
        })
        .then((json) => (data.value = json))
        .catch((e) => (error.value = e))
        .finally(() => (loading.value = false))

    return {data, error, loading}
}