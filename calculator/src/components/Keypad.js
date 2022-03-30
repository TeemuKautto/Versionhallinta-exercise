import React, { useState } from 'react';
import Button from './Button.js';
const Keypad = (props) => {
  const keyArray = ['+', '-', '*', '/', 'C', '='];
  for (let i = 0; i < 10; i++) {
    keyArray.push(i);
  }
  return (
    <>
      {keyArray.map((key, index) => {
        return (
          <Button
            key={index}
            value={key}
            inputsetter={props.inputsetter}
          ></Button>
        );
      })}
    </>
  );
};

export default Keypad;
