
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';
import counterPracticeReducer from './counterPractice';


const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer, counterPractice: counterPracticeReducer }
});


export default store;