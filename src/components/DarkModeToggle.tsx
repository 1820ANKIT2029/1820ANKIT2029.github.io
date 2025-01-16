import { useState, useEffect } from "react";

const DarkModeToggle = () => {
    // Check user's preference from localStorage OR system preference
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme ? storedTheme : prefersDark ? "dark" : "light";

    // State to track current theme
    const [theme, setTheme] = useState(initialTheme);

    // Apply theme when component mounts
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
};

export default DarkModeToggle;
