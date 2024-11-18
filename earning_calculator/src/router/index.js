import { createRouter, createWebHistory } from 'vue-router'
import Today from '../views/Today.vue'
import LastWeek from '../views/LastWeek.vue'
import AllTime from '../views/AllTime.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Today,
    },
    {
      path: '/lastweek',
      name: 'lastweek',
      component: LastWeek,
    },
    {
      path: '/alltime',
      name: 'alltime',
      component: AllTime,
    },
  ],
})

export default router
