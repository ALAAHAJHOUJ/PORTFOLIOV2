"use client"

import Image from 'next/image'
import React, { useContext, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projectsData } from '../data'
import { context1 } from './Context'
import { useRouter } from 'next/navigation';


type propr={
    title:string,
    description:string,
    tech:readonly string[],
    image:string,
    cle:string
}



function Project({title,description,tech,image,cle}:propr) {
  const naviguer=useRouter();
  const ref1=useRef<null|HTMLElement>(null);
  const consommerContext=useContext(context1);
  const url=title=="WeatherApp"?"https://weatherapp-dun-mu.vercel.app/":title=="User Management"?"https://Users-dun-mu.vercel.app/":"https://school-landing-page-orpin.vercel.app/"
  const scroll=useScroll({
    target:ref1,
    offset:["0 1","1.44 1"]
  });
 

  const scaleProgress=useTransform(scroll.scrollYProgress,[0,1],[0.3,1]);
  const opacityProgress=useTransform(scroll.scrollYProgress,[0,1],[0.2,1])

  return (
       
       <motion.section   style={consommerContext?.mode=="black"?{background:"rgba(229, 231, 235,0.4)",scale:scaleProgress,opacity:opacityProgress,color:"white"}:{background:"#f3f4f6",scale:scaleProgress,opacity:opacityProgress,color:"black"}} ref={ref1} className=' group hover:bg-gray-300! active:bg-gray-300! focus:bg-gray-300! cursor-pointer w-[90%] sm:w-full min-w-[300px] max-w-[42rem] h-[250px] sm:h-[300px] pb-[30px]  border border-black/3 overflow-hidden   relative rounded-[10px]'>
              <a href={url} target='_blank' className='absolute top-0 right-0 w-full h-full'></a>
              <div style={consommerContext?.mode=="black"?{color:"white"}:{}} className={cle!="1"?'py-4 pl-3 pr-3 sm:pl-10 sm:pr-2 sm:pt-10 w-full':'py-4 pl-3 pr-3 mr-[170px] sm:pl-10 sm:pr-2 sm:pt-10  w-full sm:w-[50%] absolute sm:right-0 sm:translate-x-[160px] '}>
                      <h3 style={consommerContext?.mode=="black"?{color:"white"}:{color:"#364153"}} className='text-2xl font-semibold'>{title}</h3>
                      <p style={consommerContext?.mode=="black"?{color:"white"}:{}} className={cle!="1"?'mt-2 leading-relaxed text-gray-700 w-[100%] sm:w-[50%]':'mt-2 leading-relaxed text-gray-700 w-[100%] '}>{description}</p>
                      <ul className={cle!="1"?'flex flex-wrap mt-4 gap-2 w-full sm:w-[50%]':'flex flex-wrap mt-4 gap-2 w-full '}>
                        {
                          tech.map((ele,key)=>{
                            return <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-tighter text-white rounded-full' key={key}>{ele}</li>
                          })
                        }
                      </ul>
              </div>

              <div className={cle!="1"?'overflow-hidden w-[420px] h-[220px]  absolute top-[90px] -right-40 w-[28.25rem] rounded-t-lg shadow-2xl hidden sm:block group-hover:rotate-[-10deg] group-hover:scale-[1.16] group-hover:translate-x-[10px] transition-all':'overflow-hidden w-[420px] h-[220px]  absolute top-[90px] left-[-160px]  rounded-t-lg shadow-2xl hidden sm:block group-hover:rotate-[10deg] group-hover:scale-[1.16] group-hover:translate-x-[10px] transition-all'}>
                      <img alt='image de projet' src={image} className='w-full h-full  object-fill'></img>
              </div>

       </motion.section>
  )
}

export default Project