import { userAccounts } from '../data/dummyData';
import api from '../services/api';

// Simulate user authentication for login
export const loginUser = async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call delay
    if (email === 'user@example.com' && password === 'password') {
        return { id: 1, name: 'John Doe', email };
    }
    throw new Error('Invalid credentials');
};

// Simulate user registration
export const registerUser = async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call delay
    if (email === 'newuser@example.com' && password === 'newpassword') {
        return { id: 2, name: 'Jane Doe', email };
    }
    throw new Error('Registration failed, user already exists');
};

// Simulate fetching user accounts
export const fetchUserAccounts = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call delay

    // Simulate server-side processing or filtering
    const processedAccounts = userAccounts.map(account => ({
        ...account,
        balance: parseFloat(account.balance.toFixed(2)),
        lastUpdated: new Date().toISOString(),
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
