const removeHttps = (url) => {
    return url.split('https://')[1] || url.split('http://')[1];
};

export default removeHttps;
