import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import accountsReducer from '../features/accounts/accountsSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    accounts: accountsReducer
});

export default rootReducer;