<template>
    <div>
        <v-container>
            <v-col>
                <v-row>
                    <v-text-field append-inner-icon="mdi-magnify" placeholder="search"></v-text-field>
                </v-row>
            </v-col>
        </v-container>

    </div>
</template>

<script>
export default {
    name: 'Result',
    props: ['data'],
    data() {
        return {

        }
    }
}
</script>

<style scoped></style>