import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  console.log(counter)
  const showCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => dispatch(counterActions.increment())}>Increment</button>
        <button onClick={() => dispatch(counterActions.increase(10))}>Increment by 10</button>
        <button onClick={() => dispatch(counterActions.decrement())}>Decrement</button>
      </div>
      <button onClick={() => dispatch(counterActions.toggleCounter())}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

