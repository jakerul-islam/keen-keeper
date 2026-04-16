'use client'
import { FriendsContext } from '@/ContextApi/Provider';
import Image from 'next/image';
import React, { useContext } from 'react';
import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'

const TimelinePage = () => {

    const { callList, videoList, textList } = useContext(FriendsContext);

    return (
        <div className='p-4'>
            <h2 className='text-xl font-bold mb-4'>This Is Timeline Page</h2>

            {/* Call List */}
            {callList.length > 0 && callList.map((call) => (
                <div key={call.id} className='card bg-base-100 shadow-2xl my-4 p-6'>
                    <div className='flex items-center gap-3'>
                        {/* Icon */}
                        <Image src={callImg} alt='call img' width={24} height={24} />

                        {/* Text */}
                        <div>
                            <h2 className='font-bold'>
                                Call <span className='font-normal text-gray-500'>with {call.name}</span>
                            </h2>
                            <p className='text-sm text-gray-400'>{call.time}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Video List */}
            {videoList.length > 0 && videoList.map((video) => (
                <div key={video.id} className='card bg-base-100 shadow-2xl my-4 p-6'>
                    <div className='flex items-center gap-3'>
                        <Image src={videoImg} alt='video img' width={24} height={24} />
                        <div>
                            <h2 className='font-bold'>
                                Video <span className='font-normal text-gray-500'>with {video.name}</span>
                            </h2>
                            <p className='text-sm text-gray-400'>{video.time}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Text List */}
            {textList.length > 0 && textList.map((text) => (
                <div key={text.id} className='card bg-base-100 shadow-2xl my-4 p-6'>
                    <div className='flex items-center gap-3'>
                        <Image src={textImg} alt='text img' width={24} height={24} />
                        <div>
                            <h2 className='font-bold'>
                                Text <span className='font-normal text-gray-500'>with {text.name}</span>
                            </h2>
                            <p className='text-sm text-gray-400'>{text.time}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* if All card empty */}
            {callList.length === 0 && videoList.length === 0 && textList.length === 0 && (
                <p className='text-gray-400 text-center mt-10'>No history Available</p>
            )}
        </div>
    );
};

export default TimelinePage;