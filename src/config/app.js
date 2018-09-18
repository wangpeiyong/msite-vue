import Cookie from '../utils/cookie'

// 全局常量
const win = window
const loc = win.location
const host = loc.host
const port = loc.port
let PREFIX = '//capi.zhaopin.com'
let APP_ENV = host.split('.')[0].split('-')[1] ? host.split('.')[0].split('-')[1] : 'prod'
if (host.indexOf('localhost') > -1  || host.indexOf('127.0.0.1') > -1) {
  APP_ENV = 'dev'
  PREFIX = '//localhost:8080/'
} else {
  let SUFFIX = APP_ENV === 'prod' ? '' : APP_ENV
  if (SUFFIX) {
    PREFIX = '//capi' + '-' + SUFFIX + '.zhaopin.com/'
  }
}

export {
  APP_ENV,
  PREFIX,
}
