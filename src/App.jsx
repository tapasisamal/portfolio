import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="pt-20">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-20">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-20">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-20">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;