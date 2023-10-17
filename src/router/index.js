import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/MainViev.vue')
    }
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: function () {
      return import('../views/Projects.vue')
    }
  },
  {
    path: '/2',
    name: 'home2',
    component: HomeView
  },
  {
    path: '/3',
    name: 'home1',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/Projects/numia',
    name: 'numia',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/pages/NumiaPage.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
