import React from 'react';
import FriendsCard from '../ui/FriendsCard';

const Friends =async () => {

    const res = await fetch('http:localhost:3000/Data.json')
    const friends = await res.json()
    return (
        <div>
        <h2 className='font-bold text-3xl mb-2.5'>Friends</h2>

        {
            friends.map((friend)=><FriendsCard key={friend.id} friend={friend}/>)
        }    
        </div>
    );
};

export default Friends;