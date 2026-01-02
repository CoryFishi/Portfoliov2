import {
  IoLogoGithub,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoPython,
} from "react-icons/io5";
import { SiDotnet, SiExpress, SiNextdotjs } from "react-icons/si";
import { FaGitAlt, FaAws } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { TbBrandPowershell } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";

export default function AboutSection({ aboutRef }) {
  const skills = [
    {
      icon: <DiMongodb className="text-green-900" />,
      label: "MongoDB",
      proficiency: "Proficient - 3+ Years",
    },
    {
      icon: <SiExpress className="text-black dark:text-white" />,
      label: "Express",
      proficiency: "Proficient - 3+ Years",
    },
    {
      icon: <IoLogoReact className="text-blue-500" />,
      label: "React",
      proficiency: "Proficient - 3+ Years",
    },
    {
      icon: <IoLogoNodejs className="text-green-500" />,
      label: "Node JS",
      proficiency: "Proficient - 3+ Years",
    },
    {
      icon: <IoLogoPython className="text-blue-500" />,
      label: "Python",
      proficiency: "Intermediate - 1+ Years",
    },
    {
      icon: <SiDotnet className="text-purple-500" />,
      label: "Dotnet",
      proficiency: "Intermediate - 1+ Years",
    },
    {
      icon: <IoLogoGithub className="text-black dark:text-white" />,
      label: "GitHub",
      proficiency: "Proficient - 3+ Years",
    },
    {
      icon: <FaGitAlt className="text-orange-500" />,
      label: "Git",
      proficiency: "Proficient - 3+ Years",
    },
    {
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      label: "Next JS",
      proficiency: "Proficient - 3+ Years",
    },
    {
      icon: <TbBrandPowershell className="text-blue-500" />,
      label: "PowerShell",
      proficiency: "Proficient - 3+ Years",
    },
    {
      icon: <FcLinux />,
      label: "Linux",
      proficiency: "Intermediate - 2+ Years",
    },
    {
      icon: <FaAws className="text-black dark:text-white" />,
      label: "AWS",
      proficiency: "Intermediate - 2+ Years",
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

      <div className="flex flex-col lg:flex-row w-full justify-between lg:items-center gap-10 lg:gap-0 mt-6 md:mt-10">
        <div className="w-full lg:w-3/5 text-left lg:pr-32 h-full flex items-center justify-center">
          <p className="text-lg md:text-2xl leading-relaxed">
            I'm a{" "}
            <span className="font-bold">Full-Stack Software Engineer</span> with
            1+ year of hands-on software engineering experience and 3+ years of
            product development experience. I work across the full stack to
            build reliable, scalable applications while bringing a strong
            product mindset. I translate user needs into practical features,
            iterate quickly, and drive continuous product improvement. I thrive
            in collaborative, fast-paced environments and enjoy owning solutions
            from idea to delivery.
          </p>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col justify-evenly">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl border-b border-teal-500 mb-5 text-left">
              My Skills
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-5 text-5xl md:text-7xl lg:text-8xl relative overflow-visible z-0">
            {skills
              .filter((skill) => skill.proficiency)
              .sort((a, b) => {
                const getLevel = (prof) => {
                  if (prof.includes("Proficient")) return 2;
                  if (prof.includes("Intermediate")) return 1;
                  return 0;
                };
                return getLevel(b.proficiency) - getLevel(a.proficiency);
              })
              .map(({ icon, label, proficiency }, index) => (
                <div
                  key={index}
                  className="group relative w-full flex flex-col items-center hover:scale-105 rounded transition duration-300 ease-in-out transform select-none"
                >
                  {icon}
                  <h2 className="text-base md:text-lg lg:text-2xl mt-2">
                    {label}
                  </h2>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-zinc-800 text-white text-sm px-3 py-1 rounded shadow-lg transition-all duration-300 whitespace-nowrap z-50">
                    {proficiency}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
