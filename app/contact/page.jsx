"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { icons } from "@/icons/icons";

const page = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mohit-thakre/",
      icon: (
        <icons.FaLinkedin className="text-white drop-shadow-2xl text-2xl  group-hover:text-blue-700" />
      ),
    },
    {
      name: "Twitter",
      link: "https://x.com/mohitthakre930",
      icon: (
        <icons.FaXTwitter className="text-white drop-shadow-2xl  text-2xl  group-hover:text-black" />
      ),
    },
    {
      name: "Email",
      link: "mailto:mohitthakre1211@gmail.com",
      icon: (
        <icons.FaEnvelope className="text-white drop-shadow-2xl  text-2xl  group-hover:text-black" />
      ),
    },
    {
      name: "GitHub",
      link: "https://github.com/mohit-thakre",
      icon: (
        <icons.FaGithub className="text-white drop-shadow-2xl  text-2xl  group-hover:text-black" />
      ),
    },
  ];
  const examples = [
    "Are you available for freelance projects?",
    "Can I collaborate with you on a project?",
    "Do you offer mentorship for developers?",
    "How can I contact you for job opportunities?",
    "What technologies are you proficient in?",
  ];

  return (
    <div>
      <div className="center  w-full min-h-screen bg-black text-white text-center">
        <div className=" flex justify-start items-center flex-col py-10 w-full max-w-2xl  min-h-screen">
          <Navbar />

          <div className="w-full max-w-xl pt-5 sm:px-0 px-2">
            <div className="py-8 w-full ">
              <div className=" font-sans mx-auto w-fit bg-white text-black/90 text-sm rounded-md px-4 font-semibold">
                CONTACT ME 🤝
              </div>
              <h1 className="font-bold text-5xl text-center py-3 flex  justify-center items-center ">
                Get in Touch <span>🤝</span>
              </h1>
              <h1 className="font-light text-white/50 tracking-wider text-md mb-6 text-center">
                Let's Collaborate to Bring Your Vision to Life—Feel Free to
                Reach Out for Projects, Opportunities, or Questions!
              </h1>

              <h1 className="flex items-center  justify-center gap-2 font-semibold text-xl py-2 ">
                Have questions{" "}
                {<icons.CiCircleQuestion className=" text-2xl font-bold" />}
              </h1>
              <p className="max-w-lg  leading-relaxed text-white/70">
                {" "}
                I'd love to help! Feel free to reach out for any inquiries,
                collaborations, or opportunities.
              </p>
              <Typewrite examples={examples} />
              <div className=" flex justify-center gap-2 items-center">
                {socialLinks.map((link, idx) => (
                  <div
                    key={idx}
                    className="group p-2 w-fit rounded-lg shadow-lg border-[1px] border-white/20 transition-all duration-300 transform hover:scale-105 hover:bg-white "
                  >
                    <a href={`${link.link}`}>
                      <span>{link.icon}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="py-3 text-sm text-white/70 font-light uppercase ">
      <span className="inline-block size-2 bg-white" />
      <span className="ml-3">
        Example:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-white"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};
export default page;
