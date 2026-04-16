import Image from "next/image";
import Link from "next/link";
import React from "react";
const statusObj={
"on-track":"bg-[#244D3F]",
"almost due": "bg-[#EFAD44]",
"overdue": "bg-[#EF4444]"
}
const FriendsCard = ({friend}) => {

    const {id, name,picture , days_since_contact,tags,status}=friend;

    
  return (
    
      <Link href={`/${id}`} className="card bg-base-100 h-[300px] shadow-sm border">
        <figure className="px-10 pt-10">
       <Image className="rounded-full" src={picture} alt={name} width={100} height={100}/>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="text-[#64748B] text-[12px]">
           {days_since_contact}d ago
          </p>

        <div className="grid grid-cols-3 gap-2">
            {
            tags.map((tag,index)=><div  key={index} className="badge bg-green-200 ">{tag}</div>)
        }
        </div>

          <div className={`badge text-white ${statusObj[status]} `}>{status}</div>

       
        </div>
      </Link>
    
  );
};

export default FriendsCard;
