import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import CLI from "./pages/CLI";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for dark mode preference on initial render
  useEffect(() => {
    const storedPreference = localStorage.getItem("darkMode");
    if (storedPreference === "true") {
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
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route
          path="/"
          element={<Home toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}
        />
      </Routes>
    </>
  );
}

export default App;
