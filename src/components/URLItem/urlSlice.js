import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    original: '',
    shorten: '',
};

const urlSlice = createSlice({
    name: 'url',
    initialState,
    reducers: {
        add: (state, action) => {
            state.original = action.payload.original;
            state.shorten = action.payload.shorten;
        },
    },
});

export const urlSelector = (state) => state.url;
export const { add } = urlSlice.actions;
export default urlSlice.reducer;
