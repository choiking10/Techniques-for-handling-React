import logo from './logo.svg';
import './App.css';
import Info from './Info';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <Info />}
    </div>
  );
}

export default App;
