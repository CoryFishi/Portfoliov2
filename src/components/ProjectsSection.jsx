import { useState } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa6";
import project1Static from "../assets/project_1_static.png?url";
import project2Static from "../assets/project_2_static.png?url";
import project3Static from "../assets/project_3_static.png?url";
import project4Static from "../assets/project_4_static.png?url";

import {
  IoLogoJavascript,
  IoLogoGithub,
  IoLogoReact,
  IoLogoNodejs,
} from "react-icons/io5";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiElectron, SiExpress, SiGnubash, SiMqtt } from "react-icons/si";
import { TbBrandPowershell, TbPlayerRecordFilled } from "react-icons/tb";
import { DiLinux } from "react-icons/di";

export default function ProjectsSection({ projectsRef }) {
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
        { name: "React", icon: <IoLogoReact className="text-lg" /> },
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
      github: "123",
      live: "123",
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
        { name: "React", icon: <IoLogoReact className="text-lg" /> },
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
      github: "123",
      live: "123",
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
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Node", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-black" /> },
      ],
      github: "123",
    },
    {
      id: 4,
      title: "System Integrations",
      description: "Automation and scripting with PowerShell, Bash, and Linux.",
      image: project4Static,
      hoverImage: project4Static,
      technologies: [
        {
          name: "PowerShell",
          icon: <TbBrandPowershell className="text-blue-500" />,
        },
        { name: "Bash", icon: <SiGnubash className="text-black" /> },
        { name: "Linux", icon: <DiLinux className="text-black" /> },
      ],
      github: "123",
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
          icon: <SiMqtt className="text-black" />,
        },
        {
          name: "MQTT",
          icon: <SiMqtt className="text-black" />,
        },
        { name: "Electron", icon: <SiElectron className="text-blue-500" /> },
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Node", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-black" /> },
      ],
      github: "123",
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
          name: "Wirepas",
          icon: <SiMqtt className="text-black" />,
        },
        {
          name: "MQTT",
          icon: <SiMqtt className="text-black" />,
        },
        { name: "Electron", icon: <SiElectron className="text-blue-500" /> },
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Node", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-black" /> },
      ],
      github: "123",
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
          name: "Wirepas",
          icon: <SiMqtt className="text-black" />,
        },
        {
          name: "MQTT",
          icon: <SiMqtt className="text-black" />,
        },
        { name: "Electron", icon: <SiElectron className="text-blue-500" /> },
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Node", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-black" /> },
      ],
      github: "123",
    },
  ]);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div
      ref={projectsRef}
      className="w-full min-h-screen flex flex-col font-robot justify-center overflow-hidden pt-20 pb-10"
    >
      {/* Header */}
      <div className="ml-48 w-96">
        <h1 className="text-5xl font-bold border-b border-teal-500">
          My Projects
        </h1>
      </div>
      {/* Selected Focus Screen */}
      <div className="group w-full flex h-2/3 justify-center px-28 my-6">
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src={selectedProject.image}
            alt="Default Image"
            className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300 object-contain w-full h-full pl-20"
          />
          <img
            src={selectedProject.hoverImage}
            alt="Hover Image"
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 object-contain w-full h-full pl-20"
          />
        </div>
        <div className="h-full w-full flex flex-col justify-center">
          <div className="w-full p-2 m-3 rounded text-left">
            <h2 className="text-2xl font-bold">
              {selectedProject.title || "Project Title"}
            </h2>
            <p className="text-xl max-w-[550px]">
              {selectedProject.description ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            </p>
            <div className="text-md mt-4 max-w-lg flex flex-wrap gap-3">
              {selectedProject.technologies.map((tech, index) => (
                <div
                  className="bg-zinc-500/10 rounded-full px-3 flex items-center text-center w-fit"
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
                  className="px-3 flex items-center text-center w-fit gap-1 text-lg underline hover:bg-zinc-300 rounded-lg text-blue-500"
                  onClick={() => window.open(selectedProject.github, "_blank")}
                >
                  <IoLogoGithub className="text-black" />
                  GitHub
                </button>
              )}
              {selectedProject.live && (
                <button
                  className="px-3 flex items-center text-center w-fit gap-1 text-lg underline hover:bg-zinc-300 rounded-lg text-blue-500"
                  onClick={() => window.open(selectedProject.live, "_blank")}
                >
                  <TbPlayerRecordFilled className="text-red-600 animate-pulse" />
                  Live Site
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Selection Options */}
      <div
        title="Click to see details"
        className="w-full h-1/3 grid grid-cols-4 gap-5 rounded mt-2 text-center px-24"
      >
        {projects.map((project) => (
          <div
            onClick={() => handleProjectClick(project)}
            key={project.id}
            className="group hover:bg-zinc-300 dark:hover:bg-zinc-800 p-2 hover:scale-105 rounded transition duration-300 ease-in-out transform select-none hover:cursor-pointer"
          >
            <div className="relative w-full h-[150px] flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt="Default Image"
                className="absolute opacity-100 transition-opacity duration-300 object-contain w-full h-full"
              />
              <img
                src={project.hoverImage}
                alt="Hover Image"
                className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 object-contain w-full h-full"
              />
            </div>
            <h2 className="font-bold m-1 text-xl">
              {project.title || "Project Title"}
            </h2>
            <div className="text-md mt-4 w-full flex flex-wrap gap-3 justify-center items-center mx-auto">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-zinc-500/10 rounded-full px-3 flex items-center text-center w-fit"
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
