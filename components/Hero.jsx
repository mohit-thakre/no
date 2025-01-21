"use client";
import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  useAnimate,
  usePresence,
  motion,
} from "framer-motion";
import { FiClock, FiTrash2 } from "react-icons/fi";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { ImAlarm } from "react-icons/im";
import { MdOutlineAttachFile } from "react-icons/md";

import SkillSection from "./SkillSection";
import ProjectCard from "./ProjectCard";
import ProjectSection from "./ProjectSection";
import Contact from "./Contact";

const Hero = () => {
  const currentTime = new Date();
  const DATA = {
    localCode: "en-US",
    timeZone: "Asia/Kolkata",
  };
  const handleCheck = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const removeElement = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <section className="min-h-screen  py-24">
      <div className="mx-auto w-full max-w-xl px-4">
        {/* HEADER */}

        <div className="mb-6">
          <h1 className="text-5xl font-bold text-white ">
            や, I'm Mohit Thakre 👋
          </h1>
          <p className="text-zinc-400 text-xl py-3 font-extrabold">
            DEV | MOHIT
          </p>

          {/* QUICK BUTTONS */}

          <div className=" flex justify-start space-x-2 items-center">
            <button className="hero-btn">
              <FaLocationCrosshairs className=" text-green-500" />
              Betul, India
            </button>

            {/* <button className="hero-btn">
              <ImAlarm className=" text-blue-500" />

              {currentTime.toLocaleTimeString(DATA.localCode, {
                timeZone: DATA.timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })}
            </button> */}
            <button className="hero-btn">
              <MdOutlineAttachFile className=" text-red-500" />
              Resume
            </button>
          </div>
        </div>

        {/* ABOUT */}
        <div className="mx-auto text-justify">
          <h1 className="font-semibold text-xl pt-4">About • 約</h1>
          <p className="pb-4 text-md text-zinc-200 font-sans font-light">
            I’m <span className="underline font-semibold">Mohit</span>, a
            pre-final year B.Tech student in Computer Science and Engineering
            from Bhopal, MP, India. Passionate about crafting innovative
            solutions, I constantly explore emerging technologies to create an
            impact and stay aligned with the latest trends.
          </p>

          <p className="py-4 text-md text-zinc-200 font-sans font-light">
            When I’m not in coding mode, you’ll find me indulging in legendary
            shows like Breaking Bad, gaming, or chilling with some great music.
            Always <span className="underline font-semibold">dreaming big</span>{" "}
            and working towards turning those dreams into reality—let’s make it
            happen!
          </p>
        </div>

        <SkillSection />
        <ProjectSection />
        <Contact />
      </div>
    </section>
  );
};

export default Hero;
