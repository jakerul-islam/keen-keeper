import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="hero bg-base-100">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="py-6 text-[#64748B]">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the <br/> relationships that matter most.
            </p>
            <button className="btn bg-[#244D3F] text-white"> + Add a Friend</button>
          </div>
        </div>
        
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-base-200 p-8 text-center">
        <h2 className="font-bold text-8 ">10</h2>
        <p className="text-[18px] text-[#64748B]">Total Friends</p>
      </div>
      <div className="bg-base-200 p-8 text-center">
        <h2 className="font-bold text-8 ">3</h2>
        <p className="text-[18px] text-[#64748B]">On Track</p>
      </div>
      <div className="bg-base-200 p-8 text-center">
        <h2 className="font-bold text-8 ">6</h2>
        <p className="text-[18px] text-[#64748B]">Need Attention</p>
      </div>
      <div className="bg-base-200 p-8 text-center">
        <h2 className="font-bold text-8 ">12</h2>
        <p className="text-[18px] text-[#64748B]">Interactions This Month</p>
      </div>
      
    </div>


    </div>
  );
};

export default Banner;
