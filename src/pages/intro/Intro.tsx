import React from "react";
import { Typography } from "@mui/material";

import Moon from "../../components/moon/Moon";
import FadeInSection from "../../components/FadeInSection";

import "./intro.css";

export default function Intro() {
    return (
        <div id='intro'>
            <Moon />
            <Typography component="h1" className="intro-title">
                {"Hi, "}
                <span className="intro-name">
                    Jed
                </span>
                {" here."}
            </Typography>
            <FadeInSection>
                <>
                    <Typography component="h2" className="intro-subtitle">
                        I like to make things.
                    </Typography>
                    <Typography component="p" className="intro-desc">
                    I'm a passionate software engineer based in the United States. I am interested in full-stack development, artificial intelligence, video games and new technologies.
                    </Typography>
                </>
            </FadeInSection>
        </div>
    );
}
