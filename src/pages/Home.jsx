import Navbar from "../components/Navbar";
import { useState, useRef } from "react";
import CLI from "../components/CLI";
import Sidebar from "../components/Sidebar";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export default function Home({ toggleDarkMode, darkMode }) {
  const [showCLIWindow, setShowCLIWindow] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to the specified section
  const handleScrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-black dark:text-white dark:bg-zinc-900 w-screen h-screen overflow-x-hidden custom-scrollbar z-10">
      <Navbar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        setShowCLIWindow={setShowCLIWindow}
        handleScrollToSection={handleScrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      {showCLIWindow && (
        <CLI
          setShowCLIWindow={setShowCLIWindow}
          showCLIWindow={showCLIWindow}
        />
      )}
      <HomeSection
        homeRef={homeRef}
        handleScrollToSection={handleScrollToSection}
        aboutRef={aboutRef}
      />
      <AboutSection
        aboutRef={aboutRef}
        handleScrollToSection={handleScrollToSection}
        contactRef={contactRef}
      />
      <ProjectsSection projectsRef={projectsRef} />
      <ContactSection contactRef={contactRef} />
      <Sidebar setShowCLIWindow={setShowCLIWindow} />
    </div>
  );
}
