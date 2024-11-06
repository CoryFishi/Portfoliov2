import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoGithub,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoPython,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiGnubash,
  SiPowershell,
} from "react-icons/si";
import { FaGitAlt, FaJava } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";

export default function AboutSection({
  aboutRef,
  handleScrollToSection,
  contactRef,
}) {
  return (
    <div
      ref={aboutRef}
      className="w-full h-full flex items-center justify-center text-center bg-blue-50 flex-col font-roboto dark:bg-slate-900 overflow-x-hidden"
    >
      <div>
        <h1 className="text-5xl border-b-2 mb-10">About Me</h1>
      </div>

      <div className="flex w-full justify-evenly mt-10">
        <div className="w-2/5 text-left ">
          <h2 className="text-4xl border-b-2 mb-5">Get to know me</h2>
          <p className="text-xl mt-2">
            I'm a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the Projects
            section. I also like sharing content related to the stuff that I
            have learned over the years in Web Development so it can help other
            people of the Dev Community. Feel free to Connect or Follow me on my
            Linkedin and Instagram where I post useful content related to Web
            Development and Programming I'm open to Job opportunities where I
            can contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to contact me.
          </p>
          <div className="text-center mt-5">
            <button
              className="rounded bg-neutral-300 hover:bg-neutral-200 p-2 my-10 dark:bg-slate-800 dark:hover:bg-slate-500 "
              onClick={() => handleScrollToSection(contactRef)}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="w-2/5 flex flex-col justify-evenly">
          <h2 className="text-4xl border-b-2 mb-5 text-left">My Skills</h2>
          <div className="grid grid-cols-4 justify-center items-center text-center w-full text-8xl gap-5">
            <div className="w-full justify-center items-center text-center flex flex-col">
              <IoLogoReact className="text-blue-500" />
              <h2 className="text-2xl">React</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <IoLogoJavascript className="text-yellow-500 w-full" />
              <h2 className="text-2xl">Java Script</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <IoLogoPython className="text-black w-full" />
              <h2 className="text-2xl">Python</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <FaJava className="text-red-500 w-full" />
              <h2 className="text-2xl">Java</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <IoLogoCss3 className="text-blue-500 w-full" />
              <h2 className="text-2xl">CSS3</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <IoLogoGithub className="text-black w-full" />
              <h2 className="text-2xl">GitHub</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <IoLogoHtml5 className="text-orange-500 w-full" />
              <h2 className="text-2xl">HTML 5</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <IoLogoNodejs className="text-green-500 w-full" />
              <h2 className="text-2xl">Node JS</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <RiTailwindCssFill className="text-blue-300 w-full" />
              <h2 className="text-2xl">Tailwind CSS</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <SiTypescript className="text-blue-500 w-full" />
              <h2 className="text-2xl">TypeScript</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <SiExpress className="text-black w-full" />
              <h2 className="text-2xl">Express</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <FaGitAlt className="text-orange-500 w-full" />
              <h2 className="text-2xl">Git</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <SiNextdotjs className="text-black w-full" />
              <h2 className="text-2xl">Next JS</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <SiGnubash className="text-black w-full" />
              <h2 className="text-2xl">Bash</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <SiPowershell className="text-blue-500 w-full" />
              <h2 className="text-2xl">PowerShell</h2>
            </div>
            <div className="w-full justify-center items-center text-center flex flex-col">
              <FcLinux className=" w-full" />
              <h2 className="text-2xl">Linux</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
