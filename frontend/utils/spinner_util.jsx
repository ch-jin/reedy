import React from "react";
import { SpinnerContainer, SessionSpinner } from "../styles/spinner";

export default ({ active }) =>
  active
    ? <SpinnerContainer>
        <SessionSpinner />
      </SpinnerContainer>
    : null;
