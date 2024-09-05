import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Layout } from 'antd';

const { Content } = Layout;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Content style={{ textAlign: 'center' }}>
        <h1>Welcome to Your Bank</h1>
        <p>Manage your accounts, transfer funds, and more</p>
        <Button 
          type="primary" 
          style={{ margin: '10px' }} 
          onClick={() => navigate('/login')}
        >
          Login
        </Button>
        <Button 
          type="default" 
          style={{ margin: '10px' }} 
          onClick={() => navigate('/register')}
        >
          Register
        </Button>
      </Content>
    </Layout>
  );
};

export default Home;
