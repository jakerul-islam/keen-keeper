"use client";
import { createContext, useState } from 'react';

export const FriendsContext = createContext()

const Provider = ({children}) => {
  const [callList , setCallList]=useState([]);
  const [textList, setTextList]=useState([]);
  const [videoList, setVideoList]= useState([])


  const value = {callList, setCallList,textList,setTextList,videoList,setVideoList}

  return (
    <FriendsContext.Provider value={value}>
      {children}
    </FriendsContext.Provider>
  )
};

export default Provider;

