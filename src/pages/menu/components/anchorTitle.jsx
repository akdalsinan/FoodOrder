import React from "react";

const AnchorTitle = ({ foodName, img }) => {
  return (
    <div className="mt-5 ">
      <img src={img} className=" h-[60px]  " alt="" />
      <h1 className=" font-dancing text-2xl">{foodName}</h1>
    </div>
  );
};

export default AnchorTitle;
