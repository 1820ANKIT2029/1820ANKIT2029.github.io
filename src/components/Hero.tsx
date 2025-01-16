import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-800 text-white">
            <motion.h2
                className="text-4xl font-bold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hello, I'm Ankit Kumar
            </motion.h2>

            <motion.p
                className="mt-4 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Computer Science & Engineering Student | Web Developer
            </motion.p>

            <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <a href="#contact" className="px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg text-white">
                    Hire Me
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
