import React from "react";
import { StyledErrorLi } from "../../styles/session_form";

const SessionErrorItem = ({ error }) => {
  return (
    <StyledErrorLi>
      {error}
    </StyledErrorLi>
  );
};

export default SessionErrorItem;
