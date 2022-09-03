import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const urlSlice = createSlice({
    name: 'urls',
    initialState,
    reducers: {
        add: (state, action) => {
            state.unshift({
                name: action.payload.name,
                original_url: action.payload.original_url,
                shorten_url: action.payload.shorten_url,
                created_at: action.payload.created_at,
            });
        },
        deleteItem: (state, action) => {
            state = state.filter((data) => data.original_url !== action.payload);
        },
        edit: (state, action) => {
            state.forEach((url) => {
                if (url.original_url === action.payload.original_url) {
                    url.shorten_url = action.payload.shorten_url;
                    url.name = action.payload.name;
                }
            });
        },
    },
});

export const urlSelector = (state) => state.urls;
export const { add, deleteItem, edit } = urlSlice.actions;
export default urlSlice.reducer;
