import { useState } from 'react';
import './App.css';

function App() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState(0)

  function laske(e){
    e.preventDefault()
    const tulos = weight / (height * height)
    setBmi(tulos)
  }

  return (
    <div id="content">
      <h2>Calculating body mass index</h2>
      <form onSubmit={laske}>
        <div>
          <label>Height</label>
          <input value={height} onChange={e => setHeight(e.target.value)}/>
        </div>
        <div>
          <label>Weight</label>
          <input value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>BMI</label>
          <output>{bmi.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
