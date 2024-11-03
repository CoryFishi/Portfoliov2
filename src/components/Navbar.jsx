import { Link } from "react-router-dom";

export default function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <nav className="p-2 w-full select-none top-0">
      <div className="flex items-center justify-between text-black dark:text-white">
        <div className="flex items-center flex-shrink-0 text-2xl font-medium ml-5">
          Cory Fishburn
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
          <Link
            to="/"
            className="hover:bg-slate-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-md font-mediums"
          >
            About
          </Link>
          <Link
            to="/"
            className="hover:bg-slate-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-md font-mediums"
          >
            Projects
          </Link>
          <Link
            to="/"
            className="hover:bg-slate-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-md font-mediums"
          >
            CLI
          </Link>
          <Link
            to="/"
            className="hover:bg-slate-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-md font-mediums"
          >
            Contact123
          </Link>
        </div>
      </div>
    </nav>
  );
}
