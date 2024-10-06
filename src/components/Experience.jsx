import React, { useState } from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

const container = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})



const containerYear = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Experience = () => {

    return (
        <div className='border-b border-neutral-800 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Experience</motion.h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: experience.delay }}
                            className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: experience.delay }}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>
                                {experience.role} -{" "}
                                <span className='text-sm text-purple-100'>
                                    {experience.company}
                                </span>
                            </h6>
                            <p className='mb-4 smx:text-sm text-pretty sm:inline-block text-neutral-400'>{experience.description}</p>
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className=' smx:inline-block max-w-full mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>{tech}</span>
                            ))

                            }
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience