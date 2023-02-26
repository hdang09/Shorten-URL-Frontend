import Cookies from 'universal-cookie';

import { get, post } from './apiCaller';

// URL API
export const shortenUrl = (link, linkcode) => {
    const accountId = new Cookies().get('id');
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
export const getReport = (accountId, year, month) => {
    accountId = !accountId ? new Cookies().get('id') : accountId;
    let url = `/api/report/${accountId}`;

    if (year && month) url += `/${year}/${month}`;
    return get(url);
};
