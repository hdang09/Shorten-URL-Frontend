import axios from 'axios';
import Cookies from 'universal-cookie';

import config from '../config';

export const request = (endpoint, method, headers = {}, params = {}, body = {}) => {
    const token = new Cookies().get('token') || '';

    return axios({
        url: config.publicRuntime.API_URL + endpoint,
        method,
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
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
