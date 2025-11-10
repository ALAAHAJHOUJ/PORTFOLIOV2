"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Submitbtn from './submitbtn'
import { motion } from 'framer-motion'

import emailjs from '@emailjs/browser';
import { IoIosAlert, IoMdCloseCircle, IoMdCloudDone } from 'react-icons/io';
import { context1 } from './Context';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const ref1=useRef<null|HTMLInputElement>(null);
  const ref2=useRef<null|HTMLTextAreaElement>(null);
  const form = useRef<null|HTMLFormElement>(null);
  const consommerContext=useContext(context1);
  const {ref,inView}=useInView();

  const [error,setErrEnvoi]=useState(false);
  const [succes,setSucces]=useState(false);
  const [error1,setError]=useState('');



  
  const sendEmail = () => {
      const form1=form.current as HTMLFormElement;
      
      emailjs
        .sendForm(process.env.NEXT_PUBLIC_SERVICE as string,process.env.NEXT_PUBLIC_TEMPLATE as string,form1, {
          publicKey:process.env.NEXT_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setSucces(true);
          },
          (error) => {
            console.log('FAILED...', error);
            setErrEnvoi(true)
          },
        );
    };





  const valider=()=>{
    const patern=/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const input1=ref1.current as HTMLInputElement;
    const input2=ref2.current as HTMLTextAreaElement;


    if(input1.value.trim()=="")
        {
        setError("Email required");
        return false ;
        }
    else
    if(!input1.value.match(patern))
        {
        setError("Invalide Syntaxe");
        return false ;
        }



    if(input2.value.trim()=="")
        {
        setError("text required");
        return false ;
        }
      
        sendEmail();
        return true;
  }







  const handlesubmit=(e: React.MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault();
      if(valider()==true)
      {
       console.log("formulaire envoyé avec succes")
      }else 
      {
       console.log('formulaire non envoyé')   
      }

  }


  const effacer=()=>{
    setError("");
    setSucces(false);
    setErrEnvoi(false);
  }


  useEffect(()=>{
  const date1=consommerContext?.date as Date

  if(inView &&(new Date().getTime()-date1.getTime()>2000))
  consommerContext?.changerElement("Contact")
  },[inView])

  return (
    <motion.section ref={ref} id='contact' initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} transition={{duration:1.5}} className='w-full flex scroll-mt-28 justify-center mt-[100px] flex-col items-center gap-[20px]'>
           {succes==true?<div  className="bg-[#00000070] z-[1000] h-[100vh] w-full bottom-0 fixed flex justify-center items-center ">
                        <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type: "spring",duration:0.7}} className="bg-white w-[300px] h-[300px] rounded-[10px] flex flex-col justify-center items-center gap-[20px]">
                          <IoMdCloudDone size={50} className="text-green-400"></IoMdCloudDone>
                          <div className="text-[20px] italic text-center w-full h-[50px] font-bold">email sent with succes</div>
                          <div className="rounded-[10px] bg-blue-400 text-white p-4 cursor-pointer hover:bg-blue-300 w-[120px] text-center" onClick={effacer}>Ok</div>
                        </motion.div>
           </div>:<></>}



           {error==true?<div   className="bg-[#00000070] z-[1000] h-[100vh] w-full bottom-0 fixed flex justify-center items-center">
                        <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type: "spring",duration:0.7}}  className="bg-white w-[300px] h-[300px] rounded-[10px] flex flex-col justify-center items-center gap-[20px]">
                          <IoMdCloseCircle size={50} className="text-red-500"></IoMdCloseCircle>
                          <div className="text-[20px] italic text-center w-full h-[50px] font-bold">Error,please try again</div>
                          <div className="rounded-[10px] bg-blue-400 text-white p-4 cursor-pointer hover:bg-blue-300 w-[120px] text-center" onClick={effacer}>Try Again</div>
                        </motion.div>
           </div>:<></>}


           {error1!=""?<div className="bg-[#00000070] z-[1000] h-[100vh] w-full bottom-0  fixed flex justify-center items-center">
              <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type: "spring",duration:0.7}} className="bg-white w-[300px] h-[300px] rounded-[10px] flex flex-col justify-center items-center gap-[20px]">
                <IoIosAlert size={50}></IoIosAlert>
                 <div className="text-[20px] italic text-center w-full h-[50px] font-bold">{error1}</div>
                 <button onClick={effacer}  className="rounded-[10px] bg-blue-400 text-white p-4 cursor-pointer hover:bg-blue-300">Try Again</button>
              </motion.div>
           </div>:<></>}


    <h2 className='font-600 text-gray-700 w-full text-center mb-6 text-[30px]'>Contact me</h2>

      <p className="text-gray-700 -mt-6 dark:text-white/80 text-center w-full sm:w-[500px]">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:alaa.spread@gmail.com">
          alaa.spread@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form action="" ref={form} className="mt-10 flex flex-col w-[90%] sm:w-[600px]">
        <input
          ref={ref1}
          className="h-14 px-4  rounded-lg border border-[#00000074]  transition-all "
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />


        <textarea
          ref={ref2}
          className="h-52 pt-2.5 px-4 my-3 rounded-lg border border-[#00000074]  transition-all "
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
      </form>
      <Submitbtn click={(e: React.MouseEvent<HTMLButtonElement>)=>{handlesubmit(e)}}></Submitbtn>
    </motion.section>
  )
}

export default Contact