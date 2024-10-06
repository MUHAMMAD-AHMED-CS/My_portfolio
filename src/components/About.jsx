import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"


const About = () => {
    return (
        <div className='border-b border-neutral-800 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className='my-20 text-center text-4xl'> About
                <span className="text-slate-600 ml-4xl">Me</span>
            </motion.h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center">
                        <img className="rounded-2xl lg:w-9/12" src={IMAGES.img2} alt="about" />
                    </motion.div>

                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="my-2 smx:text-sm text-pretty sm:inline-block max-w-xl py-6 font-light tracking-tighter"> {ABOUT_TEXT}</motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About