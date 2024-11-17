import bunyan from 'bunyan'

export default bunyan.createLogger({
  name: 'insurance-picker',
  streams: [{
    path: 'insurance-picker.log',
    stream: process.stderr
  }]
})
