import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar({
  toggleDarkMode,
  darkMode,
  handleScrollToSection,
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavClick = (ref) => {
    handleScrollToSection(ref);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="p-2 w-full select-none sticky top-0 z-50 bg-white dark:bg-zinc-900 shadow-md shadow-zinc-100 dark:shadow-zinc-900">
      <div className="flex items-center justify-between text-black dark:text-zinc-500">
        <div
          className="flex flex-col text-xl font-medium ml-5 text-center hover:cursor-pointer"
          onClick={() => handleScrollToSection(homeRef)}
        >
          <p>
            <span className="dark:text-white">CORY FISHBURN</span>
          </p>
          <p className="border-t-4 w-10 rounded-xl border-teal-600"></p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center mr-5">
          <div
            onClick={toggleDarkMode}
            className={`w-7 h-4 flex items-center rounded-full p-1 cursor-pointer ${
              darkMode ? "bg-teal-600" : "bg-zinc-300"
            }`}
          >
            <div
              className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-500 ease-out ${
                darkMode ? "translate-x-2" : ""
              }`}
            ></div>
          </div>
          <button
            onClick={() => handleScrollToSection(aboutRef)}
            className="px-3 py-2 text-md font-medium dark:hover:text-white hover:scale-105 transition duration-300"
          >
            About
          </button>
          <button
            onClick={() => handleScrollToSection(projectsRef)}
            className="px-3 py-2 text-md font-medium dark:hover:text-white hover:scale-105 transition duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => handleScrollToSection(contactRef)}
            className="px-3 py-2 text-md font-medium dark:hover:text-white hover:scale-105 transition duration-300"
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center mr-5">
          <div
            onClick={toggleDarkMode}
            className={`w-7 h-4 flex items-center rounded-full p-1 cursor-pointer mr-4 ${
              darkMode ? "bg-teal-600" : "bg-zinc-300"
            }`}
          >
            <div
              className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-500 ease-out ${
                darkMode ? "translate-x-2" : ""
              }`}
            ></div>
          </div>
          <button onClick={handleMobileToggle} className="text-2xl">
            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-2 pb-4 dark:text-zinc-300 text-lg">
          <button
            onClick={() => handleNavClick(aboutRef)}
            className="hover:text-teal-600"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick(projectsRef)}
            className="hover:text-teal-600"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick(contactRef)}
            className="hover:text-teal-600"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
