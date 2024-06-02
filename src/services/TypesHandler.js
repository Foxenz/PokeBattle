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
        }
    }

    static applyWeakness(type) {
        if (type === 'normal') {
            // Weak to:
            this.types.fighting = this.types.fighting * 2
            // Resistant to:
            this.types.rock = this.types.rock / 2
            this.types.steel = this.types.steel / 2
            // No damage from:
            this.types.ghost = 0
        }
        if (type === 'fire') {
            // Weak to:
            this.types.ground = this.types.ground * 2
            this.types.water = this.types.water * 2
            this.types.rock = this.types.rock * 2
            // Resistant to:
            this.types.bug = this.types.bug / 2
            this.types.steel = this.types.steel / 2
            this.types.fire = this.types.fire / 2
            this.types.grass = this.types.grass / 2
            this.types.fairy = this.types.fairy / 2
            this.types.ice = this.types.ice / 2
        }
        if (type === 'water') {
            // Weak to:
            this.types.electric = this.types.electric * 2
            this.types.grass = this.types.grass * 2
            // Resistant to:
            this.types.fire = this.types.fire / 2
            this.types.water = this.types.water / 2
            this.types.steel = this.types.steel / 2
            this.types.ice = this.types.ice / 2
        }
        if (type === 'grass') {
            // Weak to:
            this.types.fire = this.types.fire * 2
            this.types.bug = this.types.bug * 2
            this.types.flying = this.types.flying * 2
            this.types.ice = this.types.ice * 2
            this.types.poison = this.types.poison * 2
            // Resistant to:
            this.types.ground = this.types.ground / 2
            this.types.electric = this.types.electric / 2
            this.types.grass = this.types.grass / 2
            this.types.water = this.types.water / 2
        }
        if (type === 'electric') {
            // Weak to:
            this.types.ground = this.types.ground * 2
            // Resistant to:
            this.types.flying = this.types.flying / 2
            this.types.steel = this.types.steel / 2
            this.types.electric = this.types.electric / 2
        }
        if (type === 'ice') {
            // Weak to:
            this.types.fire = this.types.fire * 2
            this.types.fighting = this.types.fighting * 2
            this.types.rock = this.types.rock * 2
            this.types.steel = this.types.steel * 2
            // Resistant to:
            this.types.ice = this.types.ice / 2
        }
        if (type === 'fighting') {
            // Weak to:
            this.types.normal = this.types.normal * 2
            // No damage from:
            this.types.ghost = 0
        }
        if (type === 'poison') {
            // Weak to:
            this.types.ground = this.types.ground * 2
            this.types.psychic = this.types.psychic * 2
            // Resistant to:
            this.types.poison = this.types.poison / 2
            this.types.fighting = this.types.fighting / 2
            this.types.bug = this.types.bug / 2
            this.types.grass = this.types.grass / 2
            this.types.fairy = this.types.fairy / 2
        }
        if (type === 'ground') {
            // Weak to:
            this.types.water = this.types.water * 2
            this.types.grass = this.types.grass * 2
            this.types.ice = this.types.ice * 2
            // Resistant to:
            this.types.poison = this.types.poison / 2
            this.types.rock = this.types.rock / 2
            // No damage from:
            this.types.electric = 0
        }
        if (type === 'flying') {
            // Weak to:
            this.types.rock = this.types.rock * 2
            this.types.electric = this.types.electric * 2
            this.types.ice = this.types.ice * 2
            // Resistant to:
            this.types.fighting = this.types.fighting / 2
            this.types.bug = this.types.bug / 2
            this.types.grass = this.types.grass / 2
            // No damage from:
            this.types.ground = 0
        }
        if (type === 'psychic') {
            // Weak to:
            this.types.ghost = this.types.ghost * 2
            this.types.bug = this.types.bug * 2
            this.types.dark = this.types.dark * 2
            // Resistant to:
            this.types.fighting = this.types.fighting / 2
            this.types.psychic = this.types.psychic / 2
        }
        if (type === 'bug') {
            // Weak to:
            this.types.flying = this.types.flying * 2
            this.types.fire = this.types.fire * 2
            this.types.rock = this.types.rock * 2
            // Resistant to:
            this.types.fighting = this.types.fighting / 2
            this.types.grass = this.types.grass / 2
            this.types.ground = this.types.ground / 2
        }
        if (type === 'rock') {
            // Weak to:
            this.types.fighting = this.types.fighting * 2
            this.types.ground = this.types.ground * 2
            this.types.steel = this.types.steel * 2
            this.types.water = this.types.water * 2
            this.types.grass = this.types.grass * 2
            // Resistant to:
            this.types.normal = this.types.normal / 2
            this.types.flying = this.types.flying / 2
            this.types.poison = this.types.poison / 2
            this.types.fire = this.types.fire / 2
        }
        if (type === 'ghost') {
            // Weak to:
            this.types.ghost = this.types.ghost * 2
            this.types.dark = this.types.dark * 2
            // Resistant to:
            this.types.poison = this.types.poison / 2
            this.types.bug = this.types.bug / 2
            // No damage from:
            this.types.normal = 0
            this.types.fighting = 0
        }
        if (type === 'dragon') {
            // Weak to:
            this.types.ice = this.types.ice * 2
            this.types.dragon = this.types.dragon * 2
            this.types.fairy = this.types.fairy * 2
            // Resistant to:
            this.types.fire = this.types.fire / 2
            this.types.water = this.types.water / 2
            this.types.grass = this.types.grass / 2
            this.types.electric = this.types.electric / 2
        }
        if (type === 'dark') {
            // Weak to:
            this.types.fighting = this.types.fighting * 2
            this.types.fairy = this.types.fairy * 2
            this.types.bug = this.types.bug * 2
            // Resistant to:
            this.types.ghost = this.types.ghost / 2
            this.types.dark = this.types.dark / 2
            // No damage from:
            this.types.psychic = 0
        }
        if (type === 'steel') {
            // Weak to:
            this.types.fighting = this.types.fighting * 2
            this.types.ground = this.types.ground * 2
            this.types.fire = this.types.fire * 2
            // Resistant to:
            this.types.normal = this.types.normal / 2
            this.types.flying = this.types.flying / 2
            this.types.rock = this.types.rock / 2
            this.types.bug = this.types.bug / 2
            this.types.steel = this.types.steel / 2
            this.types.grass = this.types.grass / 2
            this.types.psychic = this.types.psychic / 2
            this.types.ice = this.types.ice / 2
            this.types.dragon = this.types.dragon / 2
            this.types.fairy = this.types.fairy / 2
            // No damage from:
            this.types.poison = 0
        }
        if (type === 'fairy') {
            // Weak to:
            this.types.poison = this.types.poison * 2
            this.types.steel = this.types.steel * 2
            // Resistant to:
            this.types.fighting = this.types.fighting / 2
            this.types.bug = this.types.bug / 2
            this.types.dark = this.types.dark / 2
            // No damage from:
            this.types.dragon = 0
        }
    }
}

export default TypesHandler