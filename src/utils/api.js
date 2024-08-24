export const authenticateUser = async (email, password) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (email === 'user@example.com' && password === 'password') {
        return { id: 1, name: 'John Doe', email };
    }
    throw new Error('Invalid credentials');
};