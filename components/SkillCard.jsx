import React from "react";
import Image from "next/image";

const SkillCard = ({img, name}) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
      <div className="grid grid-cols-2 gap-4 justify-center items-center p-2">
        <div className="m-auto">
          <Image src={img} width={40} height={40}/>
        </div>
        <div>
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
