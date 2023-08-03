import React from "react";
import { FolderOpenRounded } from "@mui/icons-material";
import { Typography, Chip } from "@mui/material";

import { projects, ProjectType } from "../../data/projects";

import FadeInSection from "../../components/FadeInSection";
import ExternalLinks from "../../components/ExternalLinks";

import "./projects.css";

export default function Projects() {
    return (
        <div id="projects">
            <div className="section-header ">
                <Typography component="h3" className="section-title">
                    / Projects
                </Typography>
            </div>
            <div className="project-container">
                <ul className="projects-grid">
                    {projects.map((project: ProjectType, i: number) => (
                        <FadeInSection key={`project-${i}`} delay={`${i + 1}00ms`}>
                            <li className="projects-card">
                                <div className="card-header">
                                    <div className="folder-icon">
                                        <FolderOpenRounded style={{ fontSize: 35 }} />
                                    </div>
                                    <ExternalLinks 
                                        githubLink={project["github"]}
                                        openLink={project["web"]}
                                    />
                                </div>
                                <div className="card-title">{project["title"]}</div>
                                <div className="card-desc">{project["desc"]}</div>
                                <div className="card-tech">
                                    {project["tech"].map((tech: string, i: number) => (
                                        <Chip 
                                            key={`${project}-${tech}`} 
                                            variant="filled"
                                            label={tech}
                                            sx={{marginRight: '5px', marginTop: '5px'}}
                                        />
                                    ))}
                                </div>
                            </li>
                        </FadeInSection>
                    ))}
                </ul>
            </div>
        </div>
    );
}
