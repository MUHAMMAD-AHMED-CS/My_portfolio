import logo from "../assets/Ma.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
    return (
        <nav className="  mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="MA" />
            </div>
            <div className="lg:m-8 flex lg:items-center items-end  justify-center gap-4 text-2xl ">
                <a href="https://linkedin.com/in/muhammed-ahmed-software-engineer"><FaLinkedin className="transition-all duration-300 hover:scale-110 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" /></a>
                <a href="https://github.com/MUHAMMAD-AHMED-CS/"><FaGithub className="transition-all duration-300 hover:scale-110 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" /></a>
                <a href=""><FaInstagram className="transition-all duration-300 hover:scale-110 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" /></a>
            </div>
        </nav>
    )
}

export default Navbar