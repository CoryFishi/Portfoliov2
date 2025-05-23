import {
  IoLogoJavascript,
  IoLogoGithub,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoPython,
} from "react-icons/io5";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { FaGitAlt, FaJava, FaGolang } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { TbBrandPowershell } from "react-icons/tb";

export default function AboutSection({ aboutRef }) {
  const skills = [
    {
      icon: <IoLogoReact className="text-blue-500" />,
      label: "React",
      proficiency: "2+ Years",
    },
    {
      icon: <IoLogoJavascript className="text-yellow-500" />,
      label: "JavaScript",
      proficiency: "4+ Years",
    },
    {
      icon: <IoLogoPython className="text-blue-500" />,
      label: "Python",
      proficiency: "2+ Years",
    },
    {
      icon: <FaJava className="text-red-500" />,
      label: "Java",
      proficiency: "1+ Years",
    },
    {
      icon: <IoLogoGithub className="text-black dark:text-white" />,
      label: "GitHub",
      proficiency: "2+ Years",
    },
    {
      icon: <IoLogoNodejs className="text-green-500" />,
      label: "Node JS",
      proficiency: "3+ Years",
    },
    {
      icon: <SiExpress className="text-black dark:text-white" />,
      label: "Express",
      proficiency: "3+ Years",
    },
    {
      icon: <FaGitAlt className="text-orange-500" />,
      label: "Git",
      proficiency: "2+ Years",
    },
    {
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      label: "Next JS",
      proficiency: "2+ Years",
    },
    {
      icon: <TbBrandPowershell className="text-blue-500" />,
      label: "PowerShell",
      proficiency: "2+ Years",
    },
    { icon: <FcLinux />, label: "Linux", proficiency: "2+ Years" },
    {
      icon: <FaGolang className="text-teal-600" />,
      label: "Golang",
      proficiency: "1+ Years",
    },
  ];
  return (
    <div
      ref={aboutRef}
      className="w-full min-h-screen flex flex-col justify-center font-roboto overflow-x-hidden px-6 md:px-20 lg:px-48 py-10"
    >
      <div className="w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-10 border-b border-teal-500">
          About Me
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between items-start gap-10 lg:gap-0 mt-6 md:mt-10">
        <div className="w-full lg:w-2/5 text-left">
          <p className="text-lg md:text-xl mt-2">
            I'm an <span className="font-bold">Automation Engineer</span> with
            3+ years of experience in product development, technical support,
            and IT operations. Skilled at bridging technical and customer needs,
            driving product improvements, and collaborating across teams to
            deliver impactful solutions. Strong communicator who thrives in
            fast-paced, results-driven environments.
          </p>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col justify-evenly">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl border-b mb-5 text-left">
              My Skills
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-5 text-5xl md:text-7xl lg:text-8xl relative overflow-visible z-0">
            {skills.map(({ icon, label, proficiency }, index) => (
              <div
                key={index}
                className="group relative w-full flex flex-col items-center hover:scale-105 rounded transition duration-300 ease-in-out transform select-none"
              >
                {icon}
                <h2 className="text-base md:text-lg lg:text-2xl mt-2">
                  {label}
                </h2>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg transition-all duration-300 whitespace-nowrap z-20">
                  Proficient - {proficiency}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
