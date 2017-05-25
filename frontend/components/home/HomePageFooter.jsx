import React from "react";
import {
  StyledFooterWrapper,
  FooterIcon,
  SmallGreaterThan,
} from "../../styles/home";

const HomePageFooter = () => (
  <StyledFooterWrapper>
    <p style={{ marginRight: "8px" }}>Reedy is created by Jin Chen</p>
    <SmallGreaterThan className="fa fa-angle-right" />
    <a href="https://www.github.com/jinchen93" title="Jin Chen on Github">
      <FooterIcon className="fa fa-github no-decoration-color" />
    </a>
    <SmallGreaterThan className="fa fa-angle-right" />
    <a
      href="https://www.linkedin.com/in/jinchen93"
      title="Jin Chen on LinkedIn"
    >
      <FooterIcon className="fa fa-linkedin-square no-decoration-color" />
    </a>
    <SmallGreaterThan className="fa fa-angle-right" />
    <a href="https://www.twitter.com/_jinchen" title="Jin Chen on LinkedIn">
      <FooterIcon className="fa fa-twitter-square no-decoration-color" />
    </a>
    <SmallGreaterThan className="fa fa-angle-right" />
    <a
      href="mailto:jinchen93@gmail.com"
      title="Email Jin Chen at jinchen93@gmail.com"
    >
      <FooterIcon className="fa fa-envelope no-decoration-color" />
    </a>

  </StyledFooterWrapper>
);

export default HomePageFooter;
