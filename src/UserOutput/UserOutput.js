import React from 'react';
import './User.css'
const userOutput = (props) => {
  return (
    <div className="cart">
      <p  onClick={props.changed}>The name of the user is {props.name}. </p>
      <p>{props.name}'s hobby is {props.hobby}.  </p>
    </div>
  )
};

export default userOutput;
