import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../views/App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "index",
    component: App
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: () => import(/* webpackChunkName: "about" */ '../components/DashBoard.vue')
  },
  // {
  //   path: '/dashboard/:page/',
  //   name: 'DashBoard',
  //   component: DashBoard
  // },
  // {
  //   path: '/dashboard/:page/:category',
  //   name: 'DashBoard',
  //   component: DashBoard
  // },
  {
    path: '/:action/:section/:category',
    name: 'AddPaymentForm',
    component: () => import(/* webpackChunkName: "about" */ '../components/AddPaymentForm.vue')

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
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld.vue')

  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../components/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, form, next)=>{
//     next(to)
// })

export default router