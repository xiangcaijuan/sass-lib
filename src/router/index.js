import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'

// page
import centerAbsolute from '@/components/page/centerAbsolute';


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/centerAbsolute',
      name: 'centerAbsolute',
      component: centerAbsolute
    }
  ]
})
