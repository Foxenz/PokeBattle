import { createRouter, createWebHistory } from 'vue-router'

import PresentationView from '@/views/PresentationView.vue'
import CreationTeamView from '@/views/CreationTeamView.vue'
import TeamView from '@/views/TeamView.vue'
import InfoPokemonView from '@/views/InfoPokemonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'presentation',
      component: PresentationView
    },
    {
      path: '/creation-team',
      name: 'creation-team',
      component: CreationTeamView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    {
      path: '/info-pokemon/:id',
      name: 'info-pokemon',
      component: InfoPokemonView
    }
  ]
})

export default router
