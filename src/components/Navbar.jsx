import { CgProfile } from "react-icons/cg";

export default function Navbar({
  toggleDarkMode,
  darkMode,
  handleScrollToSection,
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  return (
    <nav className="p-2 w-full select-none top-0 fixed z-50">
      <div className="flex items-center justify-between text-black dark:text-white">
        <div
          className="flex items-center text-xl font-medium ml-5 text-center space-x-3 hover:cursor-pointer"
          onClick={() => handleScrollToSection(homeRef)}
        >
          <CgProfile className="text-4xl" />
          <span>CORY FISHBURN</span>
        </div>

        <div className="flex space-x-4 items-center mr-5">
          <div
            onClick={toggleDarkMode}
            className={`w-7 h-4 flex items-center rounded-full p-1 cursor-pointer ${
              darkMode ? "bg-blue-600" : "bg-gray-300"
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
            className="hover:bg-slate-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-md font-mediums"
          >
            About
          </button>
          <button
            onClick={() => handleScrollToSection(projectsRef)}
            className="hover:bg-slate-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-md font-mediums"
          >
            Projects
          </button>
          <button
            onClick={() => handleScrollToSection(contactRef)}
            className="hover:bg-slate-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-md font-mediums"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
