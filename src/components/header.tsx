import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import headerImage from "../images/header.png";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const updatedDarkMode = !isDarkMode;
    setIsDarkMode(updatedDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", updatedDarkMode);
  };

  return (
    <header class="z-50 px-2 py-4">
      <div class="bg-white dark:bg-gray-500 bg-opacity-30 dark:bg-opacity-30 backdrop-blur-md rounded-full shadow">
        <div class="container mx-auto px-2 py-2 flex justify-between items-center">
          <div class="flex items-center">
            <img src={headerImage} alt="Logo" class="w-12 h-12 rounded-full object-cover" />
            <h1 class="text-2xl font-bold px-4 py-2">Toad</h1>
          </div>
          <button
            onClick={toggleDarkMode}
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
          >
            {isDarkMode ? (
              <Sun class="w-6 h-6 text-gray-900 dark:text-gray-50" />
            ) : (
              <Moon class="w-6 h-6 text-gray-900 dark:text-gray-50" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
