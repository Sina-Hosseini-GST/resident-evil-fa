import { createRouter, createWebHistory } from 'vue-router'
import Game from '../views/Game.vue'

const routes = [
  {
    path: '/:gameUrl/files',
    name: 'game',
    component: Game
  },
  {
    path: '/:gameUrl/files/:fileUrl',
    name: 'file',
    component: Game
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
