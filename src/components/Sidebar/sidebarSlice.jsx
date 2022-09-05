import { createSlice } from '@reduxjs/toolkit';
import { AiOutlineHome } from 'react-icons/ai';
import { ImStatsBars } from 'react-icons/im';
import { BsGear } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';

const initialState = {
    user: [
        { name: 'Home', icon: <AiOutlineHome />, to: '/' },
        { name: 'My URLs', icon: <BiLink />, to: '/url' },
        { name: 'Analytics', icon: <ImStatsBars />, to: '/analytics' },
        { name: 'Settings', icon: <BsGear />, to: '/settings' },
    ],
    admin: [
        { name: 'Dashboard', icon: <AiOutlineHome />, to: '/admin/' },
        { name: 'Management', icon: <BiLink />, to: '/admin/management' },
        { name: 'Shorten URL', icon: <ImStatsBars />, to: '/admin/shorten-url' },
        { name: 'Settings', icon: <BsGear />, to: '/admin/settings' },
    ],
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {},
});

export default sidebarSlice.reducer;
export const userSidebarSelector = (state) => state.sidebar.user;
export const adminSidebarSelector = (state) => state.sidebar.admin;
