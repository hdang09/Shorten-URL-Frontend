import { post, get, put } from './apiCaller';

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

// Users API
export const getInfo = (accountId) => {
    const url = `/api/user/${accountId}`;
    return get(url);
};