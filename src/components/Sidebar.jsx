import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiCommandLine } from "react-icons/hi2";
export default function Sidebar({ setShowCLIWindow }) {
  return (
    <div className="fixed top-2/3 left-0 bg-opacity-50 select-none text-4xl rounded-r m-1 z-50">
      <FaGithub
        className="cursor-pointer p-1 hover:transition hover:ease-in-out hover:duration-500 hover:bg-stone-300 rounded-2xl"
        onClick={() => window.open("https://github.com/coryfishi", "_blank")}
      />
      <FaLinkedin
        className="cursor-pointer p-1 hover:transition hover:ease-in-out hover:duration-500 hover:bg-stone-300 rounded-2xl"
        onClick={() =>
          window.open("https://linkedin.com/in/CoryFishburn", "_blank")
        }
      />
      <HiCommandLine
        className="cursor-pointer p-1 hover:transition hover:ease-in-out hover:duration-500 hover:bg-stone-300 rounded-2xl"
        onClick={() => setShowCLIWindow((prev) => !prev)}
      />
    </div>
  );
}
