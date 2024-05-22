<template>
  <NavBar />
  <main>
    <h1>{{ title }}</h1>
    <h2>Pokemon number {{ idPokemon }}</h2>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'InfoPokemonView',

  data() {
    return {
      title: 'Info Pokemon',
      idPokemon: this.$route.params.id
    }
  },

  components: {
    NavBar
  }
}
</script>
