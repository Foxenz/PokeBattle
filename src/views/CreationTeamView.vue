<template>
  <main>
    <div class="container">
      <div class="left_pane">

      </div>
      <div class="right_pane">
        <div class="search">
          <Result />
        </div>
        <div class="card">
          <CardComponent />
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import Result from "../components/ResultsComponent.vue";
import CardComponent from '../components/CardComponent.vue';
export default {
  name: 'CreationTeamView',
  components: { Result, CardComponent },
  data() {
    return {
      title: 'Creation team page'
    }
  }
}
</script>
