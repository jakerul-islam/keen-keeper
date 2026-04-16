'use client'
import { FriendsContext } from '@/ContextApi/Provider';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'

const TimelinePage = () => {

    const { callList, videoList, textList } = useContext(FriendsContext);
    const [filter, setFilter] = useState('all'); 
    
    const allList = [
        ...callList.map(item => ({ ...item, type: 'Call', img: callImg })),
        ...videoList.map(item => ({ ...item, type: 'Video', img: videoImg })),
        ...textList.map(item => ({ ...item, type: 'Text', img: textImg })),
    ];

    
    const filteredList = filter === 'all'
        ? allList
        : allList.filter(item => item.type.toLowerCase() === filter.toLowerCase());

    return (
        <div className='p-8'>
            <h2 className='text-3xl font-bold mb-6'>Timeline</h2>

          
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className='select select-bordered w-64 mb-6'>
                <option value='all'>Filter timeline</option>
                <option value='Call'>Call</option>
                <option value='Text'>Text</option>
                <option value='Video'>Video</option>
            </select>

            {/* List */}
            {filteredList.length > 0 ? (
                filteredList.map((item) => (
                    <div key={`${item.type}-${item.id}`} className='card bg-base-100 shadow my-3 p-5'>
                        <div className='flex items-center gap-3'>
                            <Image src={item.img} alt={item.type} width={28} height={28} />
                            <div>
                                <h2 className='font-bold'>
                                    {item.type} <span className='font-normal text-gray-500'>with {item.name}</span>
                                </h2>
                                <p className='text-sm text-gray-400'>{item.time}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className='text-gray-400 text-center mt-10'>No history Available</p>
            )}
        </div>
    );
};

export default TimelinePage;