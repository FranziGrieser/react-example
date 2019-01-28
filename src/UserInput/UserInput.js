import React from 'react';
import './Input.css';

const userInput = (props) => {
  return (
    <div className="other">
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default userInput;
