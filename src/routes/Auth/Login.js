import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/auth/authActions';
import { selectAuthLoading, selectAuthError } from '../../features/auth/authSelectors';
import classes from './Auth.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className={classes.error}>{error}</p>}
          <button disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;