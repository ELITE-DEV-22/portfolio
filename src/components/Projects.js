import React from 'react';
import './Projects.css';

const ProjectCard = ({ title, description, link }) => {
    return (
        <div id="projects" className="project-card">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="view-project-button">
                View Project
            </a>
        </div>
    );
};

const Project = () => {
    const projects = [
        {
            title: 'Healt Care Services',
            description: 'Basic CRUD operations.',
            link: 'https://elite-dev-22.github.io/healthcare-services-app/',
        },
        {
            title: 'Car Crash Detection',
            description: 'Detection of Crash from video feeds',
            link: 'https://github.com/ELITE-DEV-22/Crash-Detection',
        },
        {
            title: 'Project Three',
            description: 'Coming Soon!',
            link: '.',
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-title">My Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        link={project.link} 
                    />
                ))}
            </div>
        </section>
    );
};

export default Project;
