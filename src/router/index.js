import { createRouter, createWebHistory } from 'vue-router'
import Accueil from "@/views/Accueil.vue";
import Liste from "@/views/Liste.vue";
import Détail from "@/views/Détail.vue";
import APropos from "@/views/APropos.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: Accueil},
    {path: '/todos', name: 'liste', component: Liste,
    children: [
      {path: '/todos/:id', name: 'détail', component: Détail}
    ]},
    {path: '/a_propos', name: 'à propos', component: APropos}
  ],
})

export default router
