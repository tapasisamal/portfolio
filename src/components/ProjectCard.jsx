import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-white border border-gray-200 rounded-xl p-6 transition hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((item, index) => (
          <span
            key={index}
            className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 text-sm font-medium">
        <a
          href={project.github}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>

        <a
          href={project.live}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;