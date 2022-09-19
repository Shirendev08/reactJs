import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
const Person = (props) => {
  return (
    <>
    <h1>Name :{props.name} </h1>
    <h2> Last Name :{props.lastname}  </h2>
    <h2>Age : {props.age} </h2>
    </>
  )
}




const App = () => {
  const [counter, setCounter] = useState(0);
  
  useEffect(()=>{
    alert("You have changed counter to " + counter)
  }, [counter])
  return (
    <div className="App">
      <button onClick={ ()=> setCounter(prevCount => prevCount-1) }>-1</button>
      <button onClick={ ()=> setCounter(prevCount => prevCount-5) }>-5</button>
      <button onClick={ ()=> setCounter(prevCount => prevCount-10) }>-10</button>
      <h1>{counter}</h1>
      <button onClick={ ()=> setCounter(prevCount => prevCount+1) }>+1</button>
      <button onClick={ ()=> setCounter(prevCount => prevCount+5) }>+5</button>
      <button onClick={ ()=> setCounter(prevCount => prevCount+10) }>+10</button>
      <Person name="John" lastname="Doe" age={2+2}/>
    </div>
    
  );
}

export default App;
