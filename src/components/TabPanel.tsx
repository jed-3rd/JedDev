import React from "react";
import { Box, Typography } from "@mui/material";

const isHorizontal = window.innerWidth < 600;

type TabPanelTypes = {
    index: number;
    value: number;
    children: React.ReactElement;
}

export default function TabPanel({index, value, children}: TabPanelTypes){
    if (isHorizontal) {
        return (
            <div
                key={`$job-{index}`}
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography component="div">
                            { children }
                        </Typography>
                    </Box>
                )}
            </div>
        );
    } else {
        return (
            <div
                key={`$job-{index}`}
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel`}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography component="div">
                            { children }
                        </Typography>
                    </Box>
                )}
            </div>
        );
    }
}
