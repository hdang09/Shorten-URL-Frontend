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

// URL API
export const shortenUrl = (link, accountId, linkcode) => {
    const url = '/api/url/shorten/';
    return post(url, {
        origin_link: link,
        account_id: accountId,
        linkcode,
    });
};

export const updateLink = (shortenLink, linkcode) => {
    const url = '/api/url/shorten/update-link';
    return post(url, {
        shorten_link: shortenLink,
        linkcode,
    });
};

// Reports API
export const getReport = (accountId = '', year, month) => {
    let url = `/api/report/${accountId}`;

    if (year && month) url += `/${year}/${month}`;
    return get(url);
};

// Users API
export const getInfo = (accountId) => {
    const url = `/api/user/${accountId}`;
    return get(url);
};
