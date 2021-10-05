import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks = ['jasin','deepjol','bappaRaz','Omar Sani','Alamgir'];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      |{
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      <Nayok name ={nayoks[1]}></Nayok>
       <Nayok name ="Sakib Khan"></Nayok>
        <Nayok name ={nayoks.[0]}></Nayok>
         <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
    </div>
  );
}
function MovieCounter(){
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return(
  <div>
    <button onClick={handleClick}>Add Movie</button>
    <h3>Number of Movies: {count}</h3>
    <MovieDisplay movies={count + 10}></MovieDisplay>
    <MovieDisplay movies={count + 15}></MovieDisplay>
    <MovieDisplay movies={count}></MovieDisplay>
    <MovieDisplay movies={count}></MovieDisplay>
  </div>
  )
}
function MovieDisplay(props){
  return <h4>Movies I have acted:{props.movies} </h4>
}
function Nayok(props){
  const nayokStyle ={
    border:'2px solid purple',
    margin:'20px'
  }
   return(
   <div style = {nayokStyle}>
  <h1> Ami Nayak-{props.name}</h1>
  <h3>I have done 5 movies in {props.age}years</h3>
  </div>
   )
}

export default App;
