import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect active section on scroll
  useEffect(() => {
    const sections = ["about", "projects", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop - 100;
          const height = el.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold cursor-pointer">
          Tapasi Samal
        </h1>

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex font-medium">
          {["about", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`transition ${
                active === item ? "text-blue-600 font-semibold" : "hover:text-blue-500"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-4 text-xl">
          <a href="https://github.com/tapasisamal" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/tapasi-samal-b84624357/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md"
        >
          {["about", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className={`block ${
                active === item ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <div className="flex gap-4 text-xl pt-2">
            <a href="https://github.com/tapasisamal" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/tapasi-samal-b84624357/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;