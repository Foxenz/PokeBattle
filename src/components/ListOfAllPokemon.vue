<template>
  <section>
    <div class="list-container">
      <div class="pokemon-info" v-for="pokemon in pokemons" :key="pokemon.id">
        <PokemonCard :pokemon="pokemon" />
      </div>
    </div>
  </section>
</template>

<script>
import apiHandler from '@/services/ApiHandler.js'
import PokemonCard from '@/components/PokemonCard.vue'

export default {
  name: 'ListOfAllPokemon',
  components: { PokemonCard },

  data() {
    return {
      pokemons: []
    }
  },

  methods: {
    async loadAllPokemons() {
      this.pokemons = await apiHandler.fetchAllPokemonWithPictures()
    }
  },

  created() {
    this.loadAllPokemons()
  }
}
</script>

<style scoped lang="scss">
section {
  max-height: 750px;
  width: 75%;
  overflow: auto;
  color: yellow;

  .list-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    position: relative;
    padding: 10px;
  }
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
  cursor: pointer;
}
</style>
