import { loginStart, loginSuccess, loginFailure, logout } from './authSlice';
import { authenticateUser } from '../../utils/api';
import { setAuthToken } from '../../services/api';

export const login = (email, password) => async dispatch => {
    try {
        dispatch(loginStart());
        const user = await authenticateUser(email, password);
        // setAuthToken(user.token);
        dispatch(loginSuccess(user));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export const logoutUser = () => dispatch => {
    dispatch(logout());
};