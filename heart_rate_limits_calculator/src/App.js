import { useState } from 'react';
import './App.css';

function App() {

  const [age, setAge] = useState(0)
  const [lower, setLower] = useState(0)
  const [upper, setUpper] = useState(0)

  function laske(e){
    e.preventDefault()
    const lowerResult = (220 - age) * 0.65
    const upperResult = (220 - age) * 0.85
    setLower(lowerResult)
    setUpper(upperResult)
  }

  return (
    <div id="content">
      <h2>Heart rate limits calculator</h2>
      <form onSubmit={laske}>
        <div>
          <label>Age</label>
          <input value={age} onChange={e => setAge(e.target.value)}/>
        </div>
        <div>
          <label>Heart rate limits</label>
          <output>{lower}-{upper}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
