import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@views/Home')
const Rules = () => import('@views/Rules')
const Youtubers = () => import('@views/Youtubers')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/youtubers',
    name: 'Youtubers',
    component: Youtubers
  },
  {
    path: '/regras',
    name: 'Rules',
    component: Rules
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
