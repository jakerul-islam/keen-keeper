import Image from "next/image";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
import { RiDeleteBin4Line, RiNotificationSnoozeFill } from "react-icons/ri";
import { FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";
import CallBtn from "@/components/CallBtn/CallBtn";
import TextBtn from "@/components/TextBtn/TextBtn";
import VideoBtn from "@/components/VideoBtn/VideoBtn";

const statusObj = {
  "on-track": "bg-[#244D3F]",
  "almost due": "bg-[#EFAD44]",
  overdue: "bg-[#EF4444]",
};

const FriendDetailsPage = async ({ params }) => {
  const { friendId } = await params;

  const res = await fetch("https://keen-keeper-five.vercel.app/Data.json");
  const friends = await res.json();

  const friend = friends.find((f) => f.id == friendId);

  if (!friend) {
    return <p className="text-center mt-20">Friend not found</p>;
  }

  const { name, picture, days_since_contact, status, tags, bio, goal, next_due_date, email } = friend;

  return (
    <div className="container mx-auto px-4 my-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <div className="card bg-base-100 shadow-xl mb-4">
          <figure className="pt-6">
            <Image className="rounded-full" src={picture} alt={name} width={100} height={100} />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>

            <div className={`badge text-white ${statusObj[status]} capitalize`}>
              {status}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {tags.map((tag, index) => (
                <span key={index} className="badge bg-green-200 text-black">{tag}</span>
              ))}
            </div>

            <p className="text-sm text-gray-500 italic mt-2">{bio}</p>
            <p className="text-xs text-gray-400">Preferred: {email}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="card bg-base-100 p-4 shadow flex items-center">
            <p className="flex items-center gap-2">
              <RiNotificationSnoozeFill /> Snooze 2 Weeks
            </p>
          </div>

          <div className="card bg-base-100 p-4 shadow flex items-center">
            <p className="flex items-center gap-2">
              <HiOutlineArchiveBoxArrowDown /> Archive
            </p>
          </div>

          <div className="card bg-base-100 p-4 shadow flex items-center">
            <p className="flex items-center gap-2 text-red-500">
              <RiDeleteBin4Line /> Delete
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow text-center py-6">
            <h2 className="text-3xl font-bold">{days_since_contact}</h2>
            <p className="text-gray-500 text-sm">Days Since Contact</p>
          </div>

          <div className="card bg-base-100 shadow text-center py-6">
            <h2 className="text-3xl font-bold">{goal}</h2>
            <p className="text-gray-500 text-sm">Goal (Days)</p>
          </div>

          <div className="card bg-base-100 shadow text-center py-6">
            <h2 className="text-lg font-bold">{next_due_date}</h2>
            <p className="text-gray-500 text-sm">Next Due</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Relationship Goal</h3>
            <button className="btn btn-xs">Edit</button>
          </div>
          <p className="text-gray-600 mt-2">
            Connect every <span className="font-bold">{goal} days</span>
          </p>
        </div>

        <div className="card bg-base-100 shadow p-4">
          <h3 className="font-semibold mb-3">Quick Check-In</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
           <CallBtn friend={friend}/>

           <TextBtn friend={friend}/>

           <VideoBtn friend={friend}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;