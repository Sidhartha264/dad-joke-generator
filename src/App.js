import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [joke, setJoke] = useState('');

  const fetchDadJoke = async () => {
    try {

    const fetchJoke = await axios.get('https://icanhazdadjoke.com/', 
    {headers: {accept: 'application/json'}})
    setJoke(fetchJoke.data.joke);
  
    } catch(err) {
      console.log('There was an Error: ', err);
    }
  }

  const clearJoke = () => {
    setJoke('');
  }

  return (
    <div>
      <h1>Welcome to the Dad Joke Generator</h1>
      <button  onClick={fetchDadJoke}>Get a joke!</button>
      <button onClick={clearJoke}>Clear</button>
      <p>{joke}</p>
    </div>
  );
}

export default App;
