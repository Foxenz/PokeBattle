<template>
    <div>
        <v-container>
            <v-row justify="center" no-gutters>
                <v-col v-for="n in 30" class="my-3 d-flex justify-center">
                    <v-card class="mx-2 mb-2" max-width="250px">
                        <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>
                        <v-card-title>
                            Title Goes Here
                        </v-card-title>
                        <v-card-text class="caption">
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't
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
    data() {
        return {}
    }
}
</script>

<style scoped></style>