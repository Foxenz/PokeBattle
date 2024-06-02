<template>
  <NavBar />
  <main>
    <div class="fixed-component">
      <UserTeam class="user-team" />
    </div>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import UserTeam from '@/components/UserTeam.vue'
export default {
  name: 'TeamView',

  data() {
    return {
      title: 'Team page'
    }
  },

  components: {
    UserTeam,
    NavBar
  }
}
</script>
