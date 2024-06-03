<template>
  <v-toolbar class="test">
    <v-toolbar-title>Pokemon Team Builder</v-toolbar-title>
    <v-toolbar-items>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/creation-team">Create your team</v-btn>
      <v-btn to="/team">My team</v-btn>
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

.test {
  background-color: #0a141e;
  color: yellow;
}
</style>
