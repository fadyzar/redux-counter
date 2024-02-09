import { useSelector, useDispatch } from 'react-redux'; 
import { counterActions } from '../store/store'; 

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter); 
  const show = useSelector((state) => state.counter.showCounter); 

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      {show && <div>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 10</button>
      </div>
      <div>
        <button onClick={toggleHandler}>Toggle Counter</button>
      </div>
    </main>
  );
};
