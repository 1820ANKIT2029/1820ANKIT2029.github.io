import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Navbar = () => {
    const menulist = {
        "Home": "/",
        "About": "/about",
        "Skills": "/skills",
        "Projects": "projects",
        "Contact": "contact"
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {Object.entries(menulist).map(([label, path]) => (
                            <li className="text-base"><Link to={path}>{label}</Link></li>
                        ))}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl lg:text-3xl font-semibold">Ankit Kumar</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Object.entries(menulist).map(([label, path]) => (
                        <li className="text-lg"><Link to={path}>{label}</Link></li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <a
                    href="https://github.com/1820ankit2029"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center gap-2"
                >
                    <FontAwesomeIcon icon={faGithub} className="text-xl" />
                    View on GitHub
                </a>
            </div>
        </div>
    )
};

export default Navbar;
