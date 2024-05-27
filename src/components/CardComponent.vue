<template>
    <div>
        <v-container>
            <v-row no-gutters class="d-flex justify-center">
                <v-col v-for="item in pokeData" :key="item" class="my-3 d-flex justify-center">
                    <v-card class="mx-2 mb-2 pointer" elevation="3" width="280px">
                        <v-img height="200px" :src="item.imageUrl" contain>
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
    name: 'Card-item',
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



.v-card {
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

.v-card:hover {
    transform: scale(1.05);
    box-shadow: 3px -1px 26px 4px #9E9D24 !important;

}
</style>