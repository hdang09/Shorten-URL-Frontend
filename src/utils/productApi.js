import { post, get, put, remove } from './apiCaller';
import jwt_decode from 'jwt-decode';

const token = JSON.parse(localStorage.getItem('token'));
const { payload } = jwt_decode(token);

// Admin API
export const getAllUser = () => {
    const url = '/api/admin';
    return get(url);
};

export const createAccount = (data = {}) => {
    const url = '/api/admin/account';
    return post(url, data);
};

export const updateUserStatus = (status, accountId) => {
    const url = '/api/admin/status';
    return put(url, {
        status,
        account_id: accountId,
    });
};

export const updateUserRole = (role, accountId) => {
    const url = '/api/admin/role';
    return put(url, {
        role,
        account_id: accountId,
    });
};

// URL API
export const shortenUrl = (link) => {
    const url = '/api/url/shorten/';
    return post(url, { origin_link: link, account_id: payload._id });
};

// Reports API
export const getReport = (accountId = '', year, month) => {
    let url = `/api/report/${accountId || payload._id}`;

    if (year && month) url += `/${year}/${month}`;
    return get(url);
};

// Users API
export const getInfo = () => {
    const url = `/api/user/${payload._id}`;
    return get(url);
};
