import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const urlSlice = createSlice({
    name: 'urls',
    initialState,
    reducers: {
        add: (state, action) => {
            state.unshift(action.payload);
        },
        deleteItem: (state, action) => {
            state = state.filter((data) => data.id !== action.payload);
        },
        edit: (state, action) => {
            state.forEach((url) => {
                if (url.origin_url === action.payload.origin_url) {
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
