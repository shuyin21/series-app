import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 0;

export const logoSlice = createSlice({
    name: 'logoDetails',
    initialState: { value: initialStateValue },

    reducers: {
        logoDetails: (state, action) => {
            state.value = action.payload;
        },

    },
});


export const { logoDetails } = logoSlice.actions;

export default logoSlice.reducer;