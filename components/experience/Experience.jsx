import React from 'react'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <div className=" w-full  h-auto text-center mt-6 md:mt-[100px] " id="experience_page">
    <div className="max-w-[1240px] mx-auto flex-col justify-center h-full">
        <h2 className="capitalize text-[#273c75] font-bold tracking-widest mb-4">
          Experience
        </h2>
        <ExperienceCard/>
    </div>
  </div>
  )
}

export default Experience