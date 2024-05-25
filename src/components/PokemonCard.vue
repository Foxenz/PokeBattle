<template>
  <div class="pokemon-card" draggable="true" @dragstart="onDragStart">
    <img :src="pokemon.picture" alt="pokemon" />
    <p>{{ pokemon.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: {
    pokemon: Object
  },
  methods: {
    onDragStart(event) {
      event.dataTransfer.setData('pokemon', JSON.stringify(this.pokemon))
    }
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
