"use client"

import React, { useContext } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import Context, { context1 } from './Context'

function DarkMode() {

  const consommerContext=useContext(context1);
  const darkmode=consommerContext?.mode;



  const changer=()=>{

   
      if(darkmode=="black")
      {
        document.body.style.background="#f9fafb";
        document.body.style.backgroundImage="linear-gradient(to bottom ,#f9fafb,#f9fafb)"
        consommerContext?.changerMode1();   
      }
      else 
      {
        document.body.style.backgroundImage="linear-gradient(to bottom ,#101828,white)"
        consommerContext?.changerMode1();   
      }


  }



  return (
    <button
      className="fixed z-[10000] bottom-5 right-5 bg-white cursor-pointer w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={changer}
    >
         {darkmode=="black"?<BsSun></BsSun>:<BsMoon></BsMoon>}

    </button>
  )
}

export default DarkMode