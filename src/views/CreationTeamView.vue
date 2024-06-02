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
        <v-container>
          <v-col class="justify-center">
            <!-- Display error message if fetchError is not empty -->
            <v-alert v-if="errorMessage" type="error" dismissible class="text-center">
              {{ errorMessage }}
            </v-alert>
          </v-col>
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
      pokemonData: [],
      images: [],
      text: '',
      errorMessage: ''
    }
  },
  created() {
    this.fetchPokemonList();
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
    async fetchPokemonList() {
      try {
        const PokemonListApi = await ApiHandler.fetchPokemonList();
        // Fetch images for each Pokémon
        const pokemonWithImages = await Promise.all(PokemonListApi.map(async (pokemon) => {
          const imageUrl = await ApiHandler.fetchPokemonPicture(pokemon.name);
          return { ...pokemon, imageUrl };
        }));
        this.pokemonList = pokemonWithImages;
        console.log(this.pokemonList);
      } catch (error) {
        this.errorMessage = 'Oh Oh Something went wrong please try again later!'
      }
    },
    async fetchAllPokemon(pokemonName) {
      const allPokemon = await ApiHandler.fetchPokemon(pokemonName);
      if (allPokemon) {
        this.pokemonData = allPokemon;
        console.log(this.pokemonData);
      }
    },

    handleSearch(searchText) {
      this.text = searchText;
    }
  }
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