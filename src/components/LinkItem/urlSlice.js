import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    urls: [],
};

const urlSlice = createSlice({
    name: 'url',
    initialState,
    reducers: {
        add: (state, action) => {
            state.urls.unshift({
                name: action.payload.name,
                original_url: action.payload.original_url,
                shorten_url: action.payload.shorten_url,
                created_at: action.payload.created_at,
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
