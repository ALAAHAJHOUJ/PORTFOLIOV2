"use client"
import React, { useContext, useEffect } from 'react'
import { projectsData } from '../data'
import Project from './project'
import { motion } from 'framer-motion'
import { context1 } from './Context'
import { useInView } from 'react-intersection-observer'

function Projects() {
    const consommerContext=useContext(context1);
    const {ref,inView}=useInView({threshold: 0.5});

    useEffect(()=>{
      const date1=consommerContext?.date as Date
      
      if(inView && (new Date().getTime()-date1.getTime()>2000))
      consommerContext?.changerElement('Projects')
    },[inView])


    return (
      <motion.section ref={ref} id='projects' initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:0.175}} className='w-full scroll-mt-28 flex flex-col gap-7 items-center mb-[40px]'>
          <h2 style={consommerContext?.mode=="black"?{color:"white"}:{color:"#364153"}}  className='font-600 w-full text-center mb-6 text-[30px]'>Projects</h2>
          <div className='flex flex-col items-center gap-[30px] w-full'>
              {
                  projectsData.map((ele,key)=>{
                      return <Project key={key} cle={key+""} title={ele.title} description={ele.description} tech={ele.tags} image={ele.imageUrl}></Project>
                  })
              }
          </div>
      </motion.section>
  )
}

export default Projects