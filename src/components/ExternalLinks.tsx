import React from "react";
import { GitHub, OpenInBrowser } from "@mui/icons-material";

type ExternalLinksType = {
    githubLink?: string;
    openLink?: string;
}

export default function ExternalLinks({githubLink, openLink}: ExternalLinksType) {
  return (
    <span className="external-links">
        {githubLink && (
          <a className="github-icon" target="_blank" rel="noreferrer noopener" href={githubLink}>
            <GitHub
              style={{
                fontSize: 25,
                color: "#ccd6f6"
              }}
            />
          </a>
        )}
        {openLink && (
          <a className="open-icon" target="_blank" rel="noreferrer noopener" href={openLink}>
            <OpenInBrowser
              style={{
                fontSize: 25,
                color: "#ccd6f6"
              }}
            />
          </a>
        )}
      </span>
  );
}
