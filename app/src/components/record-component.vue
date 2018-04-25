<template>
  <div>
      <!-- Modal Recorder in button -->
      <b-modal id="recorder-modal" title="Start Recording your Beef">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
  </div>
</template>

<script>
export default {
  name: 'record-component',
  data () {
    return {
      msg: 'Audio Record Example'
    }
  },
  methods: {
    record: function () {},
    enableRecorder: function () {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    #enable-recorder-button {
        position:absolute;
        background-color: red;
        width: 70px;
        height: 70px;
        border-radius: 35px;
        bottom: 20px;
        right: 33%;
    }
</style>
