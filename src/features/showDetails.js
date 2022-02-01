import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const detailsSlice = createSlice({
    name: 'showDetails',
    initialState: { value: initialStateValue },

    reducers: {
        showDetails: (state, action) => {
            state.value = action.payload;
        },

    },
});


export const { showDetails } = detailsSlice.actions;

export default detailsSlice.reducer;