import {API_URL} from "./consts"

const originalRequest = async (url, config) => {
  url = `${API_URL}${url}`
  const response = await fetch(url, {
    ...config,
    credentials: 'include',
    redirect: 'follow'
  })
  const data = await response.json()
  return {response, data}
}

const refreshToken = async (type) => {
  const response = await fetch(`${API_URL}/${type}/refresh`, {
    method: 'GET',
    credentials: 'include',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  const data = await response.json()
  localStorage.setItem('access_token', data.accessToken)
  return data
}

const customFetcher = async (url, config, type) => {
  let accessToken = localStorage.getItem('access_token') ?? null
  config['headers'] = {
    ...config['headers'],
    Authorization: `Bearer ${accessToken}`
  }
  console.log(config)
  let {response, data} = await originalRequest(url, config)
  if (response.status === 401 && response.message === 'Refresh token is empty'){

  }
  if(response.status === 401){
    response = await refreshToken(type)
    console.log(response.accessToken)
    config['headers'] = {
      Authorization: `Bearer ${response.accessToken}`
    }

    const newResponse = await originalRequest(url, config)
    response = newResponse.response
    data = newResponse.data
  }

  return {response, data}
}

export default customFetcher
