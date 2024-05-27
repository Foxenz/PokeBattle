<template>
  <v-app>
    <SideBar />
    <v-main class="right_pane">
      <Result />
      <CardComponent :pokeData='pokemonList' />
    </v-main>
  </v-app>
</template>

<script>
import Result from "../components/ResultsComponent.vue";
import CardComponent from '../components/CardComponent.vue';
import SideBar from '../components/SiderBarComponent.vue';
import ApiHandler from '../services/ApiHandler.js';



export default {
  name: 'CreationTeamView',
  components: { Result, CardComponent, SideBar },
  data() {
    return {
      title: 'Creation team page',
      pokemonList: [],
    }
  },
  created() {
    this.fetchAllPokemon();
  },
  methods: {
    async fetchAllPokemon() {
      try {
        const allPokemon = await ApiHandler.fetchPokemonList();
        // Store fetch PokemonData in the array pokemonlist
        this.pokemonList = allPokemon;
        console.log(allPokemon);
      } catch (e) {
        console.log('error fetching Pokemon:', error);
      }
    }
  },
}

</script>
