"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { EyeIcon, EyeOff, LockIcon } from "lucide-react";

export default function PasswordInput({
  defaultValue,
}: {
  defaultValue: string | undefined;
}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible((prev) => !prev);
  };
  return (
    <div className="relative mt-2">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 pointer-events-none">
        <LockIcon size={15} />
      </span>
      <Input
        defaultValue={defaultValue}
        id="password"
        name="password"
        type={isVisible ? "text" : "password"}
        placeholder="Create a password"
        className="pl-10 bg-transparent text-white placeholder-white/60 border border-white/20 rounded-lg py-3 w-full focus:outline-none focus:ring-2 focus:ring-white/10"
      />
      <Button
        onClick={handleClick}
        className="absolute left-63 sm:left-89 md:left-80 transform -translate-y-0.3 bg-transparent text-white/70 hover:bg-transparent"
      >
        {isVisible ? <EyeOff/> : <EyeIcon />}
      </Button>
    </div>
  );
}
