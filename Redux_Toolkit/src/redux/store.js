// This is the file where our data is centralized
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './features/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})