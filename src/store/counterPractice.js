import { createSlice } from "@reduxjs/toolkit";

const counterPractice = createSlice({
    name: 'counterpractice',
    initialState: {
        count: 10
    },
    reducers: {
        increment(state, action) {
            state.count++
        },
        incrementTen(state, action) {
            state.count = state.count + action.payload
        },
        decrement(state, action) {
            state.count--
        },
        decrementTen(state, action) {
            state.count = state.count + action.payload
        },
        reset(state, action) {
            state.count = 10
        }
    }
})

export default counterPractice.reducer

export const counterPracticeActions = counterPractice.actions