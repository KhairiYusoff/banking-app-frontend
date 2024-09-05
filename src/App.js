import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <Header />
        <Content style={{ padding: '50px' }}>
          <AppRoutes />
        </Content>
      </Layout>
    </Router>
  );
}

export default App;