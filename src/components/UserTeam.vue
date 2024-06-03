<template>
    <div class="teamBox" @drop="allowDropOutside" @dragover="allowDrop($event)">
        <div
            v-for="(pokemon, index) in team"
            :key="index"
            class="pokemon-slot"
            @drop="onDrop(index, $event)"
            @dragover="allowDrop($event)"
            @dragstart="onDragStart(index, $event)"
            draggable="true"
        >
            <img v-if="pokemon" :src="pokemon.sprites.front_default" alt="pokemon" />
            <button v-if="pokemon" class="delete-btn" @click="deletePokemon(index)">X</button>
        </div>

        <div class="text-center">
            <v-icon color="yellow" icon="mdi-delete" size="large" @click="deleteTeam"></v-icon>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserTeam',
    data() {
        return {
            team: [null, null, null, null, null, null],
            draggedPokemonIndex: null,
        }
    },

    created() {
        this.loadTeamFromStorage();
    },

    methods: {
        allowDrop(event) {
            event.preventDefault();
        },

        allowDropOutside(event) {
            event.preventDefault();
            if (this.draggedPokemonIndex !== null) {
                this.deletePokemon();
                this.draggedPokemonIndex = null;
            }
        },

        onDragStart(index, event) {
            this.draggedPokemonIndex = index;
        },

        onDrop(index, event) {
            const pokemon = JSON.parse(event.dataTransfer.getData('pokemon'));
            this.team.splice(index, 1, pokemon);
            this.saveTeamToStorage();
            this.draggedPokemonIndex = null;
        },

        deleteTeam() {
            this.team = [null, null, null, null, null, null];
            localStorage.removeItem('userTeam');
        },

        deletePokemon(index) {
            this.team.splice(index, 1, null);
            this.saveTeamToStorage();
        },

        saveTeamToStorage() {
            localStorage.setItem('userTeam', JSON.stringify(this.team));
        },

        loadTeamFromStorage() {
            const storedTeam = JSON.parse(localStorage.getItem('userTeam'));
            if (storedTeam) {
                this.team = storedTeam;
            }
        }
    }
}
</script>

<style scoped>
.teamBox {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 25px;
    height: 100%;
    background-color: #0a141e;
    border: 2px dashed transparent;
}

.pokemon-slot {
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    margin-bottom: 10px;
    border: 1px dashed white;
}

.pokemon-slot:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
}

img {
    width: 100%;
    height: 100%;
}

.delete-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    background: red;
    border: none;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: none;
}

.pokemon-slot:hover .delete-btn {
    display: block;
}

.text-center {
    margin-top: 20px;
}
</style>
