import React from 'react'
import { motion } from "motion/react"


const Cursor = ({cursorVarient}) => {
  return (
    <motion.div 
    variants={cursorVarient}
    initial='hidden'
    animate='visible'
    className='w-[20px] h-[20px]  rounded-full border border-white-500 p-1 z-9999 absolute'>
        <motion.div className='bg-white h-full w-full rounded-full '/>
    </motion.div>
  )
}

export default Cursor