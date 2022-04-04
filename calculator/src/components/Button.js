import React from 'react';

const Button = (props) => {

  const {cssclass, value, clickhandler} = props

  return (
    <button className={cssclass} onClick={() => clickhandler(value)}>
      {value}
    </button>
  );
};

export default Button;
