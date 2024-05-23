<template>
    <div class="search_position">
        <v-container>
            <v-row justify="center" class="mt-2">
                <v-text-field prepend-inner-icon="mdi-magnify" class="custom-width" label="Search " variant="solo"
                    single-line>
                </v-text-field>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Result',
    props: [],
    data() {
        return {

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