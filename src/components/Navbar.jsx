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
    <nav className="p-2 w-full select-none sticky top-0 z-50 bg-white dark:bg-zinc-900 shadow-md shadow-zinc-100 dark:shadow-zinc-900">
      <div className="flex items-center justify-between text-black dark:text-zinc-500">
        <div
          className="flex flex-col text-xl font-medium ml-10 text-center hover:cursor-pointer"
          onClick={() => handleScrollToSection(homeRef)}
        >
          <p>
            <span className="dark:text-white">CORY FISHBURN</span>
          </p>
          <p className="border-t-4 w-10 rounded-xl border-teal-600"></p>
        </div>

        <div className="flex space-x-4 items-center mr-5">
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
            className="px-3 py-2 text-md font-mediums dark:hover:text-white hover:scale-105 transition duration-300 ease-in-out transform"
          >
            About
          </button>
          <button
            onClick={() => handleScrollToSection(projectsRef)}
            className="px-3 py-2 text-md font-mediums dark:hover:text-white hover:scale-105 transition duration-300 ease-in-out transform"
          >
            Projects
          </button>
          <button
            onClick={() => handleScrollToSection(contactRef)}
            className="px-3 py-2 text-md font-mediums dark:hover:text-white hover:scale-105 transition duration-300 ease-in-out transform"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
