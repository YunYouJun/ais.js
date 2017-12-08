import ascii6bit from './ascii6bit.json'

function message2bit (message) {
  let bitMessage = ''
  for (let i = 0; i < message.length; i++) {
    bitMessage += ascii6bit[message[i]]
  }
  return bitMessage
}

export default function (text) {
  console.log('hello,ais-npm')
  // !AIVDM,a,b,c,d,e-e,f，hh(CR)(LF)
  let frame = text.toString().split(',')

  let type = frame[0]
  let total = frame[1] // 发送这一信息需要的句子总数 (1一9)
  let no = frame[2] // 本句的句子序数 (1一9)
  let series = frame[3] // 连续信息的识别 (0-9)
  let channel = frame[4] // AIS信道号
  let message = frame[5] // 封装信息
  let fill = frame[6] // x表示填充的BIT数 (0一5) ; hh表示校验字节

  if (type === '!AIVDM') {
    // (AIS VHF data-link Message) 含有船舶动态和船舶静态信息、航行相关信息
    let bitMessage = message2bit(message)
    let id = bitMessage.slice(0, 6) // Identifier for this message
    let repeat = bitMessage.slice(6, 8) // Repeat Indicator, 0 = default
    let MMSI = bitMessage.slice(8, 38) // MMSI
    let status = bitMessage.slice(38, 42) // Navigational staus,0000=underway using engine
    let rate = bitMessage.slice(42, 50) // Rate of turn，00000000=0
    let speed = bitMessage.slice(50, 60) // Speed over ground，0000000000 = 0
    let accuracy = bitMessage.slice(60, 61) // Position accuracy, 0=LOW
    let longitude = bitMessage.slice(61, 89) //Longitude in 1/10000 minutes
    let latitude = bitMessage.slice(89, 116) //Latitude in 1/10000 minutes
  } else if (type === '!AIVDO') {
    // (AIS VHF data-link Own-vessel report) 含有本船动态信息
  }
  console.log(text.length)
  let info = frame
  return info
}
