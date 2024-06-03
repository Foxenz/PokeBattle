<template>
    <NavBar />
    <main>
        <div class="fixed-component">
            <UserTeam class="user-team" />
        </div>
        <div class="main-component">
            <TeamsBestStats />
            <TeamTypesStrengthWeakness />
        </div>
    </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import UserTeam from '@/components/UserTeam.vue'
import TeamsBestStats from '@/components/TeamsBestStats.vue'
import TeamTypesStrengthWeakness from '@/components/TeamTypesStrengthWeakness.vue'

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
        TeamsBestStats,
        TeamTypesStrengthWeakness
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

.main-component {
    flex: 0 0 auto;
    flex-direction: column;
    display: flex;
    align-items: center;
    margin: 0 auto;
}
</style>
