<template>
  <beef-component></beef-component>
</template>

<script>
import BeefComponent from './beef-component'

var data = { text: 'hola' }

export default {
  name: 'dashboard-component',
  components: { BeefComponent },
  data () {
    return data
  },
  created () {
    console.log('created')
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
