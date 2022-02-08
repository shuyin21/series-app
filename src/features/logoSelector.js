import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 'netflix';

export const logoSlice = createSlice({
    name: 'showDetails',
    initialState: { value: initialStateValue },

    reducers: {
        logoDetails: (state, action) => {
            state.value = action.payload;
        },

    },
});


export const { logoDetails } = logoSlice.actions;

export default logoSlice.reducer;