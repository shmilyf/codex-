import { createRouter, createWebHashHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import ChatView from '../views/ChatView.vue'
import AdminView from '../views/AdminView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'landing', component: LandingView },
    { path: '/chat', name: 'chat', component: ChatView },
    { path: '/admin', name: 'admin', component: AdminView }
  ]
})

export default router
