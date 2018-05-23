<template>
  <div id="app">
    <navbar-component></navbar-component>
    <b-container fluid style="min-height: 100vh;">
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import NavbarComponent from './components/navbar-component'
import UserMenuComponent from './components/usermenu-component'
import HashtagsComponent from './components/hashtags-component'

export default {
  name: 'App',
  components: { NavbarComponent, UserMenuComponent, HashtagsComponent },
  data () {
    return {
      user: 'Telhas Noob'
    }
  },
  created () {
    var app = document.getElementById('app')
    console.log(app)
  }
}
</script>
<style scoped>
  .paddingtop {
    padding-top: 15px;
  }
  #app {
    height: auto;
  }
</style>
