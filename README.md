# ais.js

[![Build Status](https://travis-ci.com/YunYouJun/ais.js.svg?branch=master)](https://travis-ci.com/YunYouJun/ais.js)

> 船舶自动识别系统 (Automatic Identification System) 使用 js 构建 web 端。  
> Automatic Identification System built by js in web.

## Base on

- [Vue](https://vuejs.org/)
- [高德地图](https://lbs.amap.com/)
- [node-serialport](https://github.com/node-serialport/node-serialport)
- [ais-json](https://github.com/YunYouJun/ais-json)

## Function

- Single AIS text decode 单条解析
- SerialPort decode (Port: BOM3; BaudRate: 38400) (I will use axios to rebuild it.) 串口解析

## How to use

`bash` Folder

|Name|Description|
|--|--|
|AIS.JS.sh | start |
|SerialPort | open serial port to get AIS message |
|natapp.exe | The Intranet maps to the public network tool |
|config.ini | natapp token config file |

|文件名|描述|
|--|--|
|AIS.JS.sh | 启动网站后台服务器并自动打开浏览器至指定页面 |
|SerialPort | 打开串口接收 AIS 报文信息 |
|natapp.exe | 内网映射至公网工具 |
|config.ini | natapp token 配置文件 |

## ais-json

I write this package to Convert AIS message into json object.

You can know more details in [ais-json](https://github.com/YunYouJun/ais-json).

## Dev

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn serve

# build for production with minification
yarn build

# lint your code
yarn lint
```

## Intend

- [ ] [ais-json](https://github.com/YunYouJun/ais-json) simplify & i18n
- [ ] apply for domain: [ais.js.org](https://ais.js.org)
- [ ] docs about ais-json