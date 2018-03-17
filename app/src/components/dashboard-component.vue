<template>
    <div class='beef'>
      <div class='play-btn'></div>
      <div class='beef-info'></div>
      <div class='beef-props'></div>
    </div>
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
  .beef {
    border: 1px solid #ccc;
    padding: 15px;
    height: 100px;
  }
  .play-btn {
    float: left;
    background-color: green;
    width: 100px;
    height: 100px;
    border-radius: 100px;
  }
  .beef-info {
    float: left;
    background-color: red;
    width: 300px;
    height: 100px;
    margin-left: 15px;
  }
  .beef-props {

  }
</style>
