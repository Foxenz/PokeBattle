<template>
  <v-toolbar>
    <v-toolbar-title>Créateur d'équipe Pokémon</v-toolbar-title>
    <v-toolbar-items>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/creation-team">Créer une équipe</v-btn>
      <v-btn to="/team">Mon équipe</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
}
</style>
