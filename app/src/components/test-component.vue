<template>
  <div id='test-page'>
    <div class="panel panel-default col-xs-12">
        <div class="panel-body">
            {{msg}}
            <input type="file" accept="audio/*" capture id="recorder">
            <audio id="player" controls></audio>
        </div>
    </div>
    <beef-component></beef-component>
    <div id='synced'>
        Texto em tempo real da db.
        <h3>{{text}}</h3>
    </div>
  </div>
</template>

<script>
import BeefComponent from './beef-component'
import * as firebase from 'firebase'

var data = { text: 'hola' }

export default {
  name: 'test-page-component',
  components: { BeefComponent },
  data () {
    return {
      msg: 'Audio Record Example',
      text: 'hola'
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
  },
  created () {
    console.log('created')
    var beefRef = firebase
      .database()
      .ref()
      .child('text')
    beefRef.on('value', function (snap) {
      data.text = snap.val()
    })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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
