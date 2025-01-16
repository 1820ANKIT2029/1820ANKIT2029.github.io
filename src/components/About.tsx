import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="h-screen py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        
        {/* Animated Profile Picture */}
        <motion.img
          src="/profile.jpeg"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Animated About Info */}
        <motion.div
          className="ml-6 text-center md:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Hi, I'm Ankit Kumar
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            I'm a Computer Science student at MNNIT, passionate about 
            **low-level programming**, **web development**, and **open-source contributions**.
          </p>

          {/* Resume Download Button */}
          <motion.a
            href="/resume.pdf"
            download
            className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-500 transition"
            whileHover={{ scale: 1.1 }}
          >
            📄 Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
