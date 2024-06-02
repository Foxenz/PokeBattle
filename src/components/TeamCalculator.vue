<template>
  <section>

  </section>
</template>

<script>
export default {
  data() {
    return {
      teamList: [],
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

  methods: {
    getTeamList() {
      this.teamList = JSON.parse(localStorage.getItem(""));
    },
    getPokemonForStats() {
      this.teamList.map(pokemon => {
        if(this.isObjectEmpty(this.statsList.hp) || this.statsList.hp.stats[0].base_stat < pokemon.stats[0].base_stat)
          this.statsList.hp = pokemon;

        if(this.isObjectEmpty(this.statsList.attack) || this.statsList.attack.stats[1].base_stat < pokemon.stats[1].base_stat)
          this.statsList.attack = pokemon;

        if(this.isObjectEmpty(this.statsList.defense) || this.statsList.defense.stats[2].base_stat < pokemon.stats[2].base_stat)
          this.statsList.defense = pokemon;

        if(this.isObjectEmpty(this.statsList.specialAttack) || this.statsList.specialAttack.stats[3].base_stat < pokemon.stats[3].base_stat)
          this.statsList.specialAttack = pokemon;

        if(this.isObjectEmpty(this.statsList.specialDefense) || this.statsList.specialDefense.stats[4].base_stat < pokemon.stats[4].base_stat)
          this.statsList.specialDefense = pokemon;

        if(this.isObjectEmpty(this.statsList.speed) || this.statsList.speed.stats[5].base_stat < pokemon.stats[5].base_stat)
          this.statsList.speed = pokemon;
      })
    },
    isObjectEmpty(obj) {
      return Object.keys(obj).length === 0;
    }
  }
}
</script>

<style>

</style>