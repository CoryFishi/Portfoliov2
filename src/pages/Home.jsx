import Navbar from "../components/Navbar";

export default function Home({ toggleDarkMode, darkMode }) {
  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}></Navbar>
    </>
  );
}
