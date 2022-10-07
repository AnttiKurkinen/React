import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const names = ['Jussi', 'Mauno', 'Lauri', 'Kalle',2];
    setItems(names);
    console.log(items);
  }, [])

  return (
    <div style={{margin: '30px'}}>
      <h3>Names</h3>
      <ul>
        {items.map(item => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
