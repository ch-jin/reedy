import React from "react";
import { Link } from "react-router-dom";
import { ErrorDiv, ErrorDiscoverIcon } from "../../styles/theme";

const ErrorPage = ({ children }) => (
  <ErrorDiv>
    {children}
    <Link className="no-decoration-color" to="/discover">
      <ErrorDiscoverIcon className="fa fa-feed" />
    </Link>
  </ErrorDiv>
);

export default ErrorPage;
