import React from "react";
import { Link } from "react-router-dom";
import { StyledMainNavHeader, MainNavLogo } from "../../styles/main";

class MainNavHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTitle: "" };
  }

  render() {
    return (
      <StyledMainNavHeader>
        <Link to="/discover">
          <MainNavLogo src={window.greyLogoURL} />
        </Link>
        <h2 dangerouslySetInnerHTML={{ __html: this.state.currentTitle }} />
      </StyledMainNavHeader>
    );
  }
}

export default MainNavHeader;
