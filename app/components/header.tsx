"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import {links} from "../data";
import Link from "next/link";
import { context1 } from "./Context";



export default function Header() {
  const consommercontext=useContext(context1);

  const dark=consommercontext?.mode;

  return (
    <>
    <div className={dark=="white"?"bg-[#fbe2e3]  absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]":"bg-[#946263]  absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"}></div>
    <div className={dark=="white"?"bg-[#dbd7fb]  absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] ":"bg-[#676394]  absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "}></div>
    <header className="z-[900] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white
      bg-[#ffffffee] shadow-lg shadow-black/3
        backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"

        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >

      </motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2
        py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center
         gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] 
         sm:flex-nowrap sm:gap-5">
         {
            links.map((ele,key)=>{
                return <motion.li key={key} 
                         className="h-3/4 flex justify-center items-center relative"
                         initial={{y:-100,opacity:0}}
                         animate={{y:0,opacity:1}}>
                          <Link href={ele.hash}
                          onClick={()=>{consommercontext?.changerElement(ele.name);consommercontext?.changerDate()}}
                          className={ele.name==consommercontext?.elementSel?"flex w-full  items-center justify-center px-3 py-3 text-white transition ":"flex w-full  items-center justify-center px-3 py-3 hover:text-gray-950 transition "}>
                          {ele.name}  

                              {ele.name ==consommercontext?.elementSel?
                                <motion.div
                                  className="rounded-full w-full h-full absolute inset-0 -z-10 bg-gray-700"
                                  layoutId="activeSection"
                                  transition={{
                                    type: "spring",
                                    stiffness: 380,
                                    damping: 30,
                                  }}
                                ></motion.div>:
                                <></>
                                }


                          </Link>
                </motion.li>
            })
         }


        </ul>
      </nav>
    </header>    
    </>

  );
}