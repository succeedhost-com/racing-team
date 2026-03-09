import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import TestView from '../views/TestView.vue'

// We remove the static import of NotFound to save on initial bundle size

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/test', name: 'test', component: TestView },
  
  // Explicit path for manual testing
  { 
    path: '/notFound', 
    name: 'notFoundManually', 
    component: () => import('../views/NotFound.vue') 
  },
  
  // THE CATCH-ALL ROUTE (Handles the Apache redirects)
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('../views/NotFound.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router