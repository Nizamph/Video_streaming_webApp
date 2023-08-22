import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sideBarMenus, sideBarMenuExplore } from '../utils/constants';
import SidebarMainMenus from './SidebarMainMenus';

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log('myCurrentLocation', location);
  const [sideBarMenu] = useState(sideBarMenus);
  return (
    <div
      className={`flex w-52 p-1 overflow-x-hidden flex-col scrollbar-none max-h-[91vh] overflow-y-scroll z-50 mt-[50px] fixed hover:scrollbar-thin scrollbar-thumb-gray-300  bg-white`}>
      {sideBarMenu?.map((itm) => (
        <SidebarMainMenus
          name={itm.name}
          url={itm.url}
        />
      ))}
    </div>
  );
};

export default SideBar;
