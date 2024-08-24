import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from './features/auth/authSelectors';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
    </>
  );
}

export default App;