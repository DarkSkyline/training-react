import React, {useState, UseState} from 'react';
import Tweet from './Tweet';

function App(){

  const [isRed, setRed] = useState(false)
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count +1);
    setRed(!isRed);
  }

  const [users, SetUsers] = useState([
    {name: 'FF', message: 'Hello World By FF'},
    {name: 'FDDF', message: 'Hello World By 1312'},
    {name: 'DDF', message: 'Hello World By 1vdF'}
  ]);

  return(
    <div className="app">
      <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      {users.map(user =>(
        <Tweet name={user.name} message={user.message} likes="55"/>
      ))}
    </div>
  );
}

export default App;