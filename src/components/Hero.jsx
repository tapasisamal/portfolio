import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-4 bg-linear-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-3xl">
        
        {/* Role */}
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block px-4 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4"
        >
          Frontend Developer • React, Tailwind, JavaScript
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">
            Tapasi Samal
          </span>{" "}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg md:text-xl text-gray-600 mb-8"
        >
          I build modern, responsive web applications with React, Tailwind CSS,
          and real-time technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;