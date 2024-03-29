import React from 'react';

const Shimmer = () => {
  return (
    <div className='m-2  p-2 w-64 flex flex-col gap-2 mx-3'>
      <div className='w-64 rounded-lg h-40 bg-slate-200'></div>
      <div className='flex justify-start items-center w-64 '>
        <div>
          <div className='w-11 h-11 bg-slate-200 rounded-full'></div>
        </div>
        <div className='flex flex-col w-80 gap-2 items-start justify-center'>
          <div className=' w-4/6 ml-4  bg-slate-200 h-4'></div>
          <div className='w-4/6 ml-4  bg-slate-200 h-4'></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
