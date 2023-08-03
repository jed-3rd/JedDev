import React from "react";
import { Typography } from "@mui/material";

import { techStack } from "../../data/techs";

import "./about.css";

import FadeInSection from "../../components/FadeInSection";

export default function About(){

    return (
        <div id="about">
            <FadeInSection>
                <>
                    <div className="section-header">
                        <Typography component="h3" className="section-title">
                        / About Me
                        </Typography>
                    </div>
                    <div className="about-content">
                        <div className="about-description">
                                <p>
                                    I am currently a <b>Software Engineer</b> at <a target="_blank" rel="noreferrer noopener" href=""> Pink Summit LLC</a>, working on two contracts. I am a graduate of <a target="_blank" rel="noreferrer noopener" href="https://www.colorado.edu/about">University of Colorado</a> with a <b> Bachelor's of Arts</b> in <b>Computer Science </b>and a <b> Minor</b> in <b>Leadership Studies</b>.
                                </p>
                                <p>
                                    Here are some recent technologies I have worked with:
                                </p>
                                <ul className="tech-stack">
                                    {techStack.map((techItem, i) => {
                                        return (
                                            <FadeInSection key={`${i}-tech`} delay={`${i + 1}00ms`}>
                                                <li>{techItem}</li>
                                            </FadeInSection>
                                        );
                                    })}
                                </ul>
                                <p>
                                Outside of work, I love working on personal projects. I also play video games, love spending time outdoors and building woodworking projects.
                                </p>
                        </div>
                        <div className="about-image">
                            <img alt="Jed in Paris" src={'/me.png'} />
                        </div>
                    </div>
                </>
            </FadeInSection>
        </div>
    );
}
