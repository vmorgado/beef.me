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

        <button id="record">Record</button>
    </div>
  </div>
</template>

<script>
import BeefComponent from './beef-component'
import Recorder from './../logic/recorder'
import * as firebase from 'firebase'

var data = { chunks: [] }

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
    if (Recorder.isCompatible()) {
      var player = document.getElementById('player')
      var recordBtn = document.getElementById('record')
      recordBtn.onclick = function (e) {
        recordBtn.style.color = 'red'
        Recorder.getStream().then((stream) => {
          Recorder.record(Recorder.getMediaRecorder(stream)).then((record) => {
            recordBtn.style.color = 'black'
            player.src = Recorder.getAudioUrl(Recorder.getSoundBlob(record))
          })
        })
      }
    } else {
      console.log('cannot start recorder in the browser')
    }
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //   var stream = navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    //   recorder.onclick = function () {
    //     stream.then((stream) => {
    //       var mediaRecorder = new MediaRecorder(stream)
    //       mediaRecorder.start(10000)
    //       console.log(mediaRecorder.state)

    //       mediaRecorder.ondataavailable = function (e) {
    //         if (mediaRecorder.state !== 'inactive') {
    //           console.log(mediaRecorder.state)
    //           console.log(data.chunks)
    //           mediaRecorder.stop()
    //         }
    //         data.chunks.push(e.data)
    //       }
    //       mediaRecorder.onstop = function (e) {
    //         console.log('recorder stopped')
    //         var blob = new Blob(data.chunks, { 'type': 'audio/ogg; codecs=opus' })
    //         data.chunks = []
    //         var audioURL = window.URL.createObjectURL(blob)
    //         player.src = audioURL
    //         recorder.style.color = 'black'
    //       }
    //     })
    //     recorder.style.color = 'red'
    //   }
    // } else {
    //   console.log('getUserMedia not supported on your browser!')
    // }
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
