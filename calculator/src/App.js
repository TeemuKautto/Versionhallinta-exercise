import { useState } from 'react';
import './App.css';
import Keypad from './components/Keypad.js';
const App = () => {
  const [inputs, setInputs] = useState(['']);
  const operate = (num1, num2, oper) => {
    switch(oper){
      case '+':
        num1 = num1 + parseFloat(num2)
        break;
      case '-':
        num1 = num1 - parseFloat(num2)
        break;
      case '/':
        num1 = num1 / parseFloat(num2)
        break;
      case '*':
        num1 = num1 * parseFloat(num2)
        break;
      case '':
        num1=num2
        break;
      default:
        break;
    }
    return num1
  }
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
  const calculate = () => {
    let number = ''
    let operation = ''
    let result = ''
    const oper = ['+', '-', '*' ,'/']
    inputs.forEach((d) => {
      if(oper.find((e) => e === d) === undefined){
        number += d
      } else if (result === ''){
        result = parseFloat(number)
        operation = d
        number = ''
      } else {
        result = operate(result, number, operation)
        operation = d
        number = ''
      }
    })
    result = operate(result, number, operation)
    setInputs([result.toString()])
  }
  return (
    <div className='App'>
      <p>Calculator</p>
      <p>{inputs}</p>
      <Keypad inputsetter={handleClick} calculate={calculate}/>
    </div>
  );
};
export default App;