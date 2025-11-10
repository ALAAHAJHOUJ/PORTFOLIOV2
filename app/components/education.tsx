"use client"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { LuGraduationCap } from 'react-icons/lu';
import { experiencesData } from '../data';
import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { context1 } from './Context';
import { useInView } from 'react-intersection-observer';



function Eduction() {
  const consommerContext=useContext(context1);
  const {ref,inView}=useInView({threshold: 0.5});

  useEffect(()=>{


      const date1=consommerContext?.date as Date ;
      if(inView && (new Date().getTime()-date1.getTime()>2000))
      consommerContext?.changerElement('Experience');

  },[inView])



  return (
   <section ref={ref} id='experience' className='scroll-mt-28'>
       <motion.h2 initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} style={consommerContext?.mode=="black"?{color:"white"}:{color:"#364153"}}  className='font-600  w-full text-center mb-6 text-[30px]'>My Journey</motion.h2>
       <VerticalTimeline lineColor={consommerContext?.mode=="white"?"#d7d7d7":"rgba(0,0,0,0)"}>
          {experiencesData.map((ele,key)=>{
            return <VerticalTimelineElement key={key}
             contentStyle={consommerContext?.mode=="black"?{boxShadow:"none",
                            background:"#ffffff80",
                            border:"3px solid rgba(0,0,0,0.1)",
                            textAlign:"left",
                            borderRadius:"10px",
                            boxSizing:"border-box"
                           }:{
                            boxShadow:"none",
                            background:"#EDEBEB",
                            border:"3px solid rgba(0,0,0,0.1)",
                            textAlign:"left",
                            borderRadius:"10px",
                            boxSizing:"border-box"
                           }}
                           contentArrowStyle={{
                            borderRight:"0.4rem solid #9ca3af"
                           }}
                           icon={<LuGraduationCap></LuGraduationCap>}
                           iconStyle={consommerContext?.mode=="black"?{background:"#ffffff80",color:"white"}:{background:"white"}}
                           date={ele.date}
                           dateClassName={consommerContext?.mode=="black"?"custom-date-dark":"custom-date"}
                           >
              <h3 className={consommerContext?.mode=="black"?'font-bold capitalize text-white':"font-bold capitalize"}>{ele.title}</h3>
              <p className='font-semibold! text-gray-700 text-[14px]! !mt-5'>{ele.location}</p>
              <p className='!mt-0 !font-normal text-[#848484]  !text-[15px] '>{ele.description}</p>
            </VerticalTimelineElement>
          })}
       </VerticalTimeline>
   </section>
  )
}

export default Eduction