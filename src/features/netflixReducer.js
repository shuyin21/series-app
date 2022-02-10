import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 0;

export const netflixSlice = createSlice({
    name: 'netflix',
    initialState: { value: initialStateValue },

    reducers: {
        netflixDetails: (state, action) => {
            state.value = action.payload;
        },

    },
});


export const { netflixDetails } = netflixSlice.actions;

export default netflixSlice.reducer;