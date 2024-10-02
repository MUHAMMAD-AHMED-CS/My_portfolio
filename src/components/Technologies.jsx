import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { LiaPython } from "react-icons/lia";

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center text-4xl'>Technologies</h1>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className="text-7xl text-cyan-400" />

                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className="text-7xl text-green-600" />

                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className="text-7xl text-green-400" />

                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className="text-7xl text-gray-400" />

                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className="text-7xl text-cyan-700" />

                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoFirebase className="text-7xl text-yellow-500" />

                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <BiLogoPostgresql className="text-7xl text-blue-400" />

                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <LiaPython className="text-7xl text-emerald-600" />

                </div>

            </div>
        </div>
    )
}

export default Technologies