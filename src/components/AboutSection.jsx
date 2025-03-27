import {
  IoLogoJavascript,
  IoLogoGithub,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoPython,
} from "react-icons/io5";
import {
  SiExpress,
  SiNextdotjs,
  SiGnubash,
  SiPowershell,
} from "react-icons/si";
import { FaGitAlt, FaJava, FaGolang } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";

export default function AboutSection({ aboutRef }) {
  return (
    <div
      ref={aboutRef}
      className="w-full h-full flex justify-center flex-col font-robot overflow-x-hidden px-48"
    >
      <div className="w-96">
        <h1 className="text-5xl font-bold mb-10 border-b border-teal-500">
          About Me
        </h1>
      </div>

      <div className="flex w-full justify-evenly mt-10 items-center">
        <div className="w-2/5 text-left">
          <p className="text-xl mt-2">
            I'm an <span className="font-bold">Automation Engineer</span> with
            3+ years of experience in product development, technical support,
            and IT operations. Skilled at bridging technical and customer needs,
            driving product improvements, and collaborating across teams to
            deliver impactful solutions. Strong communicator who thrives in
            fast-paced, results-driven environments.
          </p>
        </div>
        <div className="w-2/5 flex flex-col justify-evenly">
          <div className="w-96">
            <h2 className="text-4xl border-b mb-5 text-left">My Skills</h2>
          </div>
          <div className="grid grid-cols-4 justify-center items-center text-center w-full text-8xl gap-5">
            <div className="w-full justify-center items-center text-center flex flex-col hover:scale-105 rounded transition duration-300 ease-in-out transform select-none">
              <IoLogoReact className="text-blue-500" />
              <h2 className="text-2xl">React</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col hover:scale-105 rounded transition duration-300 ease-in-out transform select-none">
              <IoLogoJavascript className="text-yellow-500 w-full" />
              <h2 className="text-2xl">Java Script</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col hover:scale-105 rounded transition duration-300 ease-in-out transform select-none">
              <IoLogoPython className="text-blue-500 w-full" />
              <h2 className="text-2xl">Python</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col hover:scale-105 rounded transition duration-300 ease-in-out transform select-none">
              <FaJava className="text-red-500 w-full" />
              <h2 className="text-2xl">Java</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col hover:scale-105 rounded transition duration-300 ease-in-out transform select-none">
              <IoLogoGithub className="text-black w-full dark:text-white" />
              <h2 className="text-2xl">GitHub</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col hover:scale-105 rounded transition duration-300 ease-in-out transform select-none">
              <IoLogoNodejs className="text-green-500 w-full" />
              <h2 className="text-2xl">Node JS</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col hover:scale-105 rounded transition duration-300 ease-in-out transform select-none">
              <SiExpress className="text-black w-full dark:text-white" />
              <h2 className="text-2xl">Express</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col hover:scale-105 rounded transition duration-300 ease-in-out transform select-none">
              <FaGitAlt className="text-orange-500 w-full" />
              <h2 className="text-2xl">Git</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col hover:scale-105 rounded transition duration-300 ease-in-out transform select-none">
              <SiNextdotjs className="text-black w-full dark:text-white" />
              <h2 className="text-2xl">Next JS</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col hover:scale-105 rounded transition duration-300 ease-in-out transform select-none">
              <SiPowershell className="text-blue-500 w-full" />
              <h2 className="text-2xl">PowerShell</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col hover:scale-105 rounded transition duration-300 ease-in-out transform select-none">
              <FcLinux className=" w-full" />
              <h2 className="text-2xl">Linux</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col hover:scale-105 rounded transition duration-300 ease-in-out transform select-none">
              <FaGolang className="text-teal-600 w-full" />
              <h2 className="text-2xl">Golang</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
