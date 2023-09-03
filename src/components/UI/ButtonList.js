import React, { useEffect, useState } from 'react';
import Button from './Button';
import { BUTTON_NAMES } from '../../utils/constants';
import { useSelector } from 'react-redux';
const ButtonList = () => {
  const buttonClick = useSelector((store) => store.video.clickCount);
  const [buttons, setButtons] = useState(BUTTON_NAMES);
  const [currentBtn, setCurrentBtn] = useState(0);
  useEffect(() => {
    let currenBtnList = localStorage.getItem('currentButton');
    setCurrentBtn(currenBtnList);
  }, [buttonClick]);
  return (
    <div className='grid xl:grid-cols-12 md:grid-cols-6 sm:grid-cols-4 gap-1'>
      {buttons.map((btn, index) => (
        <Button
          index={index}
          setCurrentBtn={setCurrentBtn}
          id={btn.id}
          type='buttton'
          key={btn.id}
          className={`m-1 text-xs p-1 px-2 ${
            currentBtn && currentBtn == index + 1
              ? ' bg-gray-300 hover:bg-gray-300 '
              : 'bg-gray-100'
          } rounded-lg`}
          name={btn.name}
        />
      ))}
    </div>
  );
};

export default ButtonList;
