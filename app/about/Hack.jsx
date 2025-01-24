import React from "react";
import Table from "./Table";
import { icons } from "@/icons/icons";
import { hackathonData } from "@/data/about";

const Hack = () => {
  return (
    <div>
      <h1 className="flex items-center gap-2 font-semibold text-xl py-2 ">
        Hackathon Highlights
        <icons.MdOutlineEmojiEvents />
      </h1>
      {hackathonData.map((hack, index) => (
        <Table item={hack} key={index} />
      ))}
    </div>
  );
};

export default Hack;
