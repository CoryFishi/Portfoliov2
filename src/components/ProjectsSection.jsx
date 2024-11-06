import project1Static from "../assets/project_1_static.png";
import project2Static from "../assets/project_2_static.png";
import project3Static from "../assets/project_3_static.png";
import project4Static from "../assets/project_4_static.png";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoGithub,
  IoLogoReact,
  IoLogoHtml5,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGnubash, SiPowershell } from "react-icons/si";

import { TbPlayerRecordFilled } from "react-icons/tb";

export default function ProjectsSection({ projectsRef }) {
  return (
    <div
      ref={projectsRef}
      className="w-full flex flex-col items-center justify-center text-center bg-blue-50 font-roboto dark:bg-slate-900"
    >
      {/* Header */}
      <div>
        <h1 className="text-5xl mt-16 border-b-2 mb-3">My Projects</h1>
      </div>
      {/* Select Projects */}
      <div className="w-full hidden flex-col h-screen xl:flex">
        {/* Selected Focus Screen */}
        <div className="group w-full flex justify-center items-center p-2 h-1/2 mx-auto">
          <div className="group w-1/2 grid place-items-center rounded text-center relative">
            <img
              src={project1Static}
              alt="Default Image"
              className="absolute top-[calc(height/2)] opacity-100 transition-opacity duration-300 object-contain w-4/5 right-0"
            />
            <img
              src="https://camo.githubusercontent.com/f55bac5a5ea894c90eede9cd223cbaec2bedfaafdc684c3223ee3887c17cabef/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45785a586c6e4e3239685a444d3063325a684d57566c59335578596d526e6232316f64545a774e7a4a6c626d356f626d5a6e6558493563695a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f383378416b6952615a5457486a336d565a392f67697068792e676966"
              alt="Hover Image"
              className="absolute top-[calc(height/2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 object-contain w-4/5 right-0"
            />
          </div>

          <div className="w-1/2 flex flex-col">
            <div className="w-full p-2 m-3 rounded text-left">
              <h2 className="text-2xl font-bold">
                Property Management Solution in React
              </h2>
              <p className="text-xl max-w-[550px]">
                This is a solution that allows you to manage your self storage
                property by connecting to OpenTech's REST APIs, made with
                vanilla JavaScript and React.
              </p>
              <div className="text-md mt-4 max-w-lg flex flex-wrap gap-3">
                <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                  <IoLogoReact className="text-lg" />
                  <p>React</p>
                </div>
                <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                  <RiTailwindCssFill className="text-blue-500" />
                  <p>TailwindCSS</p>
                </div>
                <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                  <IoLogoJavascript className="text-yellow-500" />
                  <p>JavaScript</p>
                </div>
              </div>
              <div className="mt-5 flex gap-3">
                <button
                  className="px-3 flex items-center text-center w-fit gap-1 text-lg underline"
                  onClick={() =>
                    window.open(
                      "https://propertymanager.netlify.app/",
                      "_blank"
                    )
                  }
                >
                  <TbPlayerRecordFilled className="text-red-500 animate-pulse" />
                  Live Site
                </button>
                <button
                  className=" px-3 flex items-center text-center w-fit gap-1 text-lg underline"
                  onClick={() =>
                    window.open("https://github.com/CoryFishi/NewPMS", "_blank")
                  }
                >
                  <IoLogoGithub className="text-black" />
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Selection Options */}
        <div className="w-full grid grid-cols-4 gap-5 rounded text-center px-60 mt-2">
          {/* Project 1 Option */}
          <div className="group hover:bg-gray-300 p-2 hover:scale-105 rounded transition duration-300 ease-in-out transform select-none hover:cursor-pointer">
            <div className="flex items-center justify-center relative">
              <img
                src={project1Static}
                alt="Default Image"
                className="group-hover:opacity-0 transition-opacity duration-300 w-full h-1/2"
              />
              <img
                src="https://camo.githubusercontent.com/f55bac5a5ea894c90eede9cd223cbaec2bedfaafdc684c3223ee3887c17cabef/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45785a586c6e4e3239685a444d3063325a684d57566c59335578596d526e6232316f64545a774e7a4a6c626d356f626d5a6e6558493563695a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f383378416b6952615a5457486a336d565a392f67697068792e676966"
                alt="Hover Image"
                className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full"
              />
            </div>
            <h2 className="font-bold m-1 text-xl">React Property Management</h2>
            <div className="text-md mt-4 w-full flex flex-wrap gap-3 justify-center items-center mx-auto">
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoReact className="text-lg" />
                <p>React</p>
              </div>
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <RiTailwindCssFill className="text-blue-500" />
                <p>Tailwind</p>
              </div>
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoJavascript className="text-yellow-500" />
                <p>JavaScript</p>
              </div>
            </div>
          </div>
          {/* Project 2 Option */}
          <div className="group hover:bg-gray-300 p-2 hover:scale-105 rounded transition duration-300 ease-in-out transform select-none hover:cursor-pointer">
            <div className="flex items-center justify-center relative">
              <img
                src={project2Static}
                alt="Default Image"
                className="group-hover:opacity-0 transition-opacity duration-300 w-full h-1/2"
              />
              <img
                src="https://camo.githubusercontent.com/f55bac5a5ea894c90eede9cd223cbaec2bedfaafdc684c3223ee3887c17cabef/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45785a586c6e4e3239685a444d3063325a684d57566c59335578596d526e6232316f64545a774e7a4a6c626d356f626d5a6e6558493563695a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f383378416b6952615a5457486a336d565a392f67697068792e676966"
                alt="Hover Image"
                className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full"
              />
            </div>
            <h2 className="font-bold m-1 text-xl">Product Monitoring Panel</h2>
            <div className="text-md mt-4 w-full flex flex-wrap gap-3 justify-center items-center mx-auto">
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoJavascript className="text-yellow-500" />
                <p>JavaScript</p>
              </div>
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoCss3 className="text-blue-500" />
                <p>CSS</p>
              </div>
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoHtml5 className="text-orange-500" />
                <p>HTML</p>
              </div>
            </div>
          </div>
          {/* Project 3 Option */}
          <div className="group hover:bg-gray-300 p-2 hover:scale-105 rounded transition duration-300 ease-in-out transform select-none hover:cursor-pointer">
            <div className="flex items-center justify-center relative">
              <img
                src={project3Static}
                alt="Default Image"
                className="group-hover:opacity-0 transition-opacity duration-300 w-full h-1/2"
              />
              <img
                src="https://camo.githubusercontent.com/f55bac5a5ea894c90eede9cd223cbaec2bedfaafdc684c3223ee3887c17cabef/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45785a586c6e4e3239685a444d3063325a684d57566c59335578596d526e6232316f64545a774e7a4a6c626d356f626d5a6e6558493563695a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f383378416b6952615a5457486a336d565a392f67697068792e676966"
                alt="Hover Image"
                className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full"
              />
            </div>
            <h2 className="font-bold m-1 text-xl">JS Property Manangement</h2>
            <div className="text-md mt-4 w-full flex flex-wrap gap-3 justify-center items-center mx-auto">
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoJavascript className="text-yellow-500" />
                <p>JavaScript</p>
              </div>
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoCss3 className="text-blue-500" />
                <p>CSS</p>
              </div>
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoHtml5 className="text-orange-500" />
                <p>HTML</p>
              </div>
            </div>
          </div>
          {/* Project 4 Option */}
          <div className="group hover:bg-gray-300 p-2 hover:scale-105 rounded transition duration-300 ease-in-out transform select-none hover:cursor-pointer">
            <div className="flex items-center justify-center relative">
              <img
                src={project4Static}
                alt="Default Image"
                className="group-hover:opacity-0 transition-opacity duration-300 w-full h-1/2"
              />
              <img
                src="https://camo.githubusercontent.com/f55bac5a5ea894c90eede9cd223cbaec2bedfaafdc684c3223ee3887c17cabef/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45785a586c6e4e3239685a444d3063325a684d57566c59335578596d526e6232316f64545a774e7a4a6c626d356f626d5a6e6558493563695a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f383378416b6952615a5457486a336d565a392f67697068792e676966"
                alt="Hover Image"
                className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full"
              />
            </div>
            <h2 className="font-bold m-1 text-xl">Integration Scripting</h2>

            <div className="text-md mt-4 w-full flex flex-wrap gap-3 justify-center items-center mx-auto">
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <SiPowershell className="text-blue-500" />
                <p>PowerShell</p>
              </div>
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <SiGnubash className="text-black" />
                <p>BASH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Column Project 1 */}
      <div className="group w-full flex justify-center">
        <div className="group w-2/5 grid  m-3 rounded p-2 transform">
          <img
            src={project1Static}
            alt="Default Image"
            className="group-hover:opacity-0 transition-opacity duration-300 w-full"
          />
          <img
            src="https://camo.githubusercontent.com/f55bac5a5ea894c90eede9cd223cbaec2bedfaafdc684c3223ee3887c17cabef/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45785a586c6e4e3239685a444d3063325a684d57566c59335578596d526e6232316f64545a774e7a4a6c626d356f626d5a6e6558493563695a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f383378416b6952615a5457486a336d565a392f67697068792e676966"
            alt="Hover Image"
            className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full"
          />
        </div>

        <div className="w-2/5 flex flex-col justify-center">
          <div className="w-full p-2 m-3 rounded text-left">
            <h2 className="text-2xl font-bold">
              Property Management Solution in React
            </h2>
            <p className="text-xl max-w-[550px]">
              This is a solution that allows you to manage your self storage
              property by connecting to OpenTech's REST APIs, made with vanilla
              JavaScript and React.
            </p>
            <div className="text-md mt-4 max-w-lg flex flex-wrap gap-3">
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoReact className="text-lg" />
                <p>React</p>
              </div>
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <RiTailwindCssFill className="text-blue-500" />
                <p>TailwindCSS</p>
              </div>
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoJavascript className="text-yellow-500" />
                <p>JavaScript</p>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <button
                className="px-3 flex items-center text-center w-fit gap-1 text-lg underline"
                onClick={() =>
                  window.open("https://propertymanager.netlify.app/", "_blank")
                }
              >
                <TbPlayerRecordFilled className="text-red-500 animate-pulse" />
                Live Site
              </button>
              <button
                className=" px-3 flex items-center text-center w-fit gap-1 text-lg underline"
                onClick={() =>
                  window.open("https://github.com/CoryFishi/NewPMS", "_blank")
                }
              >
                <IoLogoGithub className="text-black" />
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Left Column Project 2 */}
      <div className="group w-full flex justify-center">
        <div className="w-2/5 flex flex-col justify-center items-center ">
          <div className="w-full p-2 m-3 rounded text-left mx-auto">
            <h2 className="text-2xl font-bold text-right">
              Product Monitoring Panel
            </h2>
            <p className="text-xl max-w-[550px] float-right text-right">
              This is a solution that allows you to manage your self storage
              property by connecting to OpenTech's REST APIs, made with vanilla
              JavaScript and React.
            </p>
            <div className="flex justify-end text-md w-full pt-4">
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoJavascript className="text-yellow-500" />
                <p>JavaScript</p>
              </div>
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoCss3 className="text-blue-500" />
                <p>CSS</p>
              </div>
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoHtml5 className="text-orange-500" />
                <p>HTML</p>
              </div>
            </div>
            <div className="mt-5 flex gap-3 float-right">
              <button
                className="px-3 flex items-center text-center w-fit gap-1 text-lg underline"
                onClick={() =>
                  window.open("https://propertymanager.netlify.app/", "_blank")
                }
              >
                <TbPlayerRecordFilled className="text-red-500 animate-pulse" />
                Live Site
              </button>
              <button
                className=" px-3 flex items-center text-center w-fit gap-1 text-lg underline"
                onClick={() =>
                  window.open("https://github.com/CoryFishi/NewPMS", "_blank")
                }
              >
                <IoLogoGithub className="text-black" />
                GitHub
              </button>
            </div>
          </div>
        </div>
        <div className="group w-2/5 grid m-3 rounded p-2 transform">
          <img
            src={project2Static}
            alt="Default Image"
            className="group-hover:opacity-0 transition-opacity duration-300 w-full"
          />
          <img
            src="https://camo.githubusercontent.com/f55bac5a5ea894c90eede9cd223cbaec2bedfaafdc684c3223ee3887c17cabef/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45785a586c6e4e3239685a444d3063325a684d57566c59335578596d526e6232316f64545a774e7a4a6c626d356f626d5a6e6558493563695a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f383378416b6952615a5457486a336d565a392f67697068792e676966"
            alt="Hover Image"
            className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full"
          />
        </div>
      </div>
      {/* Right Column Project 3 */}
      <div className="group w-full flex justify-center">
        <div className="group w-2/5 grid  m-3 rounded p-2 transform">
          <img
            src={project3Static}
            alt="Default Image"
            className="group-hover:opacity-0 transition-opacity duration-300 w-full"
          />
          <img
            src="https://camo.githubusercontent.com/f55bac5a5ea894c90eede9cd223cbaec2bedfaafdc684c3223ee3887c17cabef/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45785a586c6e4e3239685a444d3063325a684d57566c59335578596d526e6232316f64545a774e7a4a6c626d356f626d5a6e6558493563695a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f383378416b6952615a5457486a336d565a392f67697068792e676966"
            alt="Hover Image"
            className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full"
          />
        </div>

        <div className="w-2/5 flex flex-col justify-center">
          <div className="w-full p-2 m-3 rounded text-left">
            <h2 className="text-2xl font-bold">
              Property Management Solution in JavaScript
            </h2>
            <p className="text-xl max-w-[550px]">
              This is a solution that allows you to manage your self storage
              property by connecting to OpenTech's REST APIs, made with vanilla
              JavaScript and React.
            </p>
            <div className="text-md mt-4 max-w-lg flex flex-wrap gap-3">
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoJavascript className="text-yellow-500" />
                <p>JavaScript</p>
              </div>
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoCss3 className="text-blue-500" />
                <p>CSS</p>
              </div>
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <IoLogoHtml5 className="text-orange-500" />
                <p>HTML</p>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <button
                className="px-3 flex items-center text-center w-fit gap-1 text-lg underline"
                onClick={() =>
                  window.open("https://propertymanager.netlify.app/", "_blank")
                }
              >
                <TbPlayerRecordFilled className="text-red-500 animate-pulse" />
                Live Site
              </button>
              <button
                className=" px-3 flex items-center text-center w-fit gap-1 text-lg underline"
                onClick={() =>
                  window.open("https://github.com/CoryFishi/NewPMS", "_blank")
                }
              >
                <IoLogoGithub className="text-black" />
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Left Column Project 4 */}
      <div className="group w-full flex justify-center">
        <div className="w-2/5 flex flex-col justify-center items-center ">
          <div className="w-full p-2 m-3 rounded text-left mx-auto">
            <h2 className="text-2xl font-bold text-right">
              Integration Scripting
            </h2>
            <p className="text-xl max-w-[550px] float-right text-right">
              This is a solution that allows you to manage your self storage
              property by connecting to OpenTech's REST APIs, made with vanilla
              JavaScript and React.
            </p>
            <div className="flex justify-end text-md w-full pt-4">
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <SiPowershell className="text-blue-500" />
                <p>PowerShell</p>
              </div>
              <div className="bg-gray-500 bg-opacity-10 rounded-full px-3 flex items-center text-center w-fit">
                <SiGnubash className="text-black" />
                <p>BASH</p>
              </div>
            </div>
            <div className="mt-5 flex gap-3 float-right">
              <button
                className="px-3 flex items-center text-center w-fit gap-1 text-lg underline"
                onClick={() =>
                  window.open("https://propertymanager.netlify.app/", "_blank")
                }
              >
                <TbPlayerRecordFilled className="text-red-500 animate-pulse" />
                Live Site
              </button>
              <button
                className=" px-3 flex items-center text-center w-fit gap-1 text-lg underline"
                onClick={() =>
                  window.open("https://github.com/CoryFishi/NewPMS", "_blank")
                }
              >
                <IoLogoGithub className="text-black" />
                GitHub
              </button>
            </div>
          </div>
        </div>
        <div className="group w-2/5 grid m-3 rounded p-2 transform">
          <img
            src={project4Static}
            alt="Default Image"
            className="group-hover:opacity-0 transition-opacity duration-300 w-full"
          />
          <img
            src="https://camo.githubusercontent.com/f55bac5a5ea894c90eede9cd223cbaec2bedfaafdc684c3223ee3887c17cabef/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45785a586c6e4e3239685a444d3063325a684d57566c59335578596d526e6232316f64545a774e7a4a6c626d356f626d5a6e6558493563695a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f383378416b6952615a5457486a336d565a392f67697068792e676966"
            alt="Hover Image"
            className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full"
          />
        </div>
      </div>
    </div>
  );
}
