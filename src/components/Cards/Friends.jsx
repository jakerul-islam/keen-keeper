import React from 'react';
import FriendsCard from '../ui/FriendsCard';

const Friends =async () => {

    const res = await fetch('https://keen-keeper-five.vercel.app/Data.json',{
        cache:'no-store'
    })
    const friends = await res.json()
    return (
        <div className='my-10 container mx-auto'>
        <h2 className='font-bold text-3xl mb-2.5'>Friends..</h2>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
    
        {
            friends.map((friend)=><FriendsCard key={friend.id} friend={friend}/>)
        }    
</div>
        </div>
    );
};

export default Friends;