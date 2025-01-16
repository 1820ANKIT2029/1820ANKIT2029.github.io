
const skills = [
  { name: "C++", icon: "🔷" },
  { name: "React.js", icon: "⚛️" },
  { name: "Node.js", icon: "🌿" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Git/GitHub", icon: "🐙" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800 h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">⚡ Skills</h2>
        
        <div className="flex flex-wrap justify-center mt-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="m-3 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-lg rounded shadow"
            >
              {skill.icon} {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
