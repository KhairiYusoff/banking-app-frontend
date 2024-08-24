import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from './features/auth/authSelectors';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import UserProfile from './components/UserProfile/UserProfile';
import AccountsList from './components/Accounts/AccountsList';
import { Layout } from 'antd';

const { Content } = Layout;

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Layout>
      <Header />
      <Content style={{ padding: '50px' }}>
        {!isAuthenticated && <Auth />}
        {isAuthenticated && (
          <>
            <UserProfile />
            <AccountsList />
          </>
        )}
      </Content>
    </Layout>
  );
}

export default App;