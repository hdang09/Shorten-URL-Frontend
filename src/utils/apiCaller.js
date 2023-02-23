import axios from 'axios';

import config from '../config';

export const request = (endpoint, method, headers = {}, params = {}, body = {}) => {
    const token = JSON.parse(localStorage.getItem('token')) || '';
    return axios({
        url: config.publicRuntime.API_URL + endpoint,
        method,
        headers: {
            ...headers,
            token,
        },
        params: {
            ...params,
        },
        data: body,
    });
};

export const get = (endpoint, params = {}, headers = {}) => {
    return request(endpoint, 'GET', headers, params);
};

export const post = (endpoint, body = {}, params = {}, headers = {}) => {
    return request(endpoint, 'POST', headers, params, body);
};

export const put = (endpoint, body = {}, params = {}, headers = {}) => {
    return request(endpoint, 'PUT', headers, params, body);
};

export const remove = (endpoint, body = {}, params = {}, headers = {}) => {
    return request(endpoint, 'DELETE', headers, params, body);
};
