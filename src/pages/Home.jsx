import Navbar from "../components/navbar";

export default function Home({ toggleDarkMode, darkMode }) {
  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}></Navbar>
    </>
  );
}
