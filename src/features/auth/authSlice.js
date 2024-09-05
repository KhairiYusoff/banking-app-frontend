import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.loading = false;
        },
        loginFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        registerStart(state) {
            state.loading = true;
            state.error = null;
        },
        registerSuccess(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.loading = false;
        },
        registerFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
});

export const { 
    loginStart, loginSuccess, loginFailure, 
    registerStart, registerSuccess, registerFailure, 
    logout 
} = authSlice.actions;

export default authSlice.reducer;