<template>
  <div id="dashboard">
      <beef-component></beef-component>
      <div id="synced">
          Texto em tempo real da db.
          <h3>{{text}}</h3>
      </div>
  </div>
</template>

<script>
import BeefComponent from './beef-component'
export default {
  name: 'Dashboard',
  components: {BeefComponent},
  data () {
    return {
      text: 'hello'
    }
  },
  created () {
    console.log('created')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
