import { DiJavascript1 } from 'react-icons/di';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaJava, FaPython } from 'react-icons/fa'; // Import icons
import { SiCplusplus, SiGo, SiMysql, SiNextdotjs, SiSocketdotio } from "react-icons/si";

const skills = [
  { name: "C", icon: <DiJavascript1 className="text-2xl" /> }, // No specific C icon in react-icons, using JS for now
  { name: "Java", icon: <FaJava className="text-2xl" /> },
  { name: "Go", icon: <SiGo className="text-2xl" /> },
  { name: "Python", icon: <FaPython className="text-xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-xl" /> },
  { name: "JavaScript", icon: <DiJavascript1 className="text-xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-2xl" /> },
  { name: "Express.js", icon: <FaNodeJs className="text-2xl" /> }, // Using Node.js icon as a placeholder, could find a better one
  { name: "React.js", icon: <FaReact className="text-2xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-2xl" /> },
  { name: "Socket.IO", icon: <SiSocketdotio className="text-2xl" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-2xl" /> },
  { name: "SQL", icon: <SiMysql className="text-xl" /> },
  { name: "Git/GitHub", icon: <FaGitAlt className="text-2xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-4">
          <span className="text-indigo-600">⚡</span> Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          A selection of technologies I'm proficient in.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center transition duration-300 hover:scale-105"
            >
              <div className="mr-4 text-gray-600 dark:text-gray-400">
                {skill.icon}
              </div>
              <span className="text-lg font-medium text-gray-800 dark:text-gray-100">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;