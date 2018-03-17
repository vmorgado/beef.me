// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import fakeData from './logic/fake-data'

import firebaseConfig from './logic/firebase-config'
import * as firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

// fake data object for now
var data = fakeData
// init firebase stuff
firebase.initializeApp(firebaseConfig)

var beefRef2 = firebase.database().ref().child('beefs')
beefRef2.on('value', function (snap) {
  data.beefs = snap.val()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: data
})
