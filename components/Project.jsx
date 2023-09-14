import React from 'react'
import projectData from '../data/projectData'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className='w-full h-auto text-center mb-8 my-8 mt-8'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <h2 className="capitalize text-[#273c75] font-bold tracking-widest mb-16">
                Projects
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    projectData.map((item)=>{
                        return(
                            <ProjectCard key={item.key} projectImg={item.img} projectDesc={item.desc} projectTech={item.tech}/>
                        )
                    })
                }

            </div>
        </div>
    </div>
  )
}

export default Project