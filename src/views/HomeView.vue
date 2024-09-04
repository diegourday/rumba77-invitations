<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home-view">
    <h1 class="home-view__title">Rumba77</h1>
    <p class="home-view__description">Página para mostrar las invitaciones en desarrollo.</p>
    <div class="home-view__links">
      <RouterLink to="/cumpleanos-hombre" class="home-view__link">Cumpleaños Hombre</RouterLink>
      <RouterLink to="/cumpleanos-mujer" class="home-view__link">Cumpleaños Mujer</RouterLink>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900');

.home-view {
  display: grid;
  justify-items: center;
  margin-top: 3rem;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
}

.home-view__title {
  font-weight: 500;
  font-size: 1.125rem;
  margin-bottom: 4px;
}

.home-view__description {
  text-align: center;
  margin-bottom: 32px;
}

.home-view__links {
  display: grid;
  justify-items: center;
  gap: 10px;
}

.home-view__link {
  text-decoration: underline;
}
</style>
