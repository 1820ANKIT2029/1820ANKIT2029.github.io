const projects = [
  {
    title: "AuraTracker-CodeSangam",
    description: "A real-time leaderboard system using React & Socket.IO",
    link: "https://github.com/yourusername/AuraTracker-CodeSangam",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React.js and TailwindCSS",
    link: "https://github.com/yourusername/portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="h-screen py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🚀 Projects</h2>
        
        <div className="flex flex-wrap justify-center mt-6">
          {projects.map((project) => (
            <div key={project.title} className="m-4 p-4 bg-gray-200 dark:bg-gray-800 shadow rounded">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              <a href={project.link} target="_blank" className="text-blue-500">
                🔗 View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
