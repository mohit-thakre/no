import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

import rgp from "@/assets/grain.jpg";
import React from "react";
import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { FaUserAlt, FaCodeBranch, FaStar, FaUsers } from "react-icons/fa";
import Edu from "./Edu";
import Hack from "./Hack";
import Clicks from "./Clicks";
import Bentoinfo from "./Bentoinfo";

const page = () => {
  return (
    <div className="center  w-full min-h-screen bg-black text-white ">
      <div className=" flex justify-start items-center flex-col py-10 w-full max-w-2xl  min-h-screen">
        <Navbar />

        <div className="w-full max-w-xl pt-5">
          <div className="py-8 w-full ">
            <div className=" font-sans mx-auto w-fit bg-white text-black/90 text-sm rounded-md px-4 font-semibold">
              ABOUT💎
            </div>
            <h1 className="font-bold text-5xl text-center py-3 flex  justify-center items-center ">
              The Story of Me Being <span>🧑‍💻</span>
            </h1>
            <h1 className="font-light text-white/50 tracking-wider text-md mb-6 text-center">
              From curiosity to coding, I've turned my passion for technology
              into a mission to deliver innovative solutions and exceed
              expectations.
            </h1>
            <Edu />
            <Hack />
            <Bentoinfo />

            {/* <Clicks /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
