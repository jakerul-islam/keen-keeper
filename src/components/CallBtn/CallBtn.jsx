'use client'
import { FriendsContext } from '@/ContextApi/Provider';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FiPhone } from 'react-icons/fi';
import { toast } from 'react-toastify';

const CallBtn = ({friend}) => {

    const {callList , setCallList}=useContext(FriendsContext)

    const callListHandle=(friend)=>{

      setCallList([...callList,{
        ...friend , time: new Date().toLocaleDateString('en-US', {
             month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Dhaka' 
        })
      }])

      toast.success(`${friend.name} is called`)

    }

    return  <a onClick={()=>callListHandle(friend)} className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-100">
              <FiPhone size={20} />
              <span className="mt-1 text-sm">Call</span>
            </a>
};

export default CallBtn;