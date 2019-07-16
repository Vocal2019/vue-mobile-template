import axios from 'axios'
import qs from 'qs'

function postRequest(url, data = {}, method = 'post') {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

function getRequest(url, params = {}, method = 'get') {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export { postRequest, getRequest }
