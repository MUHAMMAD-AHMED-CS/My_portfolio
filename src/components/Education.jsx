import { EDUCATION } from "../constants"
import { motion } from "framer-motion"


const Education = () => {
    return (
        <div className="border-b border-neutral-800 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="py-20 text-center text-4xl">Education
            </motion.h1>
            <div className="">

                <div className="mb-8 flex flex-wrap  lg:justify-center">
                    <motion.div
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ duration: EDUCATION.delay }}
                        className="w-full smx:flex smx:justify-center sm:justify-start lg:w-1/4">
                        <img src={EDUCATION.image} alt={EDUCATION.title} width={200} height={150} className="mb-6 rounded" />
                    </motion.div>
                    <motion.div
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: EDUCATION.delay }}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{EDUCATION.title}
                            <span className='text-xs text-purple-100'>
                                {" ("}{EDUCATION.year}{") "}
                            </span>
                        </h6>
                        <h6 className="mb-2 font-semibold text-sm">{EDUCATION.institute}
                        </h6>
                        <p className="mb-4 smx:text-sm text-pretty sm:inline-block text-neutral-400">{EDUCATION.description}</p>
                        
                        {EDUCATION.skills.map((skills, index) => (
                            
                            <span key={index} className=" smx:inline-block mb-2 mr-2 rounded px-2 py-1 bg-neutral-900 text-sm font-medium text-purple-600">{skills}</span>
                            
                        ))}
                        
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Education