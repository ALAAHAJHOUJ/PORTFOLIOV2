"use client"
import React from 'react'



import { motion } from 'framer-motion'
function Sectiondivider() {
  return (
    <div className='w-full flex justify-center'>
        <motion.div initial={{scale:0}} animate={{scale:1}} className=' bg-gray-300 my-24 h-16 rounded-full w-1 hidden sm:block '>
            
        </motion.div>
    </div>

  )
}

export default Sectiondivider