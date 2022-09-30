import { useState } from 'react';
import './App.css';

function App() {

  const [mailit, setmailit] = useState('')
  const [kilometrit, setKilometrit] = useState('')

  function laske(e){
    e.preventDefault()
    const tulos = mailit* 1.609
    setKilometrit(tulos)
  }

  return (
    <div id="content">
      <h3>Mailit kilometreiksi</h3>
      <form onSubmit={laske}>
        <div>
          <label>Mailit</label>
          <input value={mailit} onChange={e => setmailit(e.target.value)}/>
        </div>
        <div>
          <label>Kilometrit</label>
          <output>{kilometrit }</output>
        </div>
        <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
