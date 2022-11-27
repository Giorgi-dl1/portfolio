import { motion as m } from "framer-motion";
import { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { useLocation } from "react-router-dom";
import cv from "../Giorgi_Durglishvili_CV.pdf";

export default function Home({ setLocation }) {
  const location = useLocation();
  useEffect(() => {
    setLocation(location.pathname);
  }, [location, setLocation]);
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, eas: "easeOut" }}
      className="text-gray-900 absolute max-h-screen top-0 left-0 w-full min-h-max px-[2rem] lg:px-[5rem] md:px-[4rem]"
    >
      <div className="mt-60 overflow-hidden">
        <div className="relative font-bold ">
          <svg width="100%" height="130px">
            <clipPath id="text-overlay">
              <text
                x="0"
                y="35%"
                fill="red"
                className="text-4xl md:text-6xl"
                font-family="Dancing Script,cursive"
              >
                <tspan x="0">Hello! I am</tspan>

                <tspan x="0" dy="1.2em" fontWeight="bold">
                  Giorgi Durglishvili
                </tspan>
                <tspan
                  x="0"
                  dy="1.8em"
                  className="text-2xl leading-5 font-medium"
                >
                  Web Developer
                </tspan>
              </text>
            </clipPath>
          </svg>
          <video
            src="/video/Smoke.mp4"
            className="absolute top-0"
            autoPlay
            loop
            muted
          ></video>
        </div>

        <div className="mt-[7rem]">
          <a href={cv} download>
            <button className="py-[0.7rem] px-[1rem] shadow-lg shadow-black/20 bg-[#5ece7b] text-white hover:opacity-80 rounded ease duration-[0.5s]">
              Download CV
            </button>
          </a>
          <div className="flex mt-[2rem]">
            <div className="flex gap-[1rem]">
              <a
                href="https://github.com/Giorgi-dl1"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="w-[35px] h-[35px]  cursor-pointer hover:opacity-70 fill-black ease duration-[0.5s]" />
              </a>
              <a
                href="https://www.linkedin.com/in/giorgi-durglishvili-7a9158230/"
                target="_blank"
                rel="noreferrer"
              >
                <ImLinkedin className="w-[35px] h-[35px]  cursor-pointer hover:opacity-70 fill-black ease duration-[0.5s]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}
