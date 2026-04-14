import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="hero bg-base-100 min-h-screen">
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
    </div>
  );
};

export default Banner;
