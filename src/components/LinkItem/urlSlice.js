import { createSlice, configureStore } from '@reduxjs/toolkit';

const urlSlice = createSlice({
    name: 'url',
    initialState: {
        urls: [
            // {
            //     name: 'F-Code Club',
            //     original_url: 'http://tech1.tech.tech.tech.f-code.tech.com',
            //     shorten_url: 'http://f-code.tech',
            // },
            // {
            //     name: 'F-Code Club 2',
            //     original_url: 'http://tech2.tech.tech.tech.f-code.tech.com',
            //     shorten_url: 'http://f-code.tech2',
            // },
            // {
            //     name: 'F-Code Club 3',
            //     original_url: 'http://tech3.tech.tech.tech.f-code.tech.com',
            //     shorten_url: 'http://f-code.tech3',
            // },
            // {
            //     name: 'F-Code Club 4',
            //     original_url: 'http://tech4.tech.tech.tech.f-code.tech.com',
            //     shorten_url: 'http://f-code.tech4',
            // },
            // {
            //     name: 'F-Code Club 5',
            //     original_url: 'http://tech5.tech.tech.tech.f-code.tech.com',
            //     shorten_url: 'http://f-code.tech5',
            // },
            // {
            //     name: 'F-Code Club 6',
            //     original_url: 'http://tech6.tech.tech.tech.f-code.tech.com',
            //     shorten_url: 'http://f-code.tech6',
            // },
            // {
            //     name: 'F-Code Club 7',
            //     original_url: 'http://tech7.tech.tech.tech.f-code.tech.com',
            //     shorten_url: 'http://f-code.tech7',
            // },
        ],
    },
    reducers: {
        add: (state, action) => {
            state.urls.unshift({
                name: action.payload.name,
                original_url: action.payload.original_url,
                shorten_url: action.payload.shorten_url,
            });
        },
        deleteItem: (state, action) => {
            state.urls = state.urls.filter((data) => data.original_url !== action.payload);
        },
        edit: (state, action) => {
            state.urls.forEach((url) => {
                if (url.original_url === action.payload.original_url) {
                    url.shorten_url = action.payload.shorten_url;
                    url.name = action.payload.name;
                }
            });
        },
    },
});

export const { add, deleteItem, edit } = urlSlice.actions;
export default urlSlice.reducer;
