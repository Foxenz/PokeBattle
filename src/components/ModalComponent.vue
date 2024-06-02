<template>
    <!-- The dialog component that will appear when is_active is true -->
    <v-dialog v-model="is_active" max-width="500">
        <!-- The card component inside the dialog -->
        <v-card>
            <!-- Card title displaying the name of the item -->
            <v-container>
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-text>
                    <!-- Image of the item -->
                    <v-img :src="item.imageUrl" contain height="100px">
                        <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                            </div>
                        </template>
                    </v-img>
                    <!-- Description of the item, or a default message if no description is provided -->
                    <p>{{ item.description || 'No description found' }}</p>
                </v-card-text>
            </v-container>
            <v-container>
                Abilities goes here with flex
            </v-container>
            <!-- Card content -->

            <!-- Actions section of the card -->
            <v-card-actions>
                <!-- Spacer to push the button to the right -->
                <v-spacer></v-spacer>
                <!-- Close button -->
                <v-btn text @click="closeModal">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'ModalComponent',
    props: {
        // The item to display in the modal, passed as a prop
        item: Object,
        // The initial active state of the modal, passed as a prop
        isActive: Boolean,
    },
    data() {
        return {
            // Local data property to track the active state of the modal
            is_active: this.isActive,
        };
    },
    watch: {
        // Watcher to update local is_active when isActive prop changes
        isActive(val) {
            this.is_active = val;
        },
        // Watcher to emit 'close' event when local is_active is set to false
        is_active(val) {
            if (!val) {
                this.$emit('close');
            }
        },
    },
    methods: {
        // Method to close the modal by setting is_active to false
        closeModal() {
            this.is_active = false;
        },
    },
};
</script>

<style scoped></style>
