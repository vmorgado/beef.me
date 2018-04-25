<template>
  <div id="app">
    <navbar-component></navbar-component>
    <b-container fluid class="paddingtop">
      <b-row class="text-center">
        <b-col>
          <user-menu-component></user-menu-component>
        </b-col>
        <b-col cols="6">
          <router-view/>
        </b-col>
        <b-col>
          <hashtags-component></hashtags-component>
        </b-col>
      </b-row>
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
  }
}
</script>
<style scoped>
  .paddingtop {
    padding-top: 15px;
  }
</style>
