<template>
  <v-app>
    <SideBar />
    <v-main class="right_pane">
      <Result>
        <v-container class="search_position">
          <v-row justify="center" class="mt-2">
            <v-text-field prepend-inner-icon="mdi-magnify" class="custom-width" label="Search " variant="solo"
              single-line v-model="text">
            </v-text-field>
          </v-row>
        </v-container>
      </Result>
      <CardComponent :pokeData='filteredSearch' />
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
      text: '',
    }
  },
  created() {
    this.fetchAllPokemon();
  },
  computed: {
    filteredSearch() {
      if (this.text) {
        return this.pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(this.text.toLowerCase()));
      }
      return this.pokemonList;
    }
  },
  methods: {
    async fetchAllPokemon() {
      try {
        const allPokemon = await ApiHandler.fetchPokemonList();
        // Store fetch PokemonData in the array pokemonlist
        this.pokemonList = allPokemon;
        console.log(this.pokemonList);
      } catch (e) {
        console.log('error fetching Pokemon:', error);
      }
    }
  },
}

</script>
<style scoped>
.search_position {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}

.custom-width {
  max-width: 500px;
}
</style>