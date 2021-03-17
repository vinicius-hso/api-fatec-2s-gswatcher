import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Perfil from '../views/Perfil.vue'
import Time from '../views/Time.vue'
import Projetos from '../views/Projetos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/perfil',
    name: 'perfil',
    component: Perfil
  },
  {
    path: '/time',
    name: 'time',
    component: Time
  },
  {
    path: '/projetos',
    name: 'projetos',
    component: Projetos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
