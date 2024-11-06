import { HiCommandLine } from "react-icons/hi2";
export default function Sidebar({ setShowCLIWindow }) {
  return (
    <div className="dark:hover:bg-slate-950 bg-opacity-50 fixed top-3/4 right-[-40px] select-none text-6xl rounded-r z-50 bg-slate-500 rounded-full hover:bg-stone-300 cursor-pointer p-2 hover:transition hover:ease-in-out hover:duration-500 hover:translate-x-[-40px] ease-in-out">
      <HiCommandLine onClick={() => setShowCLIWindow((prev) => !prev)} />
    </div>
  );
}
