<template>
  <section>
    <div class="text-center d-flex flex-column align-center">
      <v-autocomplete
        v-model="searchQuery"
        :items="searchResults"
        item-title="name"
        item-value="id"
        class="text-white w-50"
        clearable
        label="Rechercher un pokémon"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
        no-data-text="Aucun pokémon trouvé"
        @input="updateSearchResults"
        @update:modelValue="searchPokemon($event)"
      />
    </div>

    <div ref="listContainer" class="list-container">
      <div class="pokemon-info" v-for="pokemon in filteredPokemons" :key="pokemon.name">
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
      filteredPokemons: [],
      searchResults: [],
      searchQuery: '', // This is used for v-model binding
      offset: 0,
      limit: 24,
      loading: false
    }
  },

  methods: {
    async loadAllPokemons() {
      this.loading = true
      const data = await apiHandler.fetchPokemonList(this.offset, this.limit)
      if (data) {
        this.pokemons = [...this.pokemons, ...data]
        this.filteredPokemons = this.pokemons
      }
      this.loading = false
    },

    async searchPokemon(search) {
      if (!search) {
        this.filteredPokemons = this.pokemons
      } else {
        const searchResults = await apiHandler.searchPokemonByNamePrefix(search)
        this.filteredPokemons = searchResults || []
      }
    },

    async updateSearchResults(search) {
      if (search.data) {
        const searchResults = await apiHandler.searchPokemonByNamePrefix(search.data)
        this.searchResults = searchResults || []
      } else {
        this.searchResults = this.pokemons
      }
    },

    async nextPage() {
      if (this.loading) return
      this.offset += this.limit
      await this.loadAllPokemons()
    },

    async prevPage() {
      if (this.offset >= this.limit) {
        this.offset -= this.limit
        await this.loadAllPokemons()
      }
    },

    handleScroll() {
      const container = this.$refs.listContainer
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        this.nextPage()
      }
    }
  },

  async created() {
    await this.loadAllPokemons()
    this.searchResults = this.pokemons
  },

  mounted() {
    this.$refs.listContainer.addEventListener('scroll', this.handleScroll)
  },

  beforeUnmount() {
    this.$refs.listContainer.removeEventListener('scroll', this.handleScroll)
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

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    button {
      background-color: #0a141e;
      border: 1px solid white;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      margin: 0 10px;
      padding: 10px 20px;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
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
