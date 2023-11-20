import Cookies from 'universal-cookie';

import { get, post, put } from './apiCaller';

// URL API
export const shortenUrl = (link, linkcode) => {
    const url = '/api/url/shorten';

    return post(
        url,
        {},
        {
            originLink: link,
            linkcode,
        },
    );
};

export const updateLink = (shortenLink, linkcode, title) => {
    const url = '/api/url/shorten/update-link';

    return put(
        url,
        {},
        {
            shortenLink,
            linkcode,
            title,
        },
    );
};

// Reports API
export const getReport = (accountId, year, month) => {
    let url = `/api/report/${accountId}`;

    if (year && month) url += `/${year}/${month}`;
    return get(url);
};

export const getReportForCurrentUser = () => {
    let url = `/api/report`;

    return get(url);
};
