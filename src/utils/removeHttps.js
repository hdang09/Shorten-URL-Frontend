const removeHttps = (url) => {
    const urlWithoutHttps = url.includes('https://')
        ? url.split('https://')[1]
        : url.split('http://')[1];

    return urlWithoutHttps;
};

export default removeHttps;
