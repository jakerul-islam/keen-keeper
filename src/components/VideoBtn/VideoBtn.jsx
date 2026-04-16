'use client'
import { FriendsContext } from '@/ContextApi/Provider';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FiVideo } from 'react-icons/fi';

const VideoBtn = ({friend}) => {

  const {videoList, setVideoList}=useContext(FriendsContext);

  const videoListHandle = (friend) => {
    setVideoList([...videoList, {
        ...friend,
        time: new Date().toLocaleDateString('en-US', {
            month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Dhaka' 
        })
    }]);
}
    return  <a  onClick={()=>videoListHandle(friend)} className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-100">
              <FiVideo size={20} />
              <span className="mt-1 text-sm">Video</span>
            </a>
};

export default VideoBtn;