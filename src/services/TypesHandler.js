class TypesHandler {
    constructor() {
        this.types = {
            normal: 1,
            fire: 1,
            water: 1,
            grass: 1,
            electric: 1,
            ice: 1,
            fighting: 1,
            poison: 1,
            ground: 1,
            flying: 1,
            psychic: 1,
            bug: 1,
            rock: 1,
            ghost: 1,
            dragon: 1,
            dark: 1,
            steel: 1,
            fairy: 1
        };
    }

    applyWeakness(type) {
        const typeEffects = {
            normal: { weak: ['fighting'], resist: ['rock', 'steel'], immune: ['ghost'] },
            fire: { weak: ['ground', 'water', 'rock'], resist: ['bug', 'steel', 'fire', 'grass', 'fairy', 'ice'] },
            water: { weak: ['electric', 'grass'], resist: ['fire', 'water', 'steel', 'ice'] },
            grass: { weak: ['fire', 'bug', 'flying', 'ice', 'poison'], resist: ['ground', 'electric', 'grass', 'water'] },
            electric: { weak: ['ground'], resist: ['flying', 'steel', 'electric'] },
            ice: { weak: ['fire', 'fighting', 'rock', 'steel'], resist: ['ice'] },
            fighting: { weak: ['flying', 'psychic', 'fairy'], resist: ['rock', 'bug', 'dark'], immune: ['ghost'] },
            poison: { weak: ['ground', 'psychic'], resist: ['poison', 'fighting', 'bug', 'grass', 'fairy'] },
            ground: { weak: ['water', 'grass', 'ice'], resist: ['poison', 'rock'], immune: ['electric'] },
            flying: { weak: ['rock', 'electric', 'ice'], resist: ['fighting', 'bug', 'grass'], immune: ['ground'] },
            psychic: { weak: ['bug', 'ghost', 'dark'], resist: ['fighting', 'psychic'] },
            bug: { weak: ['flying', 'fire', 'rock'], resist: ['fighting', 'grass', 'ground'] },
            rock: { weak: ['fighting', 'ground', 'steel', 'water', 'grass'], resist: ['normal', 'flying', 'poison', 'fire'] },
            ghost: { weak: ['ghost', 'dark'], resist: ['poison', 'bug'], immune: ['normal', 'fighting'] },
            dragon: { weak: ['ice', 'dragon', 'fairy'], resist: ['fire', 'water', 'grass', 'electric'] },
            dark: { weak: ['fighting', 'bug', 'fairy'], resist: ['ghost', 'dark'], immune: ['psychic'] },
            steel: { weak: ['fighting', 'ground', 'fire'], resist: ['normal', 'flying', 'rock', 'bug', 'steel', 'grass', 'psychic', 'ice', 'dragon', 'fairy'], immune: ['poison'] },
            fairy: { weak: ['poison', 'steel'], resist: ['fighting', 'bug', 'dark'], immune: ['dragon'] }
        };

        if (typeEffects[type]) {
            typeEffects[type].weak.forEach(t => this.types[t] *= 2);
            typeEffects[type].resist.forEach(t => this.types[t] /= 2);
            if (typeEffects[type].immune) {
                typeEffects[type].immune.forEach(t => this.types[t] = 0);
            }
        }
    }
}

export default TypesHandler;
