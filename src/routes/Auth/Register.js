import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../features/auth/authActions'; 
import { selectAuthLoading, selectAuthError } from '../../features/auth/authSelectors';
import classes from './Auth.module.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const dispatch = useDispatch();
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const registerHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    dispatch(register(email, password)); 
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={registerHandler}>
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
          <div className={classes.control}>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className={classes.error}>{error}</p>}
          <button disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Register;
