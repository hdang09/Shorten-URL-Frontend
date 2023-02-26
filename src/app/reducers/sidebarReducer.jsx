import { AiOutlineHome } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';
import { BsGear, BsPeople } from 'react-icons/bs';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { createSlice } from '@reduxjs/toolkit';

import config from '../../config';

const initialState = {
    user: [
        {
            name: 'Home',
            icon: <AiOutlineHome />,
            to: config.routes.home,
        },
        {
            name: 'My URLs',
            icon: <BiLink />,
            to: config.routes.url,
        },
        {
            name: 'Analytics',
            icon: <TbBrandGoogleAnalytics />,
            to: config.routes.analytics,
        },
        {
            name: 'Settings',
            icon: <BsGear />,
            to: config.routes.settings,
        },
    ],
    admin: [
        {
            name: 'Dashboard',
            icon: <AiOutlineHome />,
            to: config.routes.admin,
        },
        {
            name: 'Management',
            icon: <BsPeople />,
            to: config.routes.adminManagement,
        },
        {
            name: 'Shorten URL',
            icon: <BiLink />,
            to: config.routes.adminShortenURL,
        },
        {
            name: 'Settings',
            icon: <BsGear />,
            to: config.routes.adminSettings,
        },
    ],
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {},
});

// Selector
export const userSidebarSelector = (state) => state.sidebar.user;
export const adminSidebarSelector = (state) => state.sidebar.admin;

// Reducer
export default sidebarSlice.reducer;
