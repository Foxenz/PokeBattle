<template>
  <div class="info-pokemon-view">
    <NavBar />
    <v-container>
      <v-container class="d-flex">
        <v-row>
          <!-- IMAGE INFO -->
          <v-col cols="12" md="6" class="bg-blue-grey-darken-2 mb-1">
            <v-card class="ma-2 pa-2 bg-blue-grey-darken-1">
              <v-img
                :src="pokemonInfo.sprites.other['official-artwork'].front_default"
                cover
                class="bg-blue-grey-darken-4"
              >
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
            <v-card
              class="ma-3 pa-2 bg-yellow-accent-4"
              style="display: flex; flex-direction: column; justify-content: space-between"
              :height="378"
            >
              <v-card-title>
                <p class="text-h4 font-weight-bold text-uppercase text-center font">
                  {{ pokemonInfo.name }}
                </p>
              </v-card-title>
              <v-card class="my-1 bg-blue-grey-darken-4">
                <v-card-title>
                  <p class="text-h6 font-weight-bold text-yellow-accent-4">Abilities</p>
                  <p
                    v-for="ability in pokemonInfo.abilities"
                    :key="ability.ability.name"
                    class="text-capitalize text-caption"
                  >
                    {{ ability.ability.name }}
                  </p>
                </v-card-title>
              </v-card>

              <v-card class="my-2 bg-blue-grey-darken-4">
                <v-card-title>
                  <p class="text-h6 font-weight-bold text-yellow-accent-4">Physic</p>
                  <v-sheet class="bg-blue-grey-darken-4">
                    <p class="font-weight-regular text-caption">
                      Height: {{ pokemonInfo.height }} in
                    </p>
                    <p class="font-weight-regular text-caption">
                      Weight: {{ pokemonInfo.weight }} kg
                    </p>
                  </v-sheet>
                </v-card-title>
              </v-card>
              <v-card class="my-2 bg-blue-grey-darken-4">
                <v-card-title>
                  <p class="text-h6 font-weight-bold text-yellow-accent-4">Type</p>
                  <v-card
                    class="type"
                    :class="type.type.name"
                    v-for="type in pokemonInfo.types"
                    :key="type"
                  >
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
                <v-sheet
                  class="bg-blue-grey-darken-4"
                  v-for="stat in statPercentages"
                  :key="stat.name"
                >
                  <p class="text-caption text-capitalize">{{ stat.name }}</p>
                  <v-progress-linear
                    v-model="stat.percentage"
                    color="amber"
                    height="25"
                    class="my-1"
                  >
                    <strong>{{ Math.ceil(stat.baseFigure) }}</strong>
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
import NavBar from '@/components/NavBar.vue'
import ApiHandler from '@/services/ApiHandler'
import PokemonCard from '@/components/PokemonCard.vue'

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
          other: {
            'official-artwork': {
              front_default: ''
            }
          }
        }
      }
    }
  },
  computed: {
    statPercentages() {
      return this.pokemonInfo.stats.map((stat) => {
        return {
          name: stat.stat.name,
          baseFigure: stat.base_stat,
          percentage: (stat.base_stat / 255) * 100
        }
      })
    }
  },
  methods: {
    async fetchPokemonData(idPokemon) {
      try {
        const data = await ApiHandler.fetchPokemon(idPokemon)
        this.pokemonInfo = data
        console.log(this.pokemonInfo)
      } catch (error) {
        console.error('Error fetching Pokemon data:', error)
      }
    }
  },
  created() {
    this.fetchPokemonData(this.idPokemon)
  },
  components: {
    PokemonCard,
    NavBar
  }
}
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
