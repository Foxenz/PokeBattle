<template>
    <v-app-bar-nav-icon variant="text" @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" class="left_pane py-4">
        <v-container class="d-flex align-center flex-column">
            <v-container>
                <v-row dense>
                    <v-col cols="12">
                        <v-card color="#385F73">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover height="100px">
                                <template v-slot:placeholder>
                                    <div class="d-flex align-center justify-center fill-height">
                                        <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                                    </div>
                                </template>
                            </v-img>
                            <v-card-title class="caption">
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row dense>
                    <v-col cols="12">
                        <v-card color="#385F73">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover height="100px">
                            </v-img>
                            <v-card-title>
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row dense>
                    <v-col cols="12">
                        <v-card color="#385F73">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover height="100px">
                            </v-img>
                            <v-card-title>
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row dense>
                    <v-col cols="12">
                        <v-card color="#385F73">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover height="100px">
                            </v-img>
                            <v-card-title>
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <v-card-actions class="my-4">
                <v-btn rounded="lg" variant="outlined" color="grey-darken">Button</v-btn>
            </v-card-actions>
        </v-container>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'SideBar',
    props: [],
    data: () => ({
        drawer: false,
    })
}
</script>
