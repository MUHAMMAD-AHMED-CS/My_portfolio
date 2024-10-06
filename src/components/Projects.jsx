import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import { IoOpenOutline } from "react-icons/io5";


const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="py-20 smx:text-start sm:text-center text-4xl">Projects</motion.h1>
      
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: project.delay }}
              className="w-full lg:w-1/4">
              <img src={project.image} alt={project.title} width={150} height={150} className="mb-6 rounded" />
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: project.delay }}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 smx:text-sm text-pretty sm:inline-block text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 rounded px-2 py-1 bg-neutral-900 text-sm font-medium text-purple-600 smx:inline-block mb-2">{tech}</span>
                
              ))}
              <h2 className='text-primary text-sm flex gap-2 items-center text-blue-500'><a href={project.link}>View details</a><IoOpenOutline /></h2>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects