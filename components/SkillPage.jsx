import React from "react";
import mySkill from "../data/skillData";
import SkillCard from "./SkillCard";

const SkillPage = () => {
  return (
    <div className="w-full text-center my-8 mb-0 sm: mt-[700px] md:mt-[100px]" id="skill_page">
      <div className="max-w-[1240px] mx-auto flex-col justify-center h-full">
          <h2 className="capitalize text-[#273c75] font-bold tracking-widest mb-4">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 sm: h-96 overflow-scroll md:h-auto overscroll-none sm:mt-8">
              {
                mySkill.map((item)=>{
                  return(
                    <SkillCard img = {item.img} name = {item.name} key={item.name}/>
                  )
                })
              }
          </div>
      </div>
    </div>
  );
};

export default SkillPage;
