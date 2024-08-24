import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import UserProfile from './components/UserProfile/UserProfile';
import { useSelector } from 'react-redux';

function App() {

  const showUser = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!showUser && <Auth />}
      {showUser && <UserProfile />}
    </>
  );
}

export default App;
