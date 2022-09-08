const publicRuntimeConfig = {
    NODE_ENV: import.meta.env.VITE_NODE_ENV || 'production',
    API_URL: import.meta.env.VITE_API_URL,
    LOCALSTORAGE_TOKEN_NAME: 'token',
    CLIENT_ID: import.meta.env.VITE_CLIENT_ID,
};

export const { NODE_ENV, API_URL, LOCALSTORAGE_TOKEN_NAME, CLIENT_ID } = publicRuntimeConfig;

export default publicRuntimeConfig.NODE_ENV;
