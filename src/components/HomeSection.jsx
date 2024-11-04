import { AiOutlineArrowDown } from "react-icons/ai";

export default function HomeSection({
  homeRef,
  aboutRef,
  handleScrollToSection,
}) {
  return (
    <div
      ref={homeRef}
      className="w-full h-full flex items-center justify-center text-center bg-blue-50 flex-col relative"
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
        className="absolute bottom-10 animate-bounce text-4xl text-gray-700"
        onClick={() => handleScrollToSection(aboutRef)}
      >
        <AiOutlineArrowDown />
      </div>
    </div>
  );
}
