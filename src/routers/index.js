import { Login, Home, Landing, Statistics } from '../pages';

const publicRoutes = [
    { id: 1, path: '/', element: Home },
    { id: 2, path: '/login', element: Login },
    { id: 3, path: '/statistics', element: Statistics },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
