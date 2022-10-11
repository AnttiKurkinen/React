import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [joke, setJoke] = useState('')

  const URL = 'http://localhost:3001/'

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setJoke(response.data.joke)
      }).catch(error => {
        console.log(error)
      })
  }, [])
  

  return (
    <div>
      <h3>Tosi hyvä vitsi</h3>
      <p>{joke}</p>
    </div>
  );
}

export default App;
