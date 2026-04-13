import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="py-20 px-4 text-center">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Contact
      </motion.h2>

      {/* Text */}
      <p className="text-gray-600 mb-8">
        Feel free to reach out for collaboration or opportunities.
      </p>

      {/* Links */}
      <div className="flex justify-center gap-6 text-2xl">
        
        <a
          href="mailto:tapasisamal3@gmail.com"
          className="hover:text-blue-500 transition"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/tapasisamal"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/tapasi-samal-b84624357/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>

      </div>
    </section>
  );
}

export default Contact;