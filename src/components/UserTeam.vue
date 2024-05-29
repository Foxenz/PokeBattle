<template>
  <div class="teamBox">
    <div
      v-for="(pokemon, index) in team"
      :key="index"
      class="pokemon-slot"
      @drop="onDrop(index, $event)"
      @dragover="allowDrop($event)"
    >
      <img v-if="pokemon" :src="pokemon.sprites.front_default" alt="pokemon" />
    </div>

    <div class="text-center">
      <v-icon color="yellow" icon="mdi-delete" size="large" @click="deleteTeam"></v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserTeam',
  data() {
    return {
      team: [null, null, null, null, null, null]
    }
  },

  methods: {
    allowDrop(event) {
      event.preventDefault()
    },

    onDrop(index, event) {
      this.team[index] = JSON.parse(event.dataTransfer.getData('pokemon'))
    },

    deleteTeam() {
      this.team = [null, null, null, null, null, null]
    }
  }
}
</script>

<style scoped>
.teamBox {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 25px;
  height: 100%;
  background-color: #0a141e;

  .pokemon-slot {
    background-size: contain;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    margin-bottom: 10px;
    border: 1px dashed white;
  }

  .pokemon-slot:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
