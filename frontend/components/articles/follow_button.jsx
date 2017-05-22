import React from "react";
import { StyledFollowButton } from "../../styles/theme";

const FollowButton = ({ handleClick }) => (
  <StyledFollowButton onClick={handleClick}>Follow</StyledFollowButton>
);

export default FollowButton;
