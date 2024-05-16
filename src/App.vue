<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Presentation page</RouterLink>
        <RouterLink to="/creation-team">Creation team</RouterLink>
        <RouterLink to="/team">Team</RouterLink>
        <RouterLink to="/info-pokemon/1">Info pokemon</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
}
</style>
