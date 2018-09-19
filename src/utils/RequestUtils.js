import request from './request'
import log from './log'
import cookie from 'js-cookie'
import {
  APP_ENV
} from '../config/app'

function handle(result) {
  if (result.status >= 200 && result.status <= 204) { // 请求成功
    result = result.data
    if (result.statusCode == 200) {
      return Promise.resolve(result.data)
    } else if (result.statusCode == 208) {
      // need relogin TODO
    } else {
      return Promise.reject(result.data.message)
    }
  }
  if (result.status > 204) { // 请求失败
    return Promise.reject(result.data.message)
  }
}

export default {
  async get(params) {
    try {
      let result = await request.get(params)
      return handle(result)
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async post(params) {
    try {
      let result = await request.post(params)
      return handle(result)
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async patch(params) {
    try {
      let result = await request.patch(params)
      return handle(result)
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async put(params) {
    try {
      let result = await request.put(params)
      return handle(result)
    } catch (err) {
      return Promise.reject(err)
    }
  },
  async delete(params) {
    try {
      let result = await request.delete(params)
      return handle(result)
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
