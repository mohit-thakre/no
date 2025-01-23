import Image from "next/image";
import React from "react";

const Table = ({ item }) => {
  return (
    <div>
      <div className="flex justify-between gap-4 py-2">
        <div className="flex justify-center items-center gap-3">
          <Image
            src={item.image}
            alt="rgp"
            className="rounded-full w-12 h-12"
          />
          <div>
            <h1 className="text-sm font-medium font-sans tracking-wide">
              {item.title}
            </h1>
            <p className="text-xs font-medium tracking-wider text-white/70">
              {item.university || item.position}
            </p>
            <h1 className="tracking-wide font-sans text-sm">
              {item.degree || item.conductedBy}
            </h1>
          </div>
        </div>
        <p className="font-sans text-sm">{item.year}</p>
      </div>
    </div>
  );
};

export default Table;
