import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSun } from "react-icons/fa6";
import rgp from "@/assets/grain.jpg";
import { RiGeminiFill, RiJavascriptFill } from "react-icons/ri";
import Edu from "./Edu";
import Hack from "./Hack";
import Clicks from "./Clicks";

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
              From curiosity to coding, I’ve turned my passion for technology
              into a mission to deliver innovative solutions and exceed
              expectations.
            </h1>
            <div className=" flex justify-center items-center w-full gap-2 h-[300px]">
              <div className=" w-[75%] h-full border rounded-lg p-3">
                <h1 className=" font-bold text-2xl">My Tools</h1>
                <p> Software I use and recommend</p>
                <div className=" flex gap-4 py-3 w-full">
                  <h1 className=" p-1 bg-gradient-to-t from-black to-[#454343] rounded-lg border border-white/50 w-fit">
                    <RiJavascriptFill className=" text-6xl text-yellow-500" />
                  </h1>
                  <h1 className=" p-1 bg-gradient-to-t from-black to-[#454343] rounded-lg border border-white/50 w-fit">
                    <RiJavascriptFill className=" text-6xl text-yellow-500" />
                  </h1>
                  <h1 className=" p-1 bg-gradient-to-t from-black to-[#454343] rounded-lg border border-white/50 w-fit">
                    <RiJavascriptFill className=" text-6xl text-yellow-500" />
                  </h1>
                  <h1 className=" p-1 bg-gradient-to-t from-black to-[#454343] rounded-lg border border-white/50 w-fit">
                    <RiJavascriptFill className=" text-6xl text-yellow-500" />
                  </h1>
                  <h1 className=" p-1 bg-gradient-to-t from-black to-[#454343] rounded-lg border border-white/50 w-fit">
                    <RiJavascriptFill className=" text-6xl text-yellow-500" />
                  </h1>
                  <h1 className=" p-1 bg-gradient-to-t from-black to-[#454343] rounded-lg border border-white/50 w-fit">
                    <RiJavascriptFill className=" text-6xl text-yellow-500" />
                  </h1>
                  <h1 className=" p-1 bg-gradient-to-t from-black to-[#454343] rounded-lg border border-white/50 w-fit">
                    <RiJavascriptFill className=" text-6xl text-yellow-500" />
                  </h1>
                </div>
              </div>
              <div className=" w-[25%] h-full border rounded-lg p-3">sdfaf</div>
            </div>

            <Edu />
            <Hack />
            <Clicks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
