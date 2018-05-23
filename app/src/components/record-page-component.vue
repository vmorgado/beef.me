<template>
    <div class="text-center" id="wrapper">
     <b-button id="recordBtn" class=" align-middle" size="lg" variant="outline-danger">Record</b-button>
    </div>
</template>

<script>
import Recorder from './../logic/recorder'

var data = { text: 'hola' }

export default {
  name: 'record-page-component',
  data () {
    return data
  },
  created () {
    console.log('created')
  },
  mounted () {
    let recordBtn = document.getElementById('recordBtn')
    this.$nextTick(() => {
      console.log(recordBtn.style)
      recordBtn.style.marginTop = (window.innerHeight / 2 - 75) + 'px'
    })
    if (Recorder.isCompatible()) {
      var player = document.getElementById('player')
      recordBtn.onclick = function (e) {
        recordBtn.style.color = 'white'
        Recorder.getStream().then((stream) => {
          Recorder.record(Recorder.getMediaRecorder(stream)).then((record) => {
            recordBtn.style.color = 'red'
            var blob = Recorder.getSoundBlob(record)
            player.src = Recorder.getAudioUrl(blob)
          })
        })
      }
    } else {
      console.log('cannot start recorder in the browser')
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  #wrapper {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    align-content:center;
  }
  #recordBtn {
    font-size: 40px;
    height: 150px;
    width: 80%;
    margin-left: 0;
    margin-right: 0;
  }
</style>
