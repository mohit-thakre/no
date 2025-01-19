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

const Hero = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Take out trash", checked: false, time: "5 mins" },
    { id: 2, text: "Do laundry", checked: false, time: "10 mins" },
    { id: 3, text: "Have existential crisis", checked: true, time: "12 hrs" },
    { id: 4, text: "Get dog food", checked: false, time: "1 hr" },
  ]);
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
          <h1 className="text-5xl font-bold text-white">
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
        <div>
          <h1 className=" font-bold text-2xl">About • 約</h1>
          <p className="py-4 text-md text-zinc-200 font-sans">
            I’m <span className="underline font-semibold">Mohit</span>, a
            pre-final year B.Tech student in
            <span className="underline font-semibold">
              {" "}
              Computer Science and Engineering{" "}
            </span>
            from
            <span className="underline font-semibold"> bhopal MP, India</span>,
            passionate about crafting innovative solutions that
            <span className="underline font-semibold">stand out</span> and make
            an impact. Constantly exploring
            <span className="underline font-semibold"> emerging tech</span>,
            sharing creations, and staying aligned with
            <span className="underline font-semibold">
              {" "}
              cutting-edge trends
            </span>{" "}
            to keep the tech world buzzing.
          </p>

          <p className="text-md text-zinc-200 font-sans">
            When I’m not in coding mode, you’ll find me indulging in legendary
            shows like
            <span className="underline font-semibold"> Breaking Bad</span>,
            gaming, or chilling with some great music. Always{" "}
            <span className="underline font-semibold"> dreaming big</span> and{" "}
            <span className="underline font-semibold"> building bigger</span>
            —let’s make it happen!
          </p>
        </div>
        <SkillSection />
        <ProjectSection />
        <ProjectCard />

        <Todos
          todos={todos}
          handleCheck={handleCheck}
          removeElement={removeElement}
        />
      </div>
    </section>
  );
};

const Todos = ({ todos, handleCheck, removeElement }) => (
  <div className="w-full space-y-3">
    <AnimatePresence>
      {todos.map((t) => (
        <Todo
          key={t.id}
          id={t.id}
          checked={t.checked}
          time={t.time}
          handleCheck={handleCheck}
          removeElement={removeElement}
        >
          {t.text}
        </Todo>
      ))}
    </AnimatePresence>
  </div>
);

const Todo = ({ id, checked, time, handleCheck, removeElement, children }) => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!isPresent) {
      const exitAnimation = async () => {
        await animate(scope.current, { opacity: 0, x: checked ? 24 : -24 });
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent, checked]);

  return (
    <motion.div
      ref={scope}
      layout
      className="relative flex w-full items-center gap-3 rounded border border-zinc-700 bg-zinc-900 p-3"
      exit={{ opacity: 0, x: -20 }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleCheck(id)}
        className="size-4 accent-indigo-400 hover:scale-105 transition-transform"
      />
      <p
        className={`text-white transition-colors ${
          checked ? "text-zinc-400 line-through" : ""
        }`}
      >
        {children}
      </p>
      <div className="ml-auto flex gap-1.5">
        <div className="flex items-center gap-1.5 whitespace-nowrap rounded bg-zinc-800 px-1.5 py-1 text-xs text-zinc-400">
          <FiClock />
          <span>{time}</span>
        </div>
        <button
          onClick={() => removeElement(id)}
          className="rounded bg-red-300/20 px-1.5 py-1 text-xs text-red-300 transition hover:bg-red-600 hover:text-white"
        >
          <FiTrash2 />
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
