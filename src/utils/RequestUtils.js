import request from './request'
import log from './log'
import cookie from 'js-cookie'
import Vue from 'vue'
import { Toast} from 'vue-ydui/dist/lib.rem/dialog';
import {
  APP_ENV
} from '../config/app'

function handle(result) {
  if (result.status >= 200 && result.status <= 204) { // 请求成功
    result = result.data
    if (result.statusCode == 200) {
      return Promise.resolve(result.data)
    } else if (result.statusCode == 206) {
      Toast({mes: '请重新登录', timeout: 2000, icon: 'error'})
      cookie.set('at', '', -1)
      cookie.set('rt', '', -1)
      setTimeout(()=> {
        window.location.hash = 'login'
        window.location.reload()
      }, 2000)
    } else if (result.statusCode == 208) {
      Toast({mes: '请重新登录', timeout: 2000, icon: 'error'})
      cookie.set('at', '', -1)
      cookie.set('rt', '', -1)
      setTimeout(()=> {
        window.location.hash = 'login'
        window.location.reload()
      }, 2000)
    } else {
      return Promise.reject(result.statusDescription)
    }
  }
  if (result.status > 204) { // 请求失败
    return Promise.reject('请求失败')
  }
}

function initParams(param) {
  const at = cookie.get('at');
  const rt = cookie.get('rt');
  const uticket = cookie.get('uticket');
  if (!param) {
    param = {}
  }
  if (!param.data) {
    param.data = {}
  }
  if (at && rt) {
    param.data['at'] = at
    param.data['rt'] = rt
  }
  if (uticket) {
    param.data['uticket'] = uticket
  }
  return param;
}

export default {
  async get(params) {
    try {
      let result = await request.get(initParams(params))
      return handle(result)
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async post(params) {
    try {
      let result = await request.post(initParams(params))
      return handle(result)
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async patch(params) {
    try {
      let result = await request.patch(initParams(params))
      return handle(result)
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async put(params) {
    try {
      let result = await request.put(initParams(params))
      return handle(result)
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async delete(params) {
    try {
      let result = await request.delete(initParams(params))
      return handle(result)
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
