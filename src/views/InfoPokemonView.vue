<template>
  <div class="info-pokemon-view">
    <NavBar />
    <v-container>
      <v-container class="d-flex">
        <v-row>
          <!-- IMAGE INFO -->
          <v-col cols="12" md="6" class="bg-blue-grey-darken-2 mb-1">
            <v-card class="ma-2 pa-2 bg-blue-grey-darken-1">
              <v-img :src="pokemonInfo.sprites.front_default" :height="395" cover class="bg-blue-grey-darken-4">
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                  </div>
                </template>
              </v-img>
            </v-card>
          </v-col>
          <!-- Attributes INFO -->
          <v-col cols="12" md="6" class="bg-blue-grey-darken-2 mb-1">
            <v-card class="ma-1 pa-2 bg-yellow-accent-4">
              <v-card-title>
                <p class="text-h4 font-weight-bold text-uppercase text-center font">{{ pokemonInfo.name }}</p>
              </v-card-title>
              <v-card class="my-1 bg-blue-grey-darken-4">
                <v-card-title>
                  <p class="text-h6 font-weight-bold text-yellow-accent-4">Abilities</p>
                  <p v-for="ability in pokemonInfo.abilities" :key="ability.ability.name"
                    class="text-capitalize text-subtitle-1">
                    {{
                      ability.ability.name }}</p>
                </v-card-title>
              </v-card>

              <v-card class="my-2 bg-blue-grey-darken-4">
                <v-card-title>
                  <p class="text-h6 font-weight-bold text-yellow-accent-4">Physic</p>
                  <v-sheet class="bg-blue-grey-darken-4">
                    <p class="font-weight-regular text-subtitle-1">Height: {{ pokemonInfo.height }} in</p>
                    <p class="font-weight-regular text-subtitle-1">Weight: {{ pokemonInfo.weight }} kg</p>
                  </v-sheet>
                </v-card-title>
              </v-card>
              <v-card class="my-2 bg-blue-grey-darken-4">
                <v-card-title>
                  <p class="text-h6 font-weight-bold text-yellow-accent-4">Type</p>
                  <v-card class="type" :class="type.type.name" v-for="type in pokemonInfo.types" :key="type">
                    {{ type.type.name }}
                  </v-card>
                </v-card-title>
              </v-card>
            </v-card>
          </v-col>
          <!-- BASE STATUS INFO -->
          <v-col cols="12" class="bg-blue-grey-darken-2">
            <v-card class="my-2 bg-blue-grey-darken-4">
              <v-card-title>
                <p class="text-h6 text-center font-weight-bold">BASE STATS</p>
                <v-sheet class="bg-blue-grey-darken-4" v-for="stat in pokemonInfo.stats" :key="stat.stat.name">
                  <p class="text-caption text-capitalize"> {{ stat.stat.name }}</p>
                  <v-progress-linear v-model="stat.base_stat" color="amber" height="25" class="my-1">
                    <strong>{{ Math.ceil(stat.base_stat) }}%</strong>
                  </v-progress-linear>
                </v-sheet>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>



    </v-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ApiHandler from '@/services/ApiHandler';

export default {
  name: 'InfoPokemonView',
  data() {
    return {
      idPokemon: this.$route.params.id,
      pokemonInfo: {
        name: '',
        abilities: [
          {
            ability: {
              name: ''
            }
          }
        ],
        height: null,
        weight: null,
        stats: [
          {
            base_stat: null,
            stat: {
              name: ''
            }
          }
        ],
        sprites: {
          front_default: ''
        }
      }
    };
  },
  methods: {
    async fetchPokemonData(idPokemon) {
      try {
        const data = await ApiHandler.fetchPokemon(idPokemon);
        this.pokemonInfo = data;
        console.log(this.pokemonInfo);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    }
  },
  created() {
    this.fetchPokemonData(this.idPokemon);
  },
  components: {
    NavBar
  }
};
</script>

<style scoped>
.v-container {
  max-width: 900px !important;
}

.v-row {
  margin: 0px !important;
}

.transparent-card {
  background-color: transparent !important;
  box-shadow: none;
}

.font {
  font-family: 'Pokemon-Hollow', sans-serif;
}
</style>