import Cookies from 'universal-cookie';

import { get, post, put } from './apiCaller';

const cookies = new Cookies();

// Admin API
export const getAllUser = () => {
    const url = '/api/admin';

    return get(url);
};

export const createAccount = (data = {}) => {
    const url = '/api/admin/account';

    return post(url, data);
};

export const updateUserStatus = (status, account_id) => {
    const url = '/api/admin/status';

    return put(url, { status, account_id });
};

export const updateUserRole = (role, account_id) => {
    const url = '/api/admin/role';

    return put(url, { role, account_id });
};

// Users API
export const getInfo = () => {
    const accountId = cookies.get('id');

    const url = `/api/user/${accountId}`;
    return get(url);
};
