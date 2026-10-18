<script setup>
import {ref} from 'vue'

const emit = defineEmits(['ajout'])
let newTache = ref('')
let messageErreur = ref('')

function valider(){
  if (newTache.value !== ''){
    emit('ajout', newTache.value)
    messageErreur.value = ''
    newTache.value = ''
  }
  else{
    messageErreur.value = 'Veuillez rentrer une tâche'
  }
}
</script>

<template>
  <form @submit.prevent="valider"> <!--- .prevent empeche page de refresh à l'envie du form--->
    <input v-model="newTache" placeholder="nouvelle tâche" />
    <p id="messageErreur">{{messageErreur}}</p>
    <button type="submit">Valider</button>
  </form>
</template>

<style scoped>
#messageErreur{
  color : red;
}
</style>