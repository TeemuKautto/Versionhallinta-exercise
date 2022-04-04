import { useState } from 'react';
import './App.css';
import Keypad from './components/Keypad.js';
const App = () => {
  const [inputs, setInputs] = useState(['1', '+', '2']);

  const handleClick = (d) => {
    const oper = ['+', '-', '*' ,'/']
    if (d === 'C')
    {
      setInputs((prevInputs) => {
        const temp = [...prevInputs]
        temp.pop()
        return temp
      })
    } else if(oper.find((e) => e === d) === undefined) {
      setInputs((prevInputs) => [...prevInputs, d]);
    } else {
      setInputs((prevInputs) => {
        const val = prevInputs[prevInputs.length - 1]
        if(oper.find((e) => e === val) === undefined) {
          return ([...prevInputs, d])
        } else {
          alert('you cant do multiple subsequent operations')
          return([...prevInputs])
        }
      })
    }
  }

  return (
    <div className='App'>
      <p>Calculator</p>
      <p>{inputs}</p>
      <Keypad inputsetter={handleClick}/>
    </div>
  );
};

export default App;
