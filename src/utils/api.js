import { userAccounts } from '../data/dummyData';
import api from '../services/api';

export const authenticateUser = async (email, password) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (email === 'user@example.com' && password === 'password') {
        return { id: 1, name: 'John Doe', email };
    }
    throw new Error('Invalid credentials');
};

export const fetchUserAccounts = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate potential server-side processing or filtering
    const processedAccounts = userAccounts.map(account => ({
        ...account,
        balance: parseFloat(account.balance.toFixed(2)),
        lastUpdated: new Date().toISOString()
    }));

    return processedAccounts;
};


// export const authenticateUser = async (email, password) => {
//   const response = await api.post('/auth/login', { email, password });
//   return response.data;
// };

// export const fetchUserAccounts = async () => {
//   const response = await api.get('/accounts');
//   return response.data;
// };
