<template>
  <NavBar />

  <main class="d-flex flex-column align-center justify-center">
    <h1 class="pokemon-font-solid text-amber-accent-2">
      Bienvenue sur votre créateur d'équipe Pokémon
    </h1>
    <v-carousel class="w-66 mt-5" hide-delimiters>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <v-btn class="mt-5 text-yellow" variant="outlined" to="/creation-team"> Créer une équipe</v-btn>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import apiHandler from '@/services/ApiHandler.js'

export default {
  name: 'PresentationView',

  data() {
    return {
      title: "Créateur d'équipe Pokémon",
      items: [{ src: '' }, { src: '' }, { src: '' }]
    }
  },

  methods: {
    async getRandomPokemonPicture() {
      const randomId = Math.floor(Math.random() * 898) + 1
      return await apiHandler.fetchPokemonPicture(randomId)
    },

    loadPokemonPictures: async function () {
      const promises = [
        await this.getRandomPokemonPicture(),
        await this.getRandomPokemonPicture(),
        await this.getRandomPokemonPicture()
      ]
      const results = await Promise.all(promises)
      this.items = results.map((src) => ({ src }))
    }
  },

  created() {
    this.loadPokemonPictures()
  },

  components: {
    NavBar
  }
}
</script>

<style scoped>
main {
  height: calc(100% - 64px);
}
</style>
