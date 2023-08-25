import React, { useState } from 'react';
import Button from './Button';
import { BUTTON_NAMES } from '../../utils/constants';
const ButtonList = () => {
  const [buttons, setButtons] = useState(BUTTON_NAMES);
  return (
    <div className='grid xl:grid-cols-12 md:grid-cols-6 sm:grid-cols-4 gap-1'>
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
