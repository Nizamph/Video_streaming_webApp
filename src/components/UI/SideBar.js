import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sideBarMenus, sideBarMenuExplore } from '../../utils/constants';
import SidebarMainMenus from './SidebarMainMenus';

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sideBarMenu] = useState(sideBarMenus);

  const menuFromLocalStorage = localStorage.getItem('currentMenu');
  const [currentId, setCurrentId] = useState(menuFromLocalStorage);
  // useEffect(() => {
  //   // Event handler to clear local storage
  //   const handleBeforeUnload = () => {
  //     localStorage.clear('currentMenu');
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);
  console.log('currentId', currentId);
  return (
    <div
      className={`flex w-52 p-1 overflow-x-hidden flex-col scrollbar-none max-h-[93vh] overflow-y-scroll z-50 mt-[50px] fixed hover:scrollbar-thin scrollbar-thumb-gray-300  bg-white`}>
      {sideBarMenu?.map((itm, index) => (
        <SidebarMainMenus
          id={itm.id}
          name={itm.name}
          setCurrentId={setCurrentId}
          index={index}
          url={itm.url}
          currentId={currentId}
        />
      ))}
    </div>
  );
};

export default SideBar;
