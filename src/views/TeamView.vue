<template>
    <NavBar />
    <main>
        <div class="fixed-component">
            <UserTeam class="user-team" />
        </div>
        <div class="flexible-component">
            <TeamsBestStats />
        </div>
    </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import UserTeam from '@/components/UserTeam.vue'
import TeamsBestStats from '@/components/TeamsBestStats.vue'

export default {
    name: 'TeamView',

    data() {
        return {
            title: 'Team page'
        }
    },

    components: {
        UserTeam,
        NavBar,
        TeamsBestStats
    }
}
</script>

<style scoped>
main {
    height: calc(100% - 64px);
    display: flex;
    align-items: stretch;
}

.fixed-component {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
}

.flexible-component {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
