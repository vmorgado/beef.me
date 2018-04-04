<template>
    <b-card border-variant="light"
            header="Light"
            class="text-center">
      <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </b-card>
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
.beef {
    border: 1px solid #ccc;
    padding: 15px;
    height: 135px;
  }
  .play-btn {
    float: left;
    background-color: green;
    width: 100px;
    height: 100px;
    border-radius: 130px;
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
