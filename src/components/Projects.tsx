import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  private:boolean;
}

const Projects = () => {
    const [projects, setProjects] = useState<GitHubRepo[]>([]);
    const githubUsername = 'YOUR_GITHUB_USERNAME'; // Replace with your username

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get<GitHubRepo[]>(`https://api.github.com/users/${config.githubUsername}/repos?per_page=100`); // Fetch up to 100 repos
                const publicRepos = response.data.filter(repo => !repo.private);
                setProjects(publicRepos);
            } catch (error) {
                console.error("Error fetching projects:", error);
                // Handle error, e.g., display an error message to the user
                setProjects([{name:"Failed to fetch projects", description:"Check your internet connection or github username", html_url:"", homepage:"", id:0, private:false}])
            }
        };

        fetchProjects();
    }, [githubUsername]); // Add githubUsername as a dependency

    return (
        <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.length === 0 ? (
                        <div className="text-center col-span-full">Loading projects...</div>
                    ) : (
                        projects.map((project) => (
                            <div key={project.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{project.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description || "No description provided."}</p> {/* Handles missing descriptions */}
                                <div className="flex justify-between items-center">
                                    <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">View on GitHub</a>
                                    {project.homepage && ( // Conditionally render homepage link
                                        <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">Live Demo</a>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;