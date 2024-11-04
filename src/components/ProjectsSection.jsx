import project1Static from "../assets/project_1_static.png";
import project2Static from "../assets/project_2_static.png";
import project3Static from "../assets/project_1_static.png";
import project4Static from "../assets/project_1_static.png";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoGithub,
  IoLogoReact,
  IoLogoHtml5,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

export default function ProjectsSection({ projectsRef }) {
  return (
    <div
      ref={projectsRef}
      className="w-full flex flex-col items-center justify-center text-center bg-blue-50 font-roboto"
    >
      <div>
        <h1 className="text-5xl">My Projects</h1>
      </div>
      <div className="w-full flex justify-evenly">
        <div className="w-1/2 grid grid-cols-2 m-3 rounded text-center p-2">
          <div className="group hover:bg-gray-400 p-4 m-3 hover:scale-105 bg-gray-200 rounded transition duration-300 ease-in-out transform select-none">
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
            <h2 className="font-bold m-1 text-xl">
              Property Management Solution in React
            </h2>
            <div className="flex justify-center items-center text-center w-full space-x-4 text-3xl">
              <RiTailwindCssFill className="text-blue-300" />
              <IoLogoReact className="text-blue-500" />
              <IoLogoJavascript className="text-yellow-500" />
              <IoLogoGithub className="text-black" />
            </div>
          </div>
          <div className="group hover:bg-gray-400 p-4 m-3 hover:scale-105 bg-gray-200 rounded transition duration-300 ease-in-out transform select-none">
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
            <h2 className="font-bold m-1 text-xl">
              Property Management Solution
            </h2>
            <div className="flex justify-center items-center text-center w-full space-x-4 text-3xl">
              <IoLogoJavascript className="text-yellow-500" />
              <IoLogoCss3 className="text-blue-500" />
              <IoLogoGithub className="text-black" />
              <IoLogoHtml5 className="text-orange-500" />
            </div>
          </div>
          <div className="group hover:bg-gray-400 p-4 m-3 hover:scale-105 bg-gray-200 rounded transition duration-300 ease-in-out transform select-none">
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
            <h2 className="font-bold m-1 text-xl">
              Product Monitoring Dashboard
            </h2>
            <div className="flex justify-center items-center text-center w-full space-x-4 text-3xl">
              <IoLogoJavascript className="text-yellow-500" />
              <IoLogoCss3 className="text-blue-500" />
              <IoLogoGithub className="text-black" />
              <IoLogoHtml5 className="text-orange-500" />
            </div>
          </div>
          <div className="group hover:bg-gray-400 p-4 m-3 hover:scale-105 bg-gray-200 rounded transition duration-300 ease-in-out transform select-none">
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
            <h2 className="font-bold m-1 text-xl">TBD</h2>
            <div className="flex justify-center items-center text-center w-full space-x-4 text-3xl"></div>
          </div>
        </div>
        <div className="w-1/2 bg-green-300 p-2 m-3 rounded">s</div>
      </div>
      <div className="group w-full flex justify-evenly">
        <div className="group w-1/2 grid place-items-center m-3 rounded text-center p-2 transform">
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

        <div className="w-1/2 flex justify-center items-center">
          <div className="w-full p-2 m-3 rounded text-left mx-auto">
            <h2 className="text-2xl font-bold">
              Property Management Solution in React
            </h2>
            <p className="text-xl max-w-[550px]">
              This is a solution that allows you to manage your self storage
              property by connecting to OpenTech's REST APIs, made with vanilla
              JavaScript and React.
            </p>
            <div className="flex text-5xl">
              <IoLogoJavascript className="text-yellow-500" />
              <IoLogoCss3 className="text-blue-500" />
              <IoLogoGithub className="text-black" />
              <IoLogoHtml5 className="text-orange-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="group w-full flex justify-evenly">
        <div className="w-1/2 flex flex-col justify-center items-center ">
          <div className="w-full p-2 m-3 rounded text-left mx-auto">
            <h2 className="text-2xl font-bold text-right">
              Property Management Solution in React
            </h2>
            <p className="text-xl max-w-[550px] float-right text-right">
              This is a solution that allows you to manage your self storage
              property by connecting to OpenTech's REST APIs, made with vanilla
              JavaScript and React.
            </p>
            <div className="flex justify-end text-5xl w-full">
              <IoLogoJavascript className="text-yellow-500" />
              <IoLogoCss3 className="text-blue-500" />
              <IoLogoGithub className="text-black" />
              <IoLogoHtml5 className="text-orange-500" />
            </div>
          </div>
        </div>
        <div className="group w-1/2 grid place-items-center m-3 rounded text-center p-2 transform">
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
    </div>
  );
}
