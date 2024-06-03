<template>
    <section>
        <h2 class="stat-title">Strongest Pokémon on your team for each stats</h2>
        <div class="stats-cards">
            <div v-for="(pokemon, stat) in statsList" :key="stat" class="stat-card">
                <h3>{{ formatStatName(stat) }}</h3>
                <div v-if="pokemon.name">
                    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="pokemon-image"/>
                    <p style="text-transform: capitalize">{{ pokemon.name }}</p>
                    <p>{{ formatStatName(stat) }}: {{ getStatValue(pokemon, stat) }}</p>
                </div>
                <div v-else>
                    <p>No Pokémon available</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            team: [null, null, null, null, null, null],
            statsList: {
                hp: {},
                attack: {},
                defense: {},
                specialAttack: {},
                specialDefense: {},
                speed: {}
            }
        }
    },

    created() {
        this.loadTeamFromStorage();
    },

    methods: {
        getPokemonForStats() {
            this.team.forEach(pokemon => {
                if (pokemon) {
                    if (this.isObjectEmpty(this.statsList.hp) || this.statsList.hp.stats[0].base_stat < pokemon.stats[0].base_stat) {
                        this.statsList.hp = pokemon;
                    }

                    if (this.isObjectEmpty(this.statsList.attack) || this.statsList.attack.stats[1].base_stat < pokemon.stats[1].base_stat) {
                        this.statsList.attack = pokemon;
                    }

                    if (this.isObjectEmpty(this.statsList.defense) || this.statsList.defense.stats[2].base_stat < pokemon.stats[2].base_stat) {
                        this.statsList.defense = pokemon;
                    }

                    if (this.isObjectEmpty(this.statsList.specialAttack) || this.statsList.specialAttack.stats[3].base_stat < pokemon.stats[3].base_stat) {
                        this.statsList.specialAttack = pokemon;
                    }

                    if (this.isObjectEmpty(this.statsList.specialDefense) || this.statsList.specialDefense.stats[4].base_stat < pokemon.stats[4].base_stat) {
                        this.statsList.specialDefense = pokemon;
                    }

                    if (this.isObjectEmpty(this.statsList.speed) || this.statsList.speed.stats[5].base_stat < pokemon.stats[5].base_stat) {
                        this.statsList.speed = pokemon;
                    }
                }
            });
        },

        isObjectEmpty(obj) {
            return Object.keys(obj).length === 0;
        },

        loadTeamFromStorage() {
            const storedTeam = JSON.parse(localStorage.getItem('userTeam'));
            if (storedTeam) {
                this.team = storedTeam;
                this.getPokemonForStats();
            }
        },

        formatStatName(stat) {
            if (stat.includes('special')) {
                stat = stat.replace('special', 'special ');
            }
            return stat.charAt(0).toUpperCase() + stat.slice(1);
        },

        getStatValue(pokemon, stat) {
            const statIndex = {
                hp: 0,
                attack: 1,
                defense: 2,
                specialAttack: 3,
                specialDefense: 4,
                speed: 5
            };
            return pokemon.stats[statIndex[stat]].base_stat;
        }
    }
}
</script>

<style scoped>
.stat-title {
    width: 100%;
    padding: 30px 0px;
    text-align: center;
    color: #ffffff;
}

.stats-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-around;
}

.stat-card {
    background-color: #1e2a38;
    color: #fff;
    border-radius: 8px;
    padding: 16px;
    width: 200px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.stat-card img {
    width: 100px;
    height: 100px;
    margin-bottom: 16px;
}

.stat-card h3 {
    margin-bottom: 8px;
}

.stat-card p {
    margin: 4px 0;
}
</style>
