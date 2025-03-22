import { AiOutlineArrowDown } from "react-icons/ai";

export default function HomeSection({
  homeRef,
  aboutRef,
  handleScrollToSection,
}) {
  return (
    <div
      ref={homeRef}
      className="w-full h-full flex items-center justify-center text-center bg-blue-50 flex-col font-roboto dark:bg-slate-900 overflow-x-hidden"
    >
      <div className="text-6xl font-bold mb-10">
        <h1>Hi! I'm Cory Fishburn</h1>
      </div>
      <div className="text-xl mb-10 max-w-[900px] mx-3">
        <p>
          I’m an automation engineer focused on building efficient, scalable
          applications that drive product success and streamline processes.
        </p>
      </div>

      <div
        className="animate-bounce text-4xl text-gray-700 hover:cursor-pointer"
        onClick={() => handleScrollToSection(aboutRef)}
      >
        <AiOutlineArrowDown />
      </div>
    </div>
  );
}
