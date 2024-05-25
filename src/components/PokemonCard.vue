<template>
  <div class="pokemon-card">
    <img :src="pokemon.picture" alt="pokemon" />
    <p>{{ pokemon.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',

  props: {
    pokemon: Object
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
