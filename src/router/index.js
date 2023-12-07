import { createRouter, createWebHistory } from 'vue-router'
// import App from '../App.vue'
import Game from '../views/Game.vue'

const routes = [
  {
    path: '/:gameUrl/files',
    name: 'gameOne',
    component: Game
  },
  {
    path: '/:gameUrl/files/:fileUrl',
    name: 'gameTwo',
    component: Game
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
