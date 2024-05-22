<template>
  <NavBar />
  <main>
    <h1>{{ title }}</h1>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'TeamView',

  data() {
    return {
      title: 'Team page'
    }
  },

  components: {
    NavBar
  }
}
</script>
