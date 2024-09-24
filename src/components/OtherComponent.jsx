import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import PlayMusicComponent from "./PlayMusicComponent";

export default function OtherComponent() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="fixed bottom-[10%] right-[2%] z-50 flex  cursor-pointer flex-col items-center  gap-2 text-light">
      <div
        className="rounded-full bg-gradient-to-br from-info to-dark dark:from-primary dark:to-info dark:shadow-right-light"
        onClick={toggleTheme}
      >
        {darkMode == true ? <SunIcon width={50} /> : <MoonIcon width={50} />}
      </div>
      <PlayMusicComponent />
    </div>
  );
}
