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

    // *NodeJS
    // return put(url, { status, account_id });
    // *Java
    return put(url, {}, { status: status.toUpperCase(), accountId: account_id });
};

export const updateUserRole = (role, account_id) => {
    const url = '/api/admin/role';

    // *NodeJS
    // return put(url, { role, account_id });
    // *Java
    const ROLE = {
        USER: 0,
        ADMIN: 1,
    };
    return put(url, {}, { role: role === ROLE.USER ? 'USER' : 'ADMIN', accountId: account_id });
};

// Users API
export const getInfo = () => {
    const accountId = cookies.get('id');

    const url = `/api/user/${accountId}`;
    return get(url);
};
