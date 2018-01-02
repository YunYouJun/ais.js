const SerialPort = require('serialport').SerialPort
const serialPort = new SerialPort('/dev/tty-usbserial1', {
  baudrate: 57600
}, false) // this is the openImmediately flag [default is true]

serialPort.open(function (err) {
  if (err) {
    console.log('failed to open: ' + err)
  } else {
    console.log('open')
    serialPort.on('data', function (data) {
      console.log('data received: ' + data) // 读取串口数据
    })
    serialPort.write('ls\n', function (err, results) {
      console.log('err ' + err)
      console.log('results ' + results)
    })
  }
})
