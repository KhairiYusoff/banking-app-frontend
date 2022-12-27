import { createSlice } from "@reduxjs/toolkit";

const counterPractice = createSlice({
    name: 'counterpractice',
    initialState: {
        count: 0
    },
    reducers: {
        increment(state, action) {
            state.count = state.count + 1
        },
        decrement(state, action) {
            state.count = state.count - 1
        },
        reset(state, action) {
            state.count = 0
        }
    }
})

export default counterPractice.reducer

export const counterPracticeActions = counterPractice.actions