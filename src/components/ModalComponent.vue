<template>
    <div>
        <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" color="surface-variant" text="Show Details" variant="flat"></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Dialog">
                    <v-card-text>
                        hello
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'Modal-item',
    props: {
        modalData: Object,
        isActive: Boolean,
    },
    data() {
        return {

        }
    },
    methods: {
        closeModal() {
            this.$emit('update:isActive', false);
        }
    }
}
</script>

<style lang="scss" scoped></style>