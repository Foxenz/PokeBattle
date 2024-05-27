<template>
    <div>
        <v-container>
            <v-row no-gutters>
                <v-col v-for="item in pokeData" :key="item" class="my-3 d-flex justify-center">
                    <v-card class="mx-2 mb-2" flat width="280px">
                        <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover>
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                                </div>
                            </template>
                        </v-img>
                        <v-card-title class="text_style">
                            {{ item.name }}
                        </v-card-title>
                        <v-card-text class="caption">
                            {{ item.description || 'No description found' }}
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['pokeData'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.text_style {
    text-transform: capitalize;
}
</style>