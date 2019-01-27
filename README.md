# ais.js

[![Build Status](https://travis-ci.com/YunYouJun/ais.js.svg?branch=master)](https://travis-ci.com/YunYouJun/ais.js)

> 船舶自动识别系统 (Automatic Identification System) 使用 js 构建 web 端。

## Base on

- Vue
- 高德地图
- node-serialport
- [ais-json](https://github.com/YunYouJun/ais-json)

## Function

- 单条解析
- 串口解析

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## How to use

`bash` 文件夹

|文件名|描述|
|--|--|
|AIS.JS.sh | 启动网站后台服务器并自动打开浏览器至指定页面 |
|SerialPort | 打开串口接收 AIS 报文信息 |
|natapp.exe | 内网映射至公网工具 |
|config.ini | natapp token 配置文件 |

## 接口

### AIS 解析包使用方法

解析为 Json 对象返回

参见 [ais-json](https://github.com/YunYouJun/ais-json)

## Intend

- [ais-json](https://github.com/YunYouJun/ais-json) simplify & i18n
- apply for domain: [ais.js.org](https://ais.js.org)