const request = (url, payload, method) => {
    const requestMethod = method || 'GET';
    const defaultOptions = {
        method: requestMethod,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    url = 'http://localhost:5000' + url
    const requestOptions = { ...defaultOptions, body: JSON.stringify(payload) }
    return fetch(url, requestOptions).then(res => res.json())
}

export function loginUser(payload) {
    return request('/user/login', payload, 'POST')
}

export function registerUser(payload) {
    return request('/user/register', payload, 'POST')
}

export function shortenURL(payload) {
    return request('/url/short_url', payload, 'POST')
}