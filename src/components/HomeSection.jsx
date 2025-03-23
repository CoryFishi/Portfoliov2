import { AiOutlineArrowDown } from "react-icons/ai";

export default function HomeSection({
  homeRef,
  aboutRef,
  handleScrollToSection,
}) {
  return (
    <div
      ref={homeRef}
      className="relative w-full h-full flex items-center justify-center text-center flex-col font-roboto overflow-x-hidden bg-cover bg-center"
    >
      <div className="text-6xl font-bold mb-10">
        <h1>Hi! I'm Cory Fishburn</h1>
      </div>
      <div className="text-xl mb-10 max-w-[1000px] mx-3">
        <p>
          I'm an automation engineer specializing in streamlining workflows,
          building scalable systems, and developing custom tools to enhance
          efficiency and productivity across software and hardware environments.
        </p>
      </div>
      <div
        className="animate-bounce text-4xl text-gray-700 dark:text-white hover:cursor-pointer"
        onClick={() => handleScrollToSection(aboutRef)}
      >
        <AiOutlineArrowDown />
      </div>
    </div>
  );
}
