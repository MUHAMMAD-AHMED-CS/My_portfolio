import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { LiaPython } from "react-icons/lia";
import { animate, motion } from "framer-motion";

const iconVarients = (duration) => ({
    inital: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Technologies</motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}

                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVarients(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className="text-7xl text-cyan-400" />

                </motion.div>
                <motion.div
                    variants={iconVarients(1.5)}
                    initial="initial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className="text-7xl text-green-600" />

                </motion.div>
                <motion.div
                    variants={iconVarients(3.5)}
                    initial="initial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className="text-7xl text-green-400" />

                </motion.div>
                <motion.div
                    variants={iconVarients(1.6)}
                    initial="initial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className="text-7xl text-gray-400" />

                </motion.div>
                <motion.div
                    variants={iconVarients(3)}
                    initial="initial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className="text-7xl text-cyan-700" />

                </motion.div>
                <motion.div
                    variants={iconVarients(2)}
                    initial="initial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoFirebase className="text-7xl text-yellow-500" />

                </motion.div>
                <motion.div
                    variants={iconVarients(1.7)}
                    initial="initial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <BiLogoPostgresql className="text-7xl text-blue-400" />

                </motion.div>
                <motion.div
                    variants={iconVarients(2.1)}
                    initial="initial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <LiaPython className="text-7xl text-emerald-600" />

                </motion.div>

            </motion.div>
        </div>
    )
}

export default Technologies