import Vue from 'vue'
import Router from 'vue-router'
import RecordPage from '@/components/record-page-component'
import TestPage from '@/components/test-component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RecordPage',
      component: RecordPage
    },
    {
      path: '/test-page',
      name: 'TestPage',
      component: TestPage
    }
  ]
})
