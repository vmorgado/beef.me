export default {
  isCompatible: () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      return true
    }
    return false
  },
  getStream: () => {
    return navigator.mediaDevices.getUserMedia({ audio: true, video: false })
  },
  getMediaRecorder: (stream) => {
    return new MediaRecorder(stream)
  },
  record: (mediaRecorder) => {
    mediaRecorder.start(10000)
    return new Promise((resolve, reject) => {
      mediaRecorder.ondataavailable = function (e) {
        if (mediaRecorder.state !== 'inactive') {
          mediaRecorder.stop()
        }
        resolve([e.data])
      }
    })
  },
  getSoundBlob: (chunks) => {
    return new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' })
  },
  getAudioUrl: (blob) => {
    return window.URL.createObjectURL(blob)
  }
}
