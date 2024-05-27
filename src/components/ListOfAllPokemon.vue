<template>
  <section>
    <div class="text-center">
      <v-autocomplete
        :items="pokemons"
        item-title="name"
        item-value="id"
        class="text-white"
        clearable
        label="Rechercher un pokémon"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
        no-data-text="Aucun pokémon trouvé"
        @update:modelValue="searchPokemon($event)"
      />
    </div>

    <div class="list-container">
      <div class="pokemon-info" v-for="pokemon in filteredPokemons" :key="pokemon.id">
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
      pokemons: [],
      filteredPokemons: []
    }
  },

  methods: {
    async loadAllPokemons() {
      this.pokemons = await apiHandler.fetchAllPokemonWithPictures()
      this.filteredPokemons = this.pokemons
    },

    searchPokemon(search) {
      if (!search) {
        this.filteredPokemons = this.pokemons
      } else {
        this.filteredPokemons = this.pokemons.filter((pokemon) => {
          return pokemon.name.toLowerCase().includes(search.toLowerCase())
        })
      }
    }
  },

  created() {
    this.loadAllPokemons()
  }
}
</script>

<style scoped lang="scss">
section {
  width: 75%;

  .searchInput {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid white;
    background-color: #0a141e;
    color: white;
  }

  .list-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    position: relative;
    padding: 10px;
    max-height: 675px;
    overflow: auto;
    width: 100%;
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
