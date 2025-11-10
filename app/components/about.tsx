"use client"

import { motion} from 'framer-motion'
import { useContext, useEffect } from 'react'
import { context1 } from './Context'
import { useInView } from 'react-intersection-observer'

function About() {
  const consommerContext=useContext(context1);
  const {ref,inView}=useInView({threshold: 0.5});

  useEffect(()=>{
   const date1=consommerContext?.date as Date;

   if(inView &&(new Date().getTime()-date1.getTime()>2000))
   consommerContext?.changerElement("About")
  },[inView])


  return (
    <motion.section ref={ref} id='about' initial={{opacity:0,y:100}}  style={consommerContext?.mode=="black"?{color:"white"}:{color:"black"}} animate={{opacity:1,y:0}} transition={{delay:0.175}} className='w-full scroll-mt-28 flex flex-wrap  justify-center items-center box-border p-[20px] min-[740px]:p-0'>
      <h2 className='font-600  w-full text-center mb-6 text-[30px]' style={consommerContext?.mode=="black"?{color:"white"}:{color:"#364153 "}}>About me</h2>
      <div className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
      <p className="mb-3 w-full">
        My favorite part of programming is the problem-solving aspect. I{" "}
        <span className="font-medium underline">love</span>
        ,the feeling of finally figuring out a solution to a problem.{" "}<br></br>
        <span className=''>I am currently looking for an Internship as a software engineer.</span>
      </p>



      <p className='w-full'>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
      </div>
    </motion.section>
  )
}

export default About