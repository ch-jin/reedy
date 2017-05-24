import React from "react";
import { StyledFollowButton } from "../../styles/theme";

const FollowButton = ({ handleClick, followed }) => (
  <StyledFollowButton followed={followed} onClick={handleClick}>
    {followed ? "Unfollow" : "Follow"}
  </StyledFollowButton>
);

export default FollowButton;
