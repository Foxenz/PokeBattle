<template>
  <v-app>
    <v-container class="container">
      <SideBar />
      <v-main class="right_pane">
        <Result />
        <CardComponent />
      </v-main>
    </v-container>

  </v-app>
</template>

<script>
import Result from "../components/ResultsComponent.vue";
import CardComponent from '../components/CardComponent.vue';
import SideBar from '../components/SiderBarComponent.vue'
export default {
  name: 'CreationTeamView',
  components: { Result, CardComponent, SideBar },
  data() {
    return {
      title: 'Creation team page'
    }
  }
}
</script>
