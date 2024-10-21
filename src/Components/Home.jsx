import { Link } from "react-router-dom"
import SlideUp from "./Animation/SlideUp"
import { motion } from "framer-motion"

const Home = () => {
    return (
        <>
           <div className="w-full h-screen flex items-center justify-between px-5 ">
            <div>
                <motion.h2 
                variants={SlideUp(0.4)}
                initial="initial"
                animate="animate"
                className="text-3xl font-bold">Design Your Professional Resume <br />  <motion.span 
                variants={SlideUp(0.6)}
                         initial="initial"
                         animate="animate"
                className="text-[#239CE2] text-3xl font-bold">100% Free</motion.span></motion.h2>
                <motion.div 
                variants={SlideUp(0.8)}
                initial="initial"
                animate="animate"
                className="mt-2">
                 <Link to={'/resume'}>
                 <button className="px-6 py-2 bg-[#239CE2] text-white rounded-md">Get Started</button>
                 </Link>
                </motion.div>
            </div>
            <img className="h-[500px]" src="/resume.svg" alt="" />
           </div>
        </>
    )
}

export default Home
