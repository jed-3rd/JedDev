import React from "react";
import { Tabs, Tab, Typography } from '@mui/material';

import "./experience.css";

import FadeInSection from "../../components/FadeInSection";
import TabPanel from "../../components/TabPanel";

import { jobs } from "../../data/jobs";

const isHorizontal = window.innerWidth < 600;

export default function Experience() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };

    return (
      <div id="experience">
          <FadeInSection>
            <>
                <div className="section-header ">
                    <Typography component="h3" className="section-title">
                        / Experience
                    </Typography>
                </div>
                <div style={{flexGrow: 1, display: 'flex', height: 300}}>
                    <Tabs
                        orientation={!isHorizontal ? "vertical" : undefined}
                        variant={isHorizontal ? "fullWidth" : "scrollable"}
                        value={value}
                        onChange={handleChange}
                        style={{borderRight: "1px solid #020c1b"}}
                    >
                        {jobs.map((job, i) => (
                            <Tab 
                                key={`${i}-company`}
                                label={isHorizontal ? `0${i}.` : job['company']}
                                aria-controls={isHorizontal ? `full-width-tabpanel-${i}` : undefined}
                                id={isHorizontal ? `full-width-tab-${i}` : `vertical-tab-${i}`}
                                style={{fontSize: "16px"}}
                            />
                        ))}
                    </Tabs>
                    {jobs.map((job, i) => (
                        <TabPanel key={`job-${i}`} value={value} index={i}>
                            <>
                                <span className="joblist-job-title">
                                    {job["title"] + " @ "}
                                </span>
                                <span className="joblist-job-company">
                                    {job["company"]}
                                </span>
                                <div className="joblist-duration">
                                    {job["duration"]}
                                </div>
                                <ul className="job-description">
                                    {job["desc"].map((item, i) => (
                                        <FadeInSection key={`${job["company"]}-desc-${i}`} delay={`${i + 1}00ms`}>
                                            <li>
                                                { item }
                                            </li>
                                        </FadeInSection>
                                    ))}
                                </ul>
                            </>
                        </TabPanel>
                    ))}
                </div>
            </>
          </FadeInSection>
        </div>
    );
  }
