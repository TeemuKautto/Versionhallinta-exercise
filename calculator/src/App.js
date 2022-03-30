import { useState } from 'react';
import './App.css';
import Keypad from './components/Keypad.js';
const App = () => {
  const [result, setResult] = useState(3);
  const [inputs, setInputs] = useState(['1', '+', '2']);

  return (
    <div className='App'>
      <p>Calculator</p>
      <p>{inputs}</p>
      <Keypad inputsetter={setInputs} />
    </div>
  );
};

export default App;
