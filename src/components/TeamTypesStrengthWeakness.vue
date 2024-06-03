<template>
    <section class="team-analysis">
        <div class="team-analysis-inner" v-if="team.length > 0">
            <h2>Weakest Type: <span class="type" :class="weakestTypeCalculator">{{ capitalize(weakestTypeCalculator) }}</span> X {{ typesHandler.types[weakestTypeCalculator] }}</h2>

            <h2>Strongest Type: <span class="type" :class="strongestTypeCalculator">{{ capitalize(strongestTypeCalculator) }}</span>  X {{ typesHandler.types[strongestTypeCalculator] }}</h2>
        </div>
    </section>
</template>

<script>

import TypesHandler from '@/services/TypesHandler.js'

export default {
    data() {
        return {
            team: [],
            typesHandler: new TypesHandler(),
        };
    },

    computed: {
        weakestTypeCalculator() {
            let weakest = null;
            let highestMultiplier = 0;
            for (const type in this.typesHandler.types) {
                if (this.typesHandler.types[type] > highestMultiplier) {
                    highestMultiplier = this.typesHandler.types[type];
                    weakest = type;
                }
            }
            return weakest;
        },

        strongestTypeCalculator() {
            let strongest = null;
            let lowestMultiplier = Infinity;
            for (const type in this.typesHandler.types) {
                if (this.typesHandler.types[type] < lowestMultiplier && this.typesHandler.types[type] > 0) {
                    lowestMultiplier = this.typesHandler.types[type];
                    strongest = type;
                }
            }
            return strongest;
        }
    },

    created() {
        this.loadTeamFromStorage();
    },

    methods: {
        loadTeamFromStorage() {
            const storedTeam = JSON.parse(localStorage.getItem('userTeam')) || [];
            this.team = storedTeam;
            this.calculateWeaknesses();
        },

        calculateWeaknesses() {
            this.team.forEach(pokemon => {
                if (pokemon && pokemon.types) {
                    pokemon.types.forEach(typeObj => {
                        this.typesHandler.applyWeakness(typeObj.type.name);
                    });
                }
            });
        },

        capitalize(str) {
            if (str.includes('special')) {
                str = str.replace('special', 'special ');
            }
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }
};
</script>

<style scoped>
.team-analysis {
    width: 100%;
    padding: 20px;
    margin: 50px 0px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #1e2a38;
    color: #fff;
}

.team-analysis-inner {
    flex: 0 0 auto;
    display: flex;
    justify-content: space-around;
    gap: 20px;
}

.team-analysis h2 {
    margin: 0;
    font-size: 1.5em;
}

.team-analysis p {
    margin: 0;
    font-size: 1em;
}

.type {
    text-decoration: none;
    padding: 0.1rem 0;
    border-radius: 6px;
    width: 5rem;
    margin-left: 0.25rem;
    text-transform: capitalize;
    border-style: solid;
    border-color: #f0efe7;
    border-width: 2px;
    color: #f0efe7;
    opacity: 1;
    transition: 0.3s;
    text-align: center;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .team-analysis-inner {
        flex-direction: column;
        align-items: center;
    }

    .team-analysis h2 {
        font-size: 1.2em;
    }
}
</style>
