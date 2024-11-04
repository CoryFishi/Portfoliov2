import Navbar from "../components/Navbar";
import { useState, useRef, useEffect } from "react";
import CLI from "../components/CLI";
import { AiOutlineArrowDown } from "react-icons/ai";
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
    <div className="bg-white text-black dark:text-white dark:bg-black w-screen h-screen overflow-x-hidden">
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
      <Sidebar setShowCLIWindow={setShowCLIWindow} />
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
    </div>
  );
}
