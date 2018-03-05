<template>
  <div class="panel panel-default col-xs-12">
      <div class="panel-body">
          {{msg}}
          <input type="file" accept="audio/*" capture id="recorder">
          <audio id="player" controls></audio>
      </div>
  </div>
</template>

<script>
export default {
  name: 'beef-component',
  data () {
    return {
      msg: 'Audio Record Example'
    }
  },
  mounted () {
    var player = document.getElementById('player')
    var handleSuccess = function (stream) {
      if (window.URL) {
        player.src = window.URL.createObjectURL(stream)
      } else {
        player.src = stream
      }
    }
    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(handleSuccess)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
