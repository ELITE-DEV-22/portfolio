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
            title: 'Project One',
            description: 'This is a brief description of Project One.',
            link: 'https://example.com/project-one',
        },
        {
            title: 'Project Two',
            description: 'This is a brief description of Project Two.',
            link: 'https://example.com/project-two',
        },
        {
            title: 'Project Three',
            description: 'This is a brief description of Project Three.',
            link: 'https://example.com/project-three',
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
