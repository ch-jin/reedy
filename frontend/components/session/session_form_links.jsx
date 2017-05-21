import React from "react";
import { Link } from "react-router-dom";
import { DemoLink, LinkWrapper } from "../../styles/session_form";

const SessionFormLinks = ({ formType, loginGuest }) => {
  if (formType === "Sign Up") {
    return (
      <LinkWrapper>
        <Link to="/login">
          Already have an account?
        </Link>
        <DemoLink onClick={loginGuest}>
          Try a Demo
        </DemoLink>
      </LinkWrapper>
    );
  } else if (formType === "Log In") {
    return (
      <LinkWrapper>
        <Link to="/signup">
          Create an account
        </Link>
        <DemoLink onClick={loginGuest}>
          Try a Demo
        </DemoLink>
      </LinkWrapper>
    );
  }
};

export default SessionFormLinks;
