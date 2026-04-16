'use client'
import { FriendsContext } from '@/ContextApi/Provider';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { toast } from 'react-toastify';

const TextBtn = ({friend}) => {

  const {textList, setTextList}=useContext(FriendsContext);

  const textListHandle = (friend)=>{
    setTextList([...textList,{
      ...friend,  time: new Date().toLocaleDateString('en-US', {
            month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Dhaka' 
        })
    }])
    toast.success(`${friend.name} is text`)
  }
    return  <a onClick={()=> textListHandle(friend)} className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-100">
              <FiMessageSquare size={20} />
              <span className="mt-1 text-sm">Text</span>
            </a>
};

export default TextBtn;