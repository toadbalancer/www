import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import headerImage from "../images/header.png";

function DarkModeToggle() {
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
    var updatedDarkMode = !isDarkMode;
    setIsDarkMode(updatedDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", updatedDarkMode.toString());
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-gray-300 dark:text-gray-50" />
        ) : (
          <Moon className="w-6 h-6 text-gray-300 dark:text-gray-50" />
        )}
      </button>
    </>
  );
}

export function Header() {
  return (
    <header className="z-50 px-2 py-4">
      <div className="bg-white dark:bg-gray-500 bg-opacity-30 dark:bg-opacity-30 backdrop-blur-md rounded-full shadow">
        <div className="container mx-auto px-2 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <img src={headerImage} alt="Logo" className="w-12 h-12 rounded-full object-cover" />
            <h1 className="text-2xl font-bold px-4 py-2">Toad</h1>
          </div>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
