import React from 'react';
import Chat from './Chat';
import { generateName } from '../utils/helper';
import { getMessage } from '../utils/helper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../reduxStore/chatSlice';
import demoProfile from '../youtubeIcons/blank-profile-picture-gec5b7f001_1280.png';
const ChatList = () => {
  const dispatch = useDispatch();
  const getLiveChatDetails = useSelector((store) => store.chat.messages); //[{name:"nizam",message:"hai"}]
  useEffect(() => {
    const id = setInterval(() => {
      dispatch(
        addMessages({
          name: generateName(),
          message: getMessage(15),
          image: demoProfile,
        })
      );
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      {getLiveChatDetails.map((chat, i) => (
        <Chat
          key={i}
          name={chat.name}
          message={chat.message}
          image={chat.image}
        />
      ))}
    </>
  );
};

export default ChatList;
