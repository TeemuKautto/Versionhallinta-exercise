import React, { useState } from 'react';

const Button = (props) => {
  const clickHandler = () => {
    props.inputsetter((prevInputs) => [...prevInputs, props.value]);
  };
  return <button onClick={clickHandler}>{props.value}</button>;
};

export default Button;
