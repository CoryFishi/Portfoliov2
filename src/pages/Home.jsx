import Navbar from "../components/Navbar";
import { useState } from "react";
import CLI from "./CLI";

export default function Home({ toggleDarkMode, darkMode }) {
  const [showCLIWindow, setShowCLIWindow] = useState(false);

  return (
    <div className="bg-white dark:bg-black w-screen h-screen relative m-0 p-0 overflow-x-hidden">
      <Navbar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        setShowCLIWindow={setShowCLIWindow}
      />
      {showCLIWindow && (
        <CLI
          setShowCLIWindow={setShowCLIWindow}
          showCLIWindow={showCLIWindow}
        />
      )}
      <div className="w-full h-full flex items-center justify-center text-center">
        About
      </div>
      <div className="w-full h-full flex items-center justify-center text-center">
        Projects
      </div>
      <div className="w-full h-full flex items-center justify-center text-center">
        Contact
      </div>
    </div>
  );
}
