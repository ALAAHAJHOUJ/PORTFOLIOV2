"use client";


import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BiDownload, BiSolidArrowToRight } from 'react-icons/bi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { useContext, useEffect } from 'react';
import { context1 } from './Context';
import { useInView } from 'react-intersection-observer';




function Intro() {

  const consommerContext=useContext(context1);
  const {ref,inView}=useInView();

  useEffect(()=>{
  if(inView)
  consommerContext?.changerElement('Home')
  },[inView])
  return (
    <section id='home' ref={ref}  className='mb-28 scroll-mt-28 text-center sm:mb-0 w-full'>
          <div className='flex flex-col items-center gap-[20px] w-full '>
                    <motion.div  className='relative' 
                    initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} >
                      <Image src={"/hajhouj.jpg"} alt='image personnelle'
                      width="192" height="192" quality="95" priority={true}
                        className='object-cover w-[100] h-[100] rounded-full 
                        border-[0.30rem] border-[#e3dddd] shadow-xl '>

                      </Image>

                      <span className='absolute bottom-0 right-0 text-[27px]'>
                        👋
                      </span>
                    </motion.div>




                    <motion.p
                      className="mb-10 mt-4 px-4 text-2xl  font-medium !leading-[1.5] sm:text-4xl w-[60%] sm:w-full max-w-[800px]"
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={consommerContext?.mode=="black"?{color:"white"}:{color:"black"}}
                    >
                      <span className="font-bold ">Hello, I'm ALAA HAJHOUJ.</span> I'm a{" "}
                      <span className="font-bold ">full-stack developer</span> with{" "}
                      <span className="font-bold ">1 year</span> of experience. I enjoy
                      building <span className="italic">sites & apps</span>. My focus is{" "}
                      <span className="underline">React (Next.js)</span>.
                    </motion.p>

                    <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} className='flex justify-center flex-col items-center gap-x-[10px] gap-y-[15px] sm:flex-row'>
                       <Link href={"#contact"} onClick={()=>{consommerContext?.changerDate();consommerContext?.changerElement('Contact')}} style={consommerContext?.mode=="black"?{background:"rgba(0,0,0, 0.5)"}:{background:"black"}} className='bg-gray-900 text-white px-7 py-3 flex justify-center items-center gap-2 rounded-full hover:scale-[1.15] focus:scale-[1.15] active:scale-[1.15] transition-all group font-bold shadow-lg shadow-black/3'>Contact me <BiSolidArrowToRight className='group-hover:translate-x-[6px]  transition-all text-[20px]'></BiSolidArrowToRight></Link>
                       <a style={consommerContext?.mode=="black"?{background:"rgba(255, 255, 255, 0.6)"}:{background:"white"}}  download={true} href='/CVHAJHOUJ1.pdf' className='bg-white  !font-bold text-black flex justify-center items-center gap-2 px-7 py-3 rounded-full shadow-lg shadow-black/3 hover:scale-[1.15] focus:scale-[1.15]  active:scale-[1.15] transition-all group border-[#dfdfdf90]'>Download Cv <BiDownload className='group-hover:translate-y-[5px]  text-[20px] transition-all'></BiDownload></a>
                       <a style={consommerContext?.mode=="black"?{background:"rgba(255, 255, 255, 0.6)",color:"rgba(255, 255, 255)"}:{background:'white'}} target='_blank' href='/linkdine' className='bg-white text-gray-600 p-4 flex items-center justify-center gap-2 rounded-full text-[25px] shadow-lg shadow-black/3 hover:scale-[1.15] focus:scale-[1.15] active:scale-[1.15] transition-all group border border-[#dfdfdf90]'><BsLinkedin className='group-hover:text-gray-300'></BsLinkedin></a>
                       <a style={consommerContext?.mode=="black"?{background:"rgba(255, 255, 255, 0.6)",color:"rgba(255, 255, 255)"}:{background:'white'}} target='_blank' href='https://github.com/ALAAHAJHOUJ' className='bg-white text-gray-600 p-4 flex items-center justify-center gap-2 rounded-full text-[28px] shadow-lg shadow-black/3 hover:scale-[1.15] focus:scale-[1.15] active:scale-[1.15] transition-all group border-[#dfdfdf90]'><BsGithub className='group-hover:text-gray-300'></BsGithub></a>
                    </motion.div>
          </div>
    </section>

  )
}

export default Intro