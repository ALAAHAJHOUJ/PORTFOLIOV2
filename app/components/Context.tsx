"use client"

import React, { createContext, useEffect, useState } from 'react'




type typedecontext={
mode:string,
changerElement:(element:string)=>void,
changerMode1:()=>void,
elementSel:string,
changerDate:()=>void,
date:number|Object
}



export const context1=createContext<null|typedecontext>(null);


function Context({children}:{children:React.ReactNode}) {
  const [element,setElement]=useState<string>("Home");
  const [datedernierClick,setDatedernierClick]=useState<Object>(new Date("2025-11-8"));
  const [dark,setDark]=useState("white");


  const selectionner=(element:string)=>{
    setElement(element);
  }




  const changerMode=()=>{
    if(dark=="white")
    {
     setDark("black")
    }else 
    {
     setDark("white")
    }
  }



  return (
    <context1.Provider value={{changerElement:selectionner,mode:dark,changerMode1:()=>{changerMode()},elementSel:element,changerDate:()=>{setDatedernierClick(new Date())},date:datedernierClick}}>
        {children}
    </context1.Provider>
  )
}

export default Context