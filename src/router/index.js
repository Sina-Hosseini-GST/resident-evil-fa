import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import File from '../views/File.vue'

const routes = [
  {
    path: '/:gameUrl/files',
    name: 'app',
    component: App
  },
  {
    path: '/:gameUrl/files/:fileUrl',
    name: 'file',
    component: File
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
