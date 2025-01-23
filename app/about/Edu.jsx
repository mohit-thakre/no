import Image from "next/image";
import React from "react";
import rgp from "@/assets/grain.jpg";
import rgpv from "@/assets/rgpv.png";
import samv from "@/assets/samv.jpeg";
import { HiOutlineAcademicCap } from "react-icons/hi";
import Table from "./Table";

const educationData = [
  {
    title: "Computer Science and Engineering",
    university: "RGPV University",
    degree: "Bachelor of Technology",
    year: "2022 - 2026",
    image: rgpv,
  },
  {
    title: "High School",
    university: "SAMV School",
    degree: "Diploma (12th)",
    year: "2021 - 2022",
    image: samv,
  },
  {
    title: "Middle School",
    university: "DES School",
    degree: "10th",
    year: "2019 - 2020",
    image: rgp,
  },
];

const Edu = () => {
  return (
    <div>
      <h1 className="flex items-center gap-2 font-semibold text-xl py-2 ">
        Academics
        <HiOutlineAcademicCap />
      </h1>
      {educationData.map((edu, index) => (
        <Table item={edu} key={index} />
      ))}
    </div>
  );
};

export default Edu;
