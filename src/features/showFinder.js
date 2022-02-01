import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = ''

export const showFinderSlice = createSlice({
    name: 'show',
    initialState: { value: initialStateValue },

    reducers: {
        findShow: (state, action) => {
            state.value = action.payload;
        },

    },
});


export const { findShow } = showFinderSlice.actions;

export default showFinderSlice.reducer;