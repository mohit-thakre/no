import React from "react";
import Table from "./Table";
import { icons } from "@/icons/icons";
import { educationData } from "@/data/about";

const Edu = () => {
  return (
    <div>
      <h1 className="flex items-center gap-2 font-semibold text-xl py-2 ">
        Academics
        <icons.HiOutlineAcademicCap />
      </h1>
      {educationData.map((edu, index) => (
        <Table item={edu} key={index} />
      ))}
    </div>
  );
};

export default Edu;
