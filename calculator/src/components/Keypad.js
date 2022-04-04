import React, { useState } from 'react';
import Button from './Button.js';
const Keypad = (props) => {
  const keyArray = [
    '1',
    '2',
    '3',
    '+',
    '4',
    '5',
    '6',
    '-',
    '7',
    '8',
    '9',
    '/',
    'C',
    '0',
    '=',
    '*',
  ];
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  return (
    <>
      {keyArray.map((key, index) => {
        return (
          <Button
            cssclass={nums.includes(key) ? 'number' : 'action'}
            key={index}
            value={key}
            clickhandler={[props.calculate, props.inputsetter]}
          ></Button>
        );
      })}
    </>
  );
};
export default Keypad;