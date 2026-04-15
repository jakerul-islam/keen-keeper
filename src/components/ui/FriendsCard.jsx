import Image from "next/image";
import React from "react";

const FriendsCard = ({friend}) => {

    const {name,picture , days_since_contact,tags,status}=friend;

    if(status==='overdue'){
        
    }
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure className="px-10 pt-10">
       <Image className="rounded-full" src={picture} alt={name} width={100} height={100}/>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="text-[#64748B] text-[12px]">
           {days_since_contact}d ago
          </p>

        <div className="flex gap-2">
            {
            tags.map((tag,index)=><div  key={index} className="badge bg-green-200 ">{tag}</div>)
        }
        </div>

          {/* <div className="badge bg-green-200">{status}</div> */}

       
        </div>
      </div>
    </div>
  );
};

export default FriendsCard;
