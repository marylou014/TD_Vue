<script setup>
import {useTodoStore} from "@/stores/useTodoStore.js";
import TodoItem from "@/components/TodoItem.vue";
import TodoForm from "@/components/TodoForm.vue";

let listeTache = useTodoStore();

</script>

<template>
  <h1>Liste</h1>
  <RouterView />

  <h3>Ajouter une tâches : </h3>
  <TodoForm @ajout="(tache) => listeTache.ajout(tache)" />

  <h3>ToDo : </h3>
  <p>Tâches restantes : {{listeTache.tacheRestante}}</p>
  <TransitionGroup name="fade" tag="ul">
    <ul>
      <TodoItem
          v-for="t in listeTache.liste"
          :id="t.id"
          :tache="t.tache"
          :terminer="t.terminer"
          @basculer="(id) => listeTache.basculer(id)"
          @suppression="(id) => listeTache.suppression(id)"
      />
    </ul>
  </TransitionGroup>

</template>

<style scoped>
.fade-enter-active, .fade-leave-active {transition : opacity .5s;}
.fade-enter-from, .fade-leave-to {opacity: 0;}
</style>