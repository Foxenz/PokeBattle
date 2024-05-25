<script>
export default {
  name: 'UserTeam'
}
</script>

<template>
  <div class="teamBox">
    <div class="pokemon1"></div>
    <hr />
    <div class="pokemon2"></div>
    <hr />
    <div class="pokemon3"></div>
    <hr />
    <div class="pokemon4"></div>
    <hr />
    <div class="pokemon5"></div>
    <hr />
    <div class="pokemon6"></div>
  </div>
</template>

<style scoped>
.teamBox {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px solid white;
  padding: 25px;
  height: 100%;
}

.pokemon1,
.pokemon2,
.pokemon3,
.pokemon4,
.pokemon5,
.pokemon6 {
  background-image: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
}

.pokemon1:hover,
.pokemon2:hover,
.pokemon3:hover,
.pokemon4:hover,
.pokemon5:hover,
.pokemon6:hover {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
</style>
