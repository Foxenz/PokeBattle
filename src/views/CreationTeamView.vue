<template>
  <NavBar />
  <main>
    <div class="fixed-component">
      <UserTeam class="user-team" />
    </div>
    <div class="flexible-component">
      <ListOfAllPokemon class="pokemon-list" />
    </div>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import apiHandler from '@/services/ApiHandler.js'
import UserTeam from '@/components/UserTeam.vue'
import ListOfAllPokemon from '@/components/ListOfAllPokemon.vue'

export default {
  name: 'CreationTeamView',

  data() {
    return {
      title: 'Creation team page',
      pokemons: []
    }
  },

  components: {
    ListOfAllPokemon,
    UserTeam,
    NavBar
  }
}
</script>

<style scoped>
main {
  height: calc(100% - 64px);
  display: flex;
  align-items: stretch;
}

.fixed-component {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.flexible-component {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
