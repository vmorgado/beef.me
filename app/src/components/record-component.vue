<template>
  <div>
      <div id="record-button"></div>
  </div>
</template>

<script>
export default {
  name: 'record-component',
  data () {
    return {
      msg: 'Audio Record Example'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #record-button {
        position: fixed;
        background-color: red;
        width: 70px;
        height: 70px;
        border-radius: 35px;
    }
</style>
