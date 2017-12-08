const fs = require('fs')
// 生成 8bitASCII码转6bit 二进制表
// node encode 执行生成命令
let chr = {}
let filename = 'ascii6bit.json'

// 补0 成为n位数
function addZero (digit, n) {
  let zero = ''
  for (let i = 0; i < n; i++) {
    zero += '0'
  }
  return (zero + digit).slice(-n)
}

for (let i = 0; i < 64 + 8; i++) {
  if ((i > 39) && (i < 48)) continue
  chr[String.fromCharCode(48 + i)] = addZero(i.toString(2), 6)
}

fs.writeFile(filename, JSON.stringify(chr), function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Generate table about 8bit-ascii-to-6bit success!')
  }
})
