"use client";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
    onClick={toggleDarkMode}
    className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:scale-110 transition"
    aria-label="Toggle Theme"
  >
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
  )};