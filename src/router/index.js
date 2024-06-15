import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import TicketView from '../views/TicketView.vue'
import TrialView from '../views/TrialView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
  

    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: TicketView
    },
    {
      path: '/trial',
      name: 'trial',
      component: TrialView
    },
  ]
})

export default router
