import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import Detail from '@/view/Detail'
import Tan from '@/view/Tan'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
    },
    {
      path: '/tan',
      name: 'tan',
      component: Tan,
    }
  ]
})
