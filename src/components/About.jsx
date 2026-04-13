import { motion } from "framer-motion";

function About() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto text-center">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-gray-600 text-lg leading-relaxed"
      >
        I am a frontend developer focused on building modern, responsive, and user-friendly web applications. I specialize in working with React, Tailwind CSS, and JavaScript to create clean, efficient, and interactive user interfaces.
        <br /><br />
        I have experience building real-time applications, authentication-based systems, and CRUD applications. Currently, I am focused on strengthening my frontend skills by building practical projects and exploring modern web technologies.
      </motion.p>

    </section>
  );
}

export default About;