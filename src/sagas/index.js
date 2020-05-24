import { call, put, takeEvery } from 'redux-saga/effects';
import { message } from 'antd'
import {history} from 'react-router-dom'
import { loginUser as callLoginAPI, registerUser as callRegisterAPI, shortenURL as callShortenAPI } from '../services/api'

function* userLogin({ values }) {
    const response = yield call(callLoginAPI, values);
    if (!response.success) {
        message.error('Don\'t try to fake me')
        return;
    }
    message.success('Logged in successfully', 1000)
    setTimeout(() => {
        window.location = '/home'
    }, 1000)
}

function* registerUser({ values }) {
    const response = yield call(callRegisterAPI, values);
    if (!response.success) {
        message.error('Invalid Values')
        return;
    }
    setTimeout(() => {
        window.location = '/login'
    }, 1000)
    message.success('Registered successfully')
}

function* shortenURL({ value }) {
    const payload = {
        url: value
    }
    const response = yield call(callShortenAPI, payload);
    if (!response.success) {
        message.error('Error occurred while shortening Please try again!!');
        return;
    }
    yield put({
        type: 'returnShortenURL',
        payload: response.data.url
    })
}

function* entrySaga() {
    console.log('inside entry saga')
    yield takeEvery('LOGIN_USER', userLogin);
    yield takeEvery('REGISTER_USER', registerUser);
    yield takeEvery('SHORTEN_URL', shortenURL);
}

export default entrySaga;