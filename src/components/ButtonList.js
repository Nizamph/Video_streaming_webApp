import React, { useState } from 'react';
import Button from './Button';
import { BUTTON_NAMES } from '../utils/constants';
const ButtonList = () => {
  const [buttons, setButtons] = useState(BUTTON_NAMES);
  return (
    <div className='flex'>
      {buttons.map((btnName, index) => (
        <Button
          key={index}
          className='m-1 p-1 px-2 bg-gray-300 rounded-lg'
          name={btnName}
        />
      ))}
    </div>
  );
};

export default ButtonList;
