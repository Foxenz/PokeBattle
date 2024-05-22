<template>
  <NavBar />
  <main>
    <h1>{{ title }}</h1>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'CreationTeamView',

  data() {
    return {
      title: 'Creation team page'
    }
  },

  components: {
    NavBar
  }
}
</script>
