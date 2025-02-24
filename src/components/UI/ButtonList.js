import React, { useEffect, useState } from "react";
import Button from "./Button";
import { BUTTON_NAMES } from "../../utils/constants";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const buttonClick = useSelector((store) => store.video.clickCount);
  const [buttons, setButtons] = useState(BUTTON_NAMES);
  const [currentBtn, setCurrentBtn] = useState(0);

  useEffect(() => {
    let currenBtnList = localStorage.getItem("currentButton");
    setCurrentBtn(currenBtnList);
  }, [buttonClick]);

  return (
    <div className="flex flex-wrap gap-2 p-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-transparent">
      {buttons.map((btn, index) => (
        <Button
          index={index}
          setCurrentBtn={setCurrentBtn}
          id={btn.id}
          type="button"
          key={btn.id}
          className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ease-in-out
            ${
              currentBtn && currentBtn == index + 1
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100"
            }`}
          name={btn.name}
        />
      ))}
    </div>
  );
};

export default ButtonList;
