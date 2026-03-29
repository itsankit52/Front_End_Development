// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Create a slice for counter functionality
export const counterSlice = createSlice({
    name: "counter", // Name of the slice

    // Initial state of the counter
    initialState: {
        value: 0 // Starting value
    },

    // Reducer functions to handle actions
    reducers: {
        // Increases the counter value by 1
        increase: (state) => {
            state.value += 1; // Increment value
        },

        // Decreases the counter value by 1 (only if greater than 0)
        decrease: (state) => {
            if (state.value > 0) {
                state.value -= 1; // Decrement value
            }
        },

        // Increases the counter by a specific amount (payload)
        Increase_By: (state, actions) => {
            state.value += actions.payload; // Add payload value
        },
    }
});

// Export actions to be used in components
export const { increase, decrease, Increase_By } = counterSlice.actions;

// Export reducer to be added to store
export default counterSlice.reducer;