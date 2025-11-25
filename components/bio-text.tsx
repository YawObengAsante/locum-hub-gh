"use client";
import { Activity, useState } from "react";

export default function BioText({ bioText }: { bioText: string | null }) {
  const [isFullText, setIsFullText] = useState(false);

  const handleClick = () => {
    setIsFullText((prev) => !prev);
  };
  return (
    <p className="text-sm md:text-base text-gray-600">
      {isFullText ? bioText : bioText?.substring(0, 120)}
      <button
        className="text-secondary hover:text-secondary/80 cursor-pointer text-sm ml-1 focus:outline-none"
        onClick={handleClick}
      >
        <Activity mode={bioText ? "visible" : "hidden"}>
          {isFullText ? "...show less" : "... show more"}
        </Activity>
      </button>
    </p>
  );
}
