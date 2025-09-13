"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "./icons";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-primary-grey h-1 py-4 px-2 hover:bg-secondary-grey2 rounded-md"
    >
      <div className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90">
        <SunIcon />
      </div>
      <div className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0">
        <MoonIcon />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
