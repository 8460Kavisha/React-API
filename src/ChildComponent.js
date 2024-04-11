import React from 'react';

const ChildComponent = (props) => {
  const { name, age, onButtonClick } = props;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={onButtonClick}>Click to Change!</button>
    </div>
  );
}

export default ChildComponent;
