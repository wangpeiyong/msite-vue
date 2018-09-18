import axios from 'axios'
import {
  PREFIX
} from '../config/app'
import _ from 'underscore'

function handleError(err, params) {
  return Promise.reject(err)
}

export default {
  checkParams(params) {
    if (!params.url) {
      throw new Error('无效的请求地址')
    }
  },
  init() {
      // axios.defaults.baseURL = PREFIX
    axios.defaults.baseURL = '/capi'
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  },
  async get(params) {
    this.checkParams(params)
    this.init()

    let url = params.url
    // 此处处理 params.data 拼接数据到 url 上
    if (params.data) {
      let str = ''
      for (let i in params.data) {
        str += `${i}=${params.data[i]}&`
      }
      url += '?' + str.substring(0, str.length - 1)
    }
    try {
      let res = await axios({
        method: 'get',
        url: url,
        validateStatus: function (status) {
          return status >= 200 && status < 500; // default
        }
      })

      return Promise.resolve(res)
    } catch (err) {
      return handleError(err, params)
    }
  },
  async post(params) {
    this.checkParams(params)
    this.init()

    try {
      let res = await axios({
        method: 'post',
        url: params.url,
        data: params.data,
        validateStatus: function (status) {
          return status >= 200 && status < 500; // default
        }
      })
      return Promise.resolve(res)
    } catch (err) {
      return handleError(err, params)
    }
  },
  async put(params) {
    this.checkParams(params)
    this.init()

    try {
      let res = await axios({
        method: 'put',
        url: params.url,
        data: params.data,
        validateStatus: function (status) {
          return status >= 200 && status < 500; // default
        }
      })

      return Promise.resolve(res)
    } catch (err) {
      return handleError(err, params)
    }
  },
  async patch(params) {
    this.checkParams(params)
    this.init()

    try {
      let res = await axios({
        method: 'patch',
        url: params.url,
        data: params.data,
        validateStatus: function (status) {
          return status >= 200 && status < 500; // default
        }
      })

      return Promise.resolve(res)
    } catch (err) {
      return handleError(err, params)
    }
  },
  async delete(params) {
    this.checkParams(params)
    this.init()

    try {
      let res = await axios({
        method: 'delete',
        url: params.url,
        data: params.data,
        validateStatus: function (status) {
          return status >= 200 && status < 500; // default
        }
      })

      return Promise.resolve(res)
    } catch (err) {
      return handleError(err, params)
    }
  },
  // 以下请求不使用baseURL
  async real_get(params) {
    this.checkParams(params)

    let url = params.url
    // 此处处理 params.data 拼接数据到 url 上
    if (params.data) {
      let str = ''
      for (let i in params.data) {
        str += `${i}=${params.data[i]}&`
      }
      url += '?' + str.substring(0, str.length - 1)
    }
    try {
      let res = await axios({
        method: 'get',
        url: url
      })

      return Promise.resolve(res)
    } catch (err) {
      return handleError(err, params)
    }
  },
  async real_post(params) {
    this.checkParams(params)

    try {
      let res = await axios({
        method: 'post',
        url: params.url,
        data: params.data
      })

      return Promise.resolve(res)
    } catch (err) {
      return handleError(err, params)
    }
  },
}
