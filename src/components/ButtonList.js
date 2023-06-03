import React from 'react';
import Button from './Button';
const ButtonList = () => {
  let buttons = [
    'All',
    'Gaming',
    'Music',
    'Mixes',
    'React',
    'Cinema',
    'Comedy',
    'Cricket',
    'Film',
    'Computer programming',
    'Namaste React',
    'Namaste Javascript',
  ];
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
