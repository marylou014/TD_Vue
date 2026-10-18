<script setup>
</script>

<template>
  <nav>
    <RouterLink to="/"> Acceuil </RouterLink>
    <RouterLink to="/todos"> Liste </RouterLink>
    <RouterLink to="/todos/:id"> Liste - Détail </RouterLink>
    <RouterLink to="/about">A propos</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
/* Style de la barre de navigation */
nav {
  display: flex;
  gap: 15px;
  background-color: #2c3e50;
  padding: 1rem 2rem;
  border-radius: 8px;
  margin-bottom: 20px;
  justify-content: center;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

nav a.router-link-active {
  background-color: #42b883;
  font-weight: bold;
}
</style>
