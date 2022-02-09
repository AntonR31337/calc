import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../components/DashBoard.vue'
import page404 from '../components/404.vue'
import calc from '../components/HelloWorld.vue'
import App from '../views/App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/index",
    name: "index",
    component: App
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/dashboard/:page/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/dashboard/:page/:category',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/about',
    name: 'About',
  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/calc",
    name: "calc",
    component: calc
  },
  {
    path: '*',
    name: '404',
    component: page404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router