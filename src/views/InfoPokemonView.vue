<template>
  <div class="info-pokemon-view">
    <NavBar />
    <v-container>
      <v-container class="d-flex">
        <v-row>
          <!-- IMAGE INFO -->
          <v-col cols="12" md="6" class="bg-blue-grey-darken-2 mb-1">
            <v-sheet class="ma-2 pa-2">
              <v-img :src="pokemonInfo.sprites.front_default" :height="395" cover></v-img>
            </v-sheet>
          </v-col>
          <!-- Attributes INFO -->
          <v-col cols="12" md="6" class="bg-blue-grey-darken-2 mb-1">
            <v-sheet class="ma-1 pa-2 bg-yellow-accent-4">
              <v-card-title>
                <p class="text-h4 font-weight-bold text-uppercase text-center">{{ pokemonInfo.name }}</p>
              </v-card-title>
              <v-card class="my-1">
                <v-card-title>
                  <p class="text-h6 font-weight-bold">Ability</p>
                  <p v-for="ability in pokemonInfo.abilities" :key="ability.ability.name" class="text-capitalize">{{
                    ability.ability.name }}</p>
                </v-card-title>
              </v-card>

              <v-card class="my-2">
                <v-card-title>
                  <p class="text-h6 font-weight-bold">Physic</p>
                  <v-sheet>
                    <p class="font-weight-regular">Height: {{ pokemonInfo.height }} in</p>
                    <p class="font-weight-regular">Weight: {{ pokemonInfo.weight }} kg</p>
                  </v-sheet>
                </v-card-title>
              </v-card>
              <v-sheet class="my-2">
                <v-card-title>
                  <p class="text-h6 font-weight-bold">Type</p>
                  <v-sheet class="type" :class="type.type.name" v-for="type in pokemonInfo.types" :key="type">
                    {{ type.type.name }}
                  </v-sheet>
                </v-card-title>
              </v-sheet>
            </v-sheet>
          </v-col>
          <!-- BASE STATUS INFO -->
          <v-col cols="12" class="bg-blue-grey-darken-2">
            <v-sheet class="my-2 ">
              <v-card-title>
                <p class="text-h6 text-center font-weight-bold">BASE STATS</p>
                <v-sheet v-for="stat in pokemonInfo.stats" :key="stat.stat.name">
                  <p class="text-caption text-capitalize"> {{ stat.stat.name }}</p>
                  <v-progress-linear v-model="stat.base_stat" color="amber" height="25" class="my-1">
                    <strong>{{ Math.ceil(stat.base_stat) }}%</strong>
                  </v-progress-linear>
                </v-sheet>
              </v-card-title>
            </v-sheet>
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
</style>