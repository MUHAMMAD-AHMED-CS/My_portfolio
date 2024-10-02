import { ABOUT_TEXT } from "../constants"


const About = () => {
    return (
        <div className='border-b border-neutral-800 pb-4'>
            <h1 className='my-20 text-center text-4xl'> About
                <span className="text-slate-600 ml-4xl">Me</span>
            </h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl lg:w-9/12" src="src\assets\about.jpg" alt="about" />
                    </div>

                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter"> {ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About