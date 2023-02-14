const publicRuntimeConfig = {
    NODE_ENV: import.meta.env.VITE_NODE_ENV || 'production',
    API_URL: import.meta.env.VITE_API_URL,
};

export default publicRuntimeConfig;
