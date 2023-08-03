import React from "react";
import "./footer.css";
import FadeInSection from "../FadeInSection";

export default function Footer() {
  return (
    <FadeInSection>
      <div id="footer">
        <div className="ending-footer">
            <div>Built by Jed.</div>
            <div>All rights reserved. © {new Date().getFullYear()}</div>
        </div>
      </div>
    </FadeInSection>
  );
}