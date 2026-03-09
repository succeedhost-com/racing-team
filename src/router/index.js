import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import TestView from '../views/TestView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/test', name: 'test', component: TestView },
  { path: '/notFound', name: 'notFound', component: NotFound },
  // THE CATCH-ALL ROUTE
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router