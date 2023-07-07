import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import CounterPractice from './components/CounterPractice';
import { useSelector } from 'react-redux';
import Antdesign from './components/Antdesign';

function App() {

  const showUser = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!showUser && <Auth />}
      {showUser && <UserProfile />}
      <Counter />
      <CounterPractice />
      <Antdesign />
    </>
  );
}

export default App;
