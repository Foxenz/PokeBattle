<template>
  <div v-if="!loading" class="pokemon-card" draggable="true" @dragstart="onDragStart">
    <div class="w-100 text-right">
      <v-btn :to="'/info-pokemon/' + pokemonCard.id" icon="mdi-information" variant="plain"></v-btn>
    </div>
    <img :src="pokemonCard.sprites.front_default" alt="pokemon" />
    <p class="text-capitalize mb-3">{{ pokemonCard.name }}</p>
    <div class="types w-100 d-flex justify-space-around">
      <p class="type" :class="type.type.name" v-for="type in pokemonCard.types" :key="type">
        {{ type.type.name }}
      </p>
    </div>
  </div>
  <v-skeleton-loader v-else class="mr-5 mb-5" style="background-color: transparent" height="200" />
</template>

<script>
import ApiHandler from '@/services/ApiHandler.js'

export default {
  name: 'PokemonCard',

  data() {
    return {
      pokemonCard: {
        name: '',
        sprites: {
          front_default: ''
        }
      },
      loading: true
    }
  },

  props: {
    pokemon: Object
  },

  methods: {
    onDragStart(event) {
      event.dataTransfer.setData('pokemon', JSON.stringify(this.pokemonCard))
    },

    async fetchPokemonData(pokemonName) {
      try {
        const data = await ApiHandler.fetchPokemon(pokemonName)
        if (data) {
          this.pokemonCard = data
          this.loading = false
        }
      } catch (error) {
        this.loading = false
      }
    }
  },

  created() {
    this.fetchPokemonData(this.pokemon.name)
  }
}
</script>

<style scoped>
.pokemon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  padding: 10px;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
}

.pokemon-card:hover {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
</style>
