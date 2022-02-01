import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 82;

export const idFinderSlice = createSlice({
    name: 'findId',
    initialState: { value: initialStateValue },

    reducers: {
        findId: (state, action) => {
            state.value = action.payload;
        },

    },
});


export const { findId } = idFinderSlice.actions;

export default idFinderSlice.reducer;