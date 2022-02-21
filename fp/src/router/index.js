import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import(/* webpackChunkName: "Vuetify" */ '../App.vue')
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: () => import(/* webpackChunkName: "DashBoard" */ '../components/DashBoard.vue')
  },

  // {
  //   path: '/dashboard/:page/:category',
  //   name: 'DashBoard',
  //   component: DashBoard
  // },
  {
    path: '/:action/:section/:category',
    name: 'AddPaymentForm',
    component: () => import(/* webpackChunkName: "AddPaymentForm" */ '../components/AddPaymentForm.vue')

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
    component: () => import(/* webpackChunkName: "calc" */ '../components/HelloWorld.vue')

  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../components/404.vue')
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