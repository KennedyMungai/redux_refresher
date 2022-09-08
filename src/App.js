import './App.css';
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter); 
  const dispatch = useDispatch();

  const increment = () => {

  };

  const decrement = () => {

  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Remove</button>
    </div>
  );
}

export default App;
