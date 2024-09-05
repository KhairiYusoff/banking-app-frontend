import { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, logout } from './authSlice';
import { loginUser, registerUser } from '../../utils/api';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch(loginStart());
        const user = await loginUser(email, password);
        dispatch(loginSuccess(user));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export const register = (email, password) => async (dispatch) => {
    try {
        dispatch(registerStart());
        const user = await registerUser(email, password); // Assuming API provides registration
        dispatch(registerSuccess(user));
    } catch (error) {
        dispatch(registerFailure(error.message));
    }
};

export const logoutUser = () => (dispatch) => {
    dispatch(logout());
};
