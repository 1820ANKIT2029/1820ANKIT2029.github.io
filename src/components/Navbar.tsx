import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";


const Navbar = () => {
    const menulist = {
        "Home": "/",
        "About": "/about",
        "Skills": "/skills",
        "Projects": "projects",
        "Contact": "contact"
    };
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 shadow-lg p-4 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Ankit Kumar</h1>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    {Object.entries(menulist).map(([label, path]) => (
                        <div key={label} className="hover:text-blue-400 transition duration-200">
                            <Link to={path}>{label}</Link>
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white dark:text-gray-900"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
                
                <DarkModeToggle />
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col space-y-4 mt-4 bg-gray-800 dark:bg-gray-200">
                    {Object.entries(menulist).map(([label, path]) => (
                        <div
                            key={label}
                            onClick={() => setMenuOpen(false)}
                            className="text-center py-2 bg-gray-800 hover:bg-gray-700"
                        >
                            <Link to={path}>{label}</Link>
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
};

// const Navbar = () => {
//     return (
//         <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg flex justify-between items-center p-4">
//             <h1 className="text-xl font-bold">Ankit Kumar</h1>
//             <div className="flex items-center space-x-4">
//                 <Link to="/">Home</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/skills">Skills</Link>
//                 <Link to="/projects">Projects</Link>
//                 <Link to="/contact">Contact</Link>

//             </div>
//             <DarkModeToggle />
//         </nav>
//     );
// };

export default Navbar;
