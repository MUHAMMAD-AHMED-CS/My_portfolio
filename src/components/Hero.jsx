import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion"
import {IMAGES} from "../constants"
import Resume from "../assets/Muhammad_Ahmed_Resume`.pdf"


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})


function Hero() {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start lg:pl-20 '>
                        <motion.h1
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-6xl smx:text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl'
                            >Muhammad Ahmed</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent'>Full Stack Developer</motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 smx:text-sm text-pretty sm:inline-block font-light tracking-tighter  ">{HERO_CONTENT}</motion.p>
                        <motion.button 
                        variants={container(1)}
                        whileHover={{scale:1.1}}
                        whileTap={{ scale: 0.9 }}
                        initial="hidden"
                        animate="visible"
                        className="font-semibold p-2 mb-8 rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-neutral-800"
                        
                        
                        ><a href={Resume} download='Resume'>Download Resume</a>
                            
                        </motion.button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}

                            className="rounded-2xl lg:w-9/12" src={IMAGES.img1} alt="Muhammad Ahmed" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero