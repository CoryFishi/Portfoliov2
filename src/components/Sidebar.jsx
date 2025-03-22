import { HiCommandLine } from "react-icons/hi2";
export default function Sidebar({ setShowCLIWindow }) {
  return (
    <div className="overflow-x-hidden absolute dark:hover:bg-slate-950 bg-opacity-50 top-3/4 left-[96%] select-none text-6xl rounded-r bg-slate-500 rounded-full hover:bg-stone-300 cursor-pointer p-2 hover:transition hover:ease-in-out hover:duration-500 hover:scale-105 hover:translate-x-[-18px] ease-in-out">
      <HiCommandLine onClick={() => setShowCLIWindow((prev) => !prev)} />
    </div>
  );
}
