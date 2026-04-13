import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "HTML",
  "CSS",
  "Supabase",
  "Appwrite",
];

function Skills() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto text-center">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-blue-50 hover:scale-105 transition"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

export default Skills;