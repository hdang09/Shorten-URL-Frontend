import { Login, Home, Landing, Statistics, QRCode, Settings, MyURL } from '../pages';
import Default from '../layouts/Default';

const publicRoutes = [
    { id: 1, path: '/', element: Home, layout: Default },
    { id: 2, path: '/login', element: Login },
    { id: 3, path: '/statistics', element: Statistics, layout: Default },
    { id: 4, path: '/qrcode', element: QRCode, layout: Default },
    { id: 5, path: '/settings', element: Settings, layout: Default },
    { id: 6, path: '/url', element: MyURL, layout: Default },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
