import React from 'react';
const Button = (props) => {
  const {cssclass, value, clickhandler} = props
  return (
    <button className={cssclass} onClick={
      value === '=' ? () => clickhandler[0]() : () => clickhandler[1](value)}>
      {value}
    </button>
  );
};
export default Button;