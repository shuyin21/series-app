import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 'Netflix';

export const channelSlice = createSlice({
    name: 'channelDetails',
    initialState: { value: initialStateValue },

    reducers: {
        channelDetails: (state, action) => {
            state.value = action.payload;
        },

    },
});


export const { channelDetails } = channelSlice.actions;

export default channelSlice.reducer;