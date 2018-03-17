import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard-component'
import TestPage from '@/components/test-component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/test-page',
      name: 'TestPage',
      component: TestPage
    }
  ]
})
