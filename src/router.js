import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode:'lllsss',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
    
      component: () => import('./views/About.vue')
    },
    {
      path:'/My',
      name:'My',
      component: () => import('./views/My.vue')
    },
    {
    path:'/You',
    name:'You',
    component: ()=>import('./views/You.vue')
    },
    {
      path:'/detail/:id',
      name:'detail',
      component: ()=>import('./views/Detail.vue')
      }
  ]
})
