<script setup>
const props = defineProps({
  id : {type: Number, required: true},
  tache : {type: String, required: true},
  terminer : {type: Boolean}
});
 const emit = defineEmits(['suppression', 'basculer'])
</script>

<template>
  <li>
    <label :class="{'fini': terminer}">{{ tache }}</label>
    <button @click="emit('basculer', id)">Terminer</button>
    <button @click="emit('suppression', id)">Supprimer</button>
  </li>
</template>

<style scoped>
.fini{
  text-decoration: line-through;
}
</style>