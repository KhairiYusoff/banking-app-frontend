import { fetchAccountsStart, fetchAccountsSuccess, fetchAccountsFailure } from './accountsSlice';
import { fetchUserAccounts } from '../../utils/api';

export const getAccounts = () => async dispatch => {
    try {
        dispatch(fetchAccountsStart());
        const accounts = await fetchUserAccounts();
        dispatch(fetchAccountsSuccess(accounts));
    } catch (error) {
        dispatch(fetchAccountsFailure(error.message));
    }
};