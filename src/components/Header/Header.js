import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, selectUser } from '../../features/auth/authSelectors';
import { logoutUser } from '../../features/auth/authActions';
import classes from './Header.module.css';

const Header = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              Welcome, {user.name}!
            </li>
            <li>
              <button onClick={() => dispatch(logoutUser())}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;