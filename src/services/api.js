import { message } from 'antd'
const request = (url, payload, method) => {
    const requestMethod = method || 'GET';
    const defaultOptions = {
        method: requestMethod,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    url = 'http://localhost:9000' + url
    const requestOptions = { ...defaultOptions, body: JSON.stringify(payload) }
    return fetch(url, requestOptions).then(res => {
        if (res.status === 401) {
            message.info('Session logged out please login again')
            window.location = '/login'
        }
        return res.json()
    })
}

export function loginUser(payload) {
    return request('/api/user/login', payload, 'POST')
}

export function registerUser(payload) {
    return request('/api/user/register', payload, 'POST')
}

export function shortenURL(payload) {
    return request('/api/url/short_url', payload, 'POST')
}