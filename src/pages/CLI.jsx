import { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import { FaRegWindowMaximize, FaRegWindowMinimize } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { VscTerminalCmd } from "react-icons/vsc";
import "react-resizable/css/styles.css";

export default function CLI({ showCLIWindow, setShowCLIWindow }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [cursorVisible, setCursorVisible] = useState(true);
  const blackDivRef = useRef(null);
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (blackDivRef.current) {
      blackDivRef.current.scrollTop = blackDivRef.current.scrollHeight;
    }
  }, [input]);

  const commands = [
    { name: "help", description: "Displays the list of available commands." },
    { name: "clear", description: "Clears the console output." },
    { name: "whoami", description: "Displays the current user." },
    { name: "about", description: "Displays the about section." },
    { name: "projects", description: "Displays all the projects." },
    { name: "contact", description: "Displays contact information." },
    { name: "destroy", description: "Deletes one or more components." },
    { name: "create", description: "Creates one or more components." },
  ];

  const handleCommand = () => {
    let result;
    if (input === "help") {
      result = commands
        .map((command) => `${command.name} - ${command.description}`)
        .join("\n");
    } else if (input === "clear") {
      setOutput([]);
      setInput("");
      return;
    } else {
      result = `Command not recognized: ${input}`;
    }
    setOutput((prevOutput) => [
      ...prevOutput,
      { command: `visitor@cfishburn.dev:~$ ${input}`, result },
    ]);
    setInput("");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleCommand();
      } else if (e.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key.length === 1) {
        setInput((prev) => prev + e.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setShowCLIWindow(false);
  };

  if (!showCLIWindow) return null;

  return (
    <Draggable
      handle=".drag-handle"
      defaultPosition={{
        x: screen.availWidth / 2 - 300,
        y: screen.availHeight / 2 - 200,
      }}
    >
      <ResizableBox
        width={600}
        height={400}
        minConstraints={[400, 200]}
        maxConstraints={[screenDimensions.width, screenDimensions.height]}
        className="fixed inset-0 z-50"
      >
        <div className="h-full w-full px-2 pb-2 rounded bg-slate-500 bg-opacity-50 flex flex-col">
          <div className="flex h-5 cursor-move select-none justify-between mb-1 drag-handle">
            <div className="h-full flex items-center justify-center text-center m-0.5 dark:text-white">
              <VscTerminalCmd className="text-lg" />
              <p className="ml-2 text-xs text-center justify-center">
                C:\WINDOWS\system32\cmd.exe
              </p>
            </div>
            <div>
              <button className="px-2 h-full hover:bg-slate-300 hover:transition hover:ease-in-out hover:duration-300 dark:text-white">
                <FaRegWindowMinimize />
              </button>
              <button className="px-2 h-full hover:bg-slate-300 hover:transition hover:ease-in-out hover:duration-300 dark:text-white">
                <FaRegWindowMaximize />
              </button>
              <button
                className="bg-red-400 px-3 h-full hover:bg-red-500 hover:transition hover:ease-in-out hover:duration-300 bg-opacity-80 dark:text-white"
                onClick={handleClose}
              >
                <IoClose />
              </button>
            </div>
          </div>
          <div className="flex flex-col flex-grow overflow-hidden">
            <div
              ref={blackDivRef}
              className="text-white flex flex-col bg-black overflow-y-auto overflow-x-hidden h-full max-h-full"
            >
              <div className="flex-grow font-mono text-sm whitespace-pre-wrap break-words">
                <div className="overflow-y-auto mb-2">
                  <div>Cory Fishburn (CF) Portfolio. All rights reserved.</div>
                  <div className="mb-2">
                    Type 'help' to see the list of available commands.
                  </div>
                  {output.map((line, index) => (
                    <div key={index} className="mb-1">
                      <div>{line.command}</div>
                      <div className="ml-4 whitespace-pre-wrap break-words">
                        {line.result.split("\n").map((text, i) => (
                          <div className="" key={i}>
                            {text}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <span className="mr-2">{"visitor@cfishburn.dev:~$"}</span>
                  <div className="flex-1">
                    <span>{input}</span>
                    <span
                      className={`${
                        cursorVisible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      |
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ResizableBox>
    </Draggable>
  );
}