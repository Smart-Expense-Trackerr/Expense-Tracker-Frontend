import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom";
import { PageLoading } from "./Animations/Animation";


export default function Home() {
    const navigate = useNavigate();

    const handleCreateAccount = () => {
        navigate("/signup");
    }
    const handleSignIn = () => {
        navigate("/login");
    }

  return (
    <PageLoading className="relative">
    <div className="absolute inset-0 min-h-screen bg-[url('/background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70 "/>
         <div className="relative z-10 py-10 min-h-screen">
        <div className="w-full max-w-3xl mx-auto text-center">
            <h1 className="font-bold text-4xl text-text-primary"> Welcome to Smart Expense Tracker</h1>
            <p className="mt-4 font-medium text-text-primary">Your financial buddy on the go.</p>

            <div className="flex flex-col mt-10 space-y-5">
                <motion.div 
                whileHover={{
                    y: -10,
                    scale: 1.05,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                }}
                className="border w-100 font-medium mx-auto flex gap-5 rounded-2xl shadow-2xl text-text-primary p-5">
                    <img src="/images/icon3.svg" alt="" />
                    Track your spending effortlessly
                </motion.div>
                <motion.div 
                whileHover={{
                    y: -10,
                    scale: 1.05,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                }}
                className="border w-100 flex font-medium mx-auto gap-5 rounded-2xl shadow-2xl text-text-primary p-5">
                     <img src="/images/icon1.svg" alt="" />
                    Compare this spending periods
                </motion.div>
                <motion.div 
                whileHover={{
                    y: -10,
                    scale: 1.05,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                }}
                className="border w-100 mx-auto  flex gap-5 rounded-2xl shadow-2xl text-text-primary font-medium p-5">
                     <img src="/images/icon2.svg" alt="" />
                    Stay within budget
                </motion.div>
            </div>

            <div className="flex flex-col mt-10 space-y-5">
                <button 
                onClick={handleCreateAccount} 
                className="border bg-blue-500 hover:bg-blue-600 w-130 hover:scale-105 transition mx-auto gap-5 rounded-2xl shadow-2xl text-text-primary font-medium px-5 py-3 flex justify-center">Create Account</button>
                <button 
                onClick={handleSignIn} 
                className="border hover:bg-black/50 w-130 mx-auto hover:scale-105 transition  gap-5 rounded-2xl shadow-2xl text-text-primary font-medium px-5 py-3 flex justify-center">Sign In</button>
            </div>
        </div>
        </div>
    </div>
    </PageLoading>
  );
}