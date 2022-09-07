import './App.css';
import {useSelector} from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter); 

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={increment}></button>
      <button onClick={decrement}></button>
    </div>
  );
}

export default App;
