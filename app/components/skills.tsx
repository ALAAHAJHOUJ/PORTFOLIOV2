"use client";

import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data";
import { context1 } from "./Context";
import { useInView } from "react-intersection-observer";


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const consommerContext=useContext(context1);
  const {ref,inView}=useInView({threshold: 0.5});

  useEffect(()=>{
  const date1=consommerContext?.date as Date
  if(inView && (new Date().getTime()-date1.getTime()>2000))
  consommerContext?.changerElement('Skills')
  },[inView])


  
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-[140px] max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <motion.h2 style={consommerContext?.mode=="black"?{color:"white"}:{color:"#364153"}} initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:0.175}}  className='font-600 w-full text-center mb-6 text-[30px]'>Skills</motion.h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            style={consommerContext?.mode=="black"?{color:"rgba(255, 255, 255, 0.7)",background:"rgba(255, 255, 255, 0.2)"}:{background:"white"}}
            className="bg-white border-[#dadada] border-[1px] rounded-xl px-5 py-3 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}