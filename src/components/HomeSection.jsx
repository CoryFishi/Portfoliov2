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
      className="relative w-full h-screen flex items-center justify-center flex-col font-roboto overflow-x-hidden px-6 md:px-20 lg:px-48"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-10 md:gap-0">
        {/* Text Section */}
        <div className="max-w-[600px] text-left">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10">
            <h1>Hi, I'm Cory.</h1>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-[450px]">
            I'm an <span className="font-bold">automation engineer</span>,
            aspiring entrepreneur, and{" "}
            <span className="font-bold">Recent Graduate</span>
          </p>
          <div className="w-full text-left mt-6 md:mt-10">
            <button
              className="px-6 py-3 bg-teal-500 w-32 text-white rounded-lg hover:bg-teal-600 hover:scale-105 transition duration-300 ease-in-out"
              onClick={() => handleScrollToSection(contactRef)}
            >
              Contact
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-72 h-72 md:w-80 md:h-96 rounded-3xl relative overflow-hidden">
            <img
              src={profile}
              alt="Image of Cory Fishburn"
              className="w-full h-full object-cover [clip-path:polygon(0 0, 100% 10%, 100% 90%, 0% 100%)] hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>

      <div
        className="animate-bounce mt-10 md:mt-20 text-3xl md:text-4xl text-gray-700 dark:text-white hover:cursor-pointer"
        onClick={() => handleScrollToSection(aboutRef)}
      >
        <AiOutlineArrowDown />
      </div>
    </div>
  );
}
