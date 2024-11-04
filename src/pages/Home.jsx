import Navbar from "../components/Navbar";
import { useState, useRef, useEffect } from "react";
import CLI from "./CLI";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiCommandLine } from "react-icons/hi2";
import { AiOutlineArrowDown } from "react-icons/ai";

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
      <div className="fixed top-2/3 left-0 bg-opacity-50 select-none text-4xl rounded-r m-1 z-50">
        <FaGithub
          className="cursor-pointer p-1 hover:transition hover:ease-in-out hover:duration-500 hover:bg-slate-500 rounded-2xl"
          onClick={() => window.open("https://github.com/coryfishi", "_blank")}
        />
        <FaLinkedin
          className="cursor-pointer p-1 hover:transition hover:ease-in-out hover:duration-500 hover:bg-slate-500 rounded-2xl"
          onClick={() =>
            window.open("https://linkedin.com/in/CoryFishburn", "_blank")
          }
        />
        <HiCommandLine
          className="cursor-pointer p-1 hover:transition hover:ease-in-out hover:duration-500 hover:bg-slate-500 rounded-2xl"
          onClick={() => setShowCLIWindow((prev) => !prev)}
        />
      </div>
      <div
        ref={homeRef}
        className="w-full h-full flex items-center justify-center text-center bg-yellow-100 flex-col relative"
      >
        <div className="text-6xl font-bold mb-10">
          <h1>Hi! I'm Cory Fishburn</h1>
        </div>
        <div className="text-xl mb-10 max-w-[900px] mx-3">
          <p>
            I’m an automation developer focused on building efficient, scalable
            applications that drive product success and streamline processes.
          </p>
        </div>

        <div className="absolute bottom-10 animate-bounce text-4xl text-gray-700">
          <AiOutlineArrowDown />
        </div>
      </div>
      <div
        ref={aboutRef}
        className="w-full h-full flex items-center justify-center text-center bg-red-100 flex-col"
      >
        About
      </div>
      <div
        ref={projectsRef}
        className="w-full h-full flex items-center justify-center text-center bg-blue-100"
      >
        Projects
      </div>
      <div
        ref={contactRef}
        className="w-full h-full flex items-center justify-center text-center bg-green-100"
      >
        Contact
      </div>
    </div>
  );
}
