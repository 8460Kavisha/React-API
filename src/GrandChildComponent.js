import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(30);

  const handleButtonClick = () => {
    setName('Jane');
    setAge(25);
  };

  return (
    <div>
       <ChildComponent
        name={name}
        age={age}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default ParentComponent;
