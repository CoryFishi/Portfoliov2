import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Check localStorage for dark mode preference on initial render
  useEffect(() => {
    const storedPreference = localStorage.getItem("darkMode");
    if (storedPreference === "false") {
      setDarkMode(false);
    } else {
      setDarkMode(true);

      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route
          path="/"
          element={<Home toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
