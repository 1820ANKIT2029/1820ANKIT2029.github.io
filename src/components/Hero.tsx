import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <motion.h1
                        className="mb-5 text-4xl font-bold"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Hello, I'm Ankit Kumar
                    </motion.h1>
                    <motion.p
                        className="mb-5 text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Computer Science & Engineering Student
                    </motion.p>

                    <motion.div
                        className="mb-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <p className="mb-5 text-xl">
                            I am a CSE Undergraduate Student at MNNIT (2023 - 2027)
                        </p>
                    </motion.div>
                    <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}

                            className="mb-5"
                        >
                            <Link to={"/contact"}>
                                <button className="btn btn-primary text-lg">
                                    Hire Me  
                                </button> 
                            </Link>
                        </motion.div>
                </div>
            </div>
        </div>
    );
    
};

export default Hero;
