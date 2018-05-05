import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import Detail from '@/view/Detail'
import Tan from '@/view/empty/Tan'
import Infro from '@/view/empty/Infro'
import Record from '@/view/empty/Record'
import Public from '@/view/empty/Public'


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
    },
    {
      path: '/infro',
      name: 'infro',
      component: Infro,
    },
    {
      path: '/record',
      name: 'record',
      component: Record,
    },
    {
      path: '/public',
      name: 'public',
      component: Public,
    }
  ]
})
