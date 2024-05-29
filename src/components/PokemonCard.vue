<template>
  <div class="pokemon-card" draggable="true" @dragstart="onDragStart">
    <img :src="pokemonCard.picture" alt="pokemon" />
    <p>{{ pokemonCard.name }}</p>
  </div>
</template>

<script>
import ApiHandler from '@/services/ApiHandler.js'

export default {
  name: 'PokemonCard',

  data() {
    return {
      pokemonCard: {
        name: '',
        picture: ''
      },
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
        const data = await ApiHandler.fetchPokemon(pokemonName);
        if (data) {
          this.pokemonCard.name = data.name;
          this.pokemonCard.picture = data.sprites.front_default;
        }
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    }
  },
  created() {
    this.fetchPokemonData(this.pokemon.name);
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
