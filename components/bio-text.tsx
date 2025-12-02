"use client";
import { useState } from "react";

export default function BioText({ bioText }: { bioText: string | null }) {
  const [isFullText, setIsFullText] = useState(false);

  const maxLength = 120;
  const isLong = bioText && bioText.length > maxLength;

  return (
    <p className="text-sm md:text-base text-gray-600">
      {isFullText || !isLong ? bioText : bioText?.substring(0, maxLength)}

      {isLong && (
        <button
          className="text-secondary hover:text-secondary/80 cursor-pointer text-sm ml-1 focus:outline-none"
          onClick={() => setIsFullText((prev) => !prev)}
        >
          {isFullText ? "...show less" : "... show more"}
        </button>
      )}
    </p>
  );
}
