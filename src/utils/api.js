import { userAccounts } from '../data/dummyData';

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
        balance: parseFloat(account.balance.toFixed(2)), // Ensure balance is always to 2 decimal places
        lastUpdated: new Date().toISOString() // Add a lastUpdated field
    }));

    return processedAccounts;
};