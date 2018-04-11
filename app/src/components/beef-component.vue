<template>
  <div>
    <b-card>
      <div class="play-btn">
      </div>
      <div class="beef-info">
        <p>From user to user</p>
        <p>beefid</p>
      </div>
     </b-card>
  </div>
</template>

<script>
export default {
  name: 'beef-component',
  data () {
    return {
      msg: 'Audio Record Example'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .play-btn {
    float: left;
    background-color: green;
    width: 80px;
    height: 80px;
  }
  .beef-info {
    float: left;
    background-color: red;
    width: 300px;
    height: 100px;
    margin-left: 15px;
  }
  .beef-props {
    background-color: purple;
    width: 40px;
    height: 40px;
    float: right;
  }
</style>
