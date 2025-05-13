import { AiOutlineArrowDown } from "react-icons/ai";
import profile from "../assets/profile.jpg";

export default function HomeSection({
  homeRef,
  aboutRef,
  handleScrollToSection,
  contactRef,
}) {
  return (
    <div
      ref={homeRef}
      className="relative w-full h-screen flex items-center justify-center flex-col font-roboto overflow-x-hidden px-48"
    >
      <div className="flex justify-between items-center w-full pl-10">
        {/* Text Section */}
        <div className="max-w-[600px] text-left">
          <div className="text-6xl font-bold mb-10">
            <h1>Hi, I'm Cory.</h1>
          </div>
          <p className="max-w-[450px] text-3xl">
            I'm an <span className="font-bold">automation engineer</span>,
            aspiring entrepreneur, and{" "}
            <span className="font-bold">Recent Graduate</span>
          </p>
          <div className="w-full text-left mt-10">
            <button
              className="px-6 py-3 bg-teal-500 w-32 text-white rounded-lg hover:bg-teal-600 hover:scale-105 transition duration-300 ease-in-out"
              onClick={() => handleScrollToSection(contactRef)}
            >
              Contact
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex justify-center">
          <img src={profile} alt="Image of Cory Fishburn" className="w-96" />
        </div>
      </div>

      <div
        className="animate-bounce mt-20 text-4xl text-gray-700 dark:text-white hover:cursor-pointer"
        onClick={() => handleScrollToSection(aboutRef)}
      >
        <AiOutlineArrowDown />
      </div>
    </div>
  );
}
