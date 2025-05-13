import { useState } from "react";
import { FaDiscord, FaDocker, FaNodeJs, FaReact } from "react-icons/fa6";
import project1Static from "../assets/project_1_static.png?url";
import project2Static from "../assets/project_2_static.png?url";
import project3Static from "../assets/project_3_static.png?url";
import project4Static from "../assets/project_4_static.png?url";
import { IoLogoGithub, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiArduino,
  SiCplusplus,
  SiElectron,
  SiExpress,
  SiGnubash,
  SiMqtt,
} from "react-icons/si";
import { TbBrandPowershell, TbPlayerRecordFilled } from "react-icons/tb";
import { DiLinux } from "react-icons/di";
import { FcWiFiLogo } from "react-icons/fc";
import { ImEmbed } from "react-icons/im";

export default function ProjectsSection({
  projectsRef,
  handleScrollToSection,
}) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Property Management Platform",
      description:
        "A platform for managing self-storage properties using OpenTech APIs. Includes a dashboard for monitoring property status and analytics. Currently in use by OpenTech devlopment, QA, and support teams. **Merged with Device Monitoring Dashboard 03/25**",
      image: project1Static,
      hoverImage:
        "https://camo.githubusercontent.com/f55bac5a5ea894c90eede9cd223cbaec2bedfaafdc684c3223ee3887c17cabef/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45785a586c6e4e3239685a444d3063325a684d57566c59335578596d526e6232316f64545a774e7a4a6c626d356f626d5a6e6558493563695a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f383378416b6952615a5457486a336d565a392f67697068792e676966",
      technologies: [
        { name: "React", icon: <IoLogoReact className="text-blue-400" /> },
        {
          name: "Tailwind",
          icon: <RiTailwindCssFill className="text-blue-500" />,
        },
        {
          name: "Supabase",
          icon: <RiSupabaseFill className="text-green-700" />,
        },
        {
          name: "Node",
          icon: <IoLogoNodejs className="text-green-700" />,
        },
      ],
      github: "https://github.com/CoryFishi/MockPMS",
      live: "https://propertymanager-dev.netlify.app/",
    },
    {
      id: 2,
      title: "Device Monitoring Dashboard",
      description:
        "Dashboard for monitoring devices using OpenTech APIs. The dashboard provides real-time updates and analytics of target devices allowing for strategic support. Currently in use by OpenTech devlopment, QA, and support teams. **Merged with Property Management Platform 03/25**",
      image: project2Static,
      hoverImage:
        "https://camo.githubusercontent.com/f55bac5a5ea894c90eede9cd223cbaec2bedfaafdc684c3223ee3887c17cabef/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45785a586c6e4e3239685a444d3063325a684d57566c59335578596d526e6232316f64545a774e7a4a6c626d356f626d5a6e6558493563695a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f383378416b6952615a5457486a336d565a392f67697068792e676966",
      technologies: [
        { name: "React", icon: <IoLogoReact className="text-blue-400" /> },
        {
          name: "Tailwind",
          icon: <RiTailwindCssFill className="text-blue-500" />,
        },
        {
          name: "Supabase",
          icon: <RiSupabaseFill className="text-green-700" />,
        },
        {
          name: "Node",
          icon: <IoLogoNodejs className="text-green-700" />,
        },
      ],
      github: "https://github.com/CoryFishi/MockPMS",
      live: "https://propertymanager-dev.netlify.app/",
    },
    {
      id: 3,
      title: "Stock Trading Platform",
      description:
        "A stock trading platform built within react the platform allows users to buy and sell stocks. The platform also provides real-time updates and analytics of target stocks allowing for strategic trading.",
      image: project3Static,
      hoverImage:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGF2ZGRweHd4eWMyZmpzeGtkbnk5MnIxeHV4aG5teXZ5ZjV2Ym1ieiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TIItRRDL4b3Z8g4nND/giphy.gif",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Node", icon: <FaNodeJs className="text-green-700" /> },
        {
          name: "Express",
          icon: <SiExpress className="text-black dark:text-white" />,
        },
      ],
      github: "https://github.com/CoryFishi/StockTrading",
    },
    {
      id: 4,
      title: "System Integrations",
      description:
        "Automation and scripting with PowerShell, Bash, and Linux. These integrations are to automate the connection between broker systems to the OpenTech APIs.",
      image: project4Static,
      hoverImage: project4Static,
      technologies: [
        {
          name: "PowerShell",
          icon: <TbBrandPowershell className="text-blue-500" />,
        },
        {
          name: "Bash",
          icon: <SiGnubash className="text-black dark:text-white" />,
        },
        {
          name: "Linux",
          icon: <DiLinux className="text-black dark:text-white" />,
        },
      ],
      github: "https://github.com/CoryFishi/Filewatcher-OTA-Integration-Script",
    },
    {
      id: 5,
      title: "Wirepas MQTT Tooling",
      description:
        "This is local tooling for Wirepas devices. The tooling allows for the monitoring and management of Wirepas devices. The tooling is built using Electron and React.",
      image: project4Static,
      hoverImage: project4Static,
      technologies: [
        {
          name: "Wirepas",
          icon: <SiMqtt className="text-black dark:text-white" />,
        },
        {
          name: "MQTT",
          icon: <SiMqtt className="text-black dark:text-white" />,
        },
        { name: "Electron", icon: <SiElectron className="text-blue-600" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Node", icon: <FaNodeJs className="text-green-700" /> },
        {
          name: "Express",
          icon: <SiExpress className="text-black dark:text-white" />,
        },
      ],
    },
    {
      id: 6,
      title: "ESP32 IoT Device Firmware",
      description:
        "This is a collection of firmware for ESP32 devices. The firmware was developed using the Arduino IDE and includes libraries for MQTT, HTTP, and WebSocket communication. The firmware is designed to be used with the Wirepas Mesh network. It allows for a user to remotely control many sensors (Camera and motion) with ease.",
      image: project4Static,
      hoverImage: project4Static,
      technologies: [
        {
          name: "C++",
          icon: <SiCplusplus className="text-blue-500" />,
        },
        {
          name: "MQTT",
          icon: <SiMqtt className="text-black dark:text-white" />,
        },
        { name: "Arduino", icon: <SiArduino className="text-blue-500" /> },
        { name: "Wi-Fi", icon: <FcWiFiLogo className="text-blue-800" /> },
        { name: "Embeded", icon: <ImEmbed className="text-red-500" /> },
      ],
      github: "https://github.com/CoryFishi/IoTDeviceFirmwareESP32/tree/main/",
    },
    {
      id: 7,
      title: "Discord Bot",
      description:
        "This is a collection of Discord bots I have created. They are all built using Node.js and the Discord.js library. The bots are designed to be modular and easy to use, with a focus on performance and reliability. They all have a set function from chat moderation to server management.",
      image: project4Static,
      hoverImage: project4Static,
      technologies: [
        {
          name: "DiscordJS",
          icon: <FaDiscord className="text-zinc-600" />,
        },
        {
          name: "Node",
          icon: <FaNodeJs className="text-green-700" />,
        },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        {
          name: "Linux",
          icon: <DiLinux className="text-black dark:text-white" />,
        },
      ],
      github: "https://github.com/CoryFishi/Palworld-Discord-Bot",
    },
  ]);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    handleScrollToSection(projectsRef);
  };

  return (
    <div
      ref={projectsRef}
      className="w-full min-h-screen flex flex-col font-roboto justify-center overflow-hidden pt-20 pb-10 px-6 md:px-20 lg:px-48"
    >
      {/* Header */}
      <div className="w-full">
        <h1 className="text-4xl md:text-5xl font-bold border-b border-teal-500">
          My Projects
        </h1>
      </div>

      {/* Selected Focus Screen */}
      <div className="group w-full flex flex-col lg:flex-row h-auto justify-center gap-6 my-6">
        {/* Image */}
        <div className="relative w-full lg:w-1/2 h-64 md:h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src={selectedProject.image}
            alt="Default Image"
            className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300 object-contain w-full h-full"
          />
          <img
            src={selectedProject.hoverImage}
            alt="Hover Image"
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 object-contain w-full h-full"
          />
        </div>

        {/* Description */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            {selectedProject.title}
          </h2>
          <p className="text-base md:text-xl mt-3">
            {selectedProject.description}
          </p>
          <div className="text-sm md:text-md mt-4 flex flex-wrap gap-3">
            {selectedProject.technologies.map((tech, index) => (
              <div
                className="bg-zinc-500/10 rounded-full px-3 flex items-center gap-1"
                key={index}
              >
                {tech.icon}
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            {selectedProject.github && (
              <button
                className="px-3 flex items-center gap-1 text-md underline hover:bg-zinc-300 rounded-lg text-blue-500"
                onClick={() => window.open(selectedProject.github, "_blank")}
              >
                <IoLogoGithub className="text-black" /> GitHub
              </button>
            )}
            {selectedProject.live && (
              <button
                className="px-3 flex items-center gap-1 text-md underline hover:bg-zinc-300 rounded-lg text-blue-500"
                onClick={() => window.open(selectedProject.live, "_blank")}
              >
                <TbPlayerRecordFilled className="text-red-600 animate-pulse" />{" "}
                Live Site
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Project Thumbnails */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project)}
            className="group hover:bg-zinc-300 dark:hover:bg-zinc-800 p-3 hover:scale-105 rounded transition duration-300 select-none cursor-pointer"
          >
            <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt="Default"
                className="absolute opacity-100 transition-opacity duration-300 object-contain w-full h-full"
              />
              <img
                src={project.hoverImage}
                alt="Hover"
                className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 object-contain w-full h-full"
              />
            </div>
            <h2 className="font-bold mt-2 text-lg text-center">
              {project.title}
            </h2>
            <div className="text-sm mt-3 flex flex-wrap gap-2 justify-center">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-zinc-500/10 rounded-full px-2 flex items-center gap-1"
                >
                  {tech.icon}
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
