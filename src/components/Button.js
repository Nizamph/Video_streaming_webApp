import React from 'react';

const Button = ({ type, onClick, name, className }) => {
  return (
    <>
      <button
        className={className}
        type={type}
        onClick={onClick}>
        {name}
      </button>
    </>
  );
};

export default Button;
