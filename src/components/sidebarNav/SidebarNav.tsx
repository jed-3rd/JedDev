import React from "react";
import { LinkedIn, GitHub } from '@mui/icons-material';

import "./sidebarNav.css";

export default function SidebarNav() {
  return (
    <div className="sidebar-nav">
      <div className="sidebar-logos">
        <a target="_blank" rel="noreferrer noopener" href="https://github.com/jed-3rd" style={{marginRight: '20px'}}>
          <GitHub style={{ fontSize: 50 }}></GitHub>
        </a>
        <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/jed-3rd/">
          <LinkedIn style={{ fontSize: 50 }}></LinkedIn>
        </a>
      </div>
    </div>
  );
}