import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accounts: [],
    loading: false,
    error: null
};

const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        fetchAccountsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchAccountsSuccess(state, action) {
            state.accounts = action.payload;
            state.loading = false;
        },
        fetchAccountsFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { fetchAccountsStart, fetchAccountsSuccess, fetchAccountsFailure } = accountsSlice.actions;
export default accountsSlice.reducer;