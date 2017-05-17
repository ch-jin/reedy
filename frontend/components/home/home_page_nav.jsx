import React from "react";
import { Link } from "react-router-dom";

import { StyledHomeNav } from "../../styles/home";

class HomePageNav extends React.Component {
  constructor(props) {
    super(props);
    this.clearErrors = this.clearErrors.bind(this);
  }

  clearErrors() {
    this.props.clearErrors();
  }

  render() {
    return (
      <StyledHomeNav>
        Reedy
        <br />

        <Link onClick={this.clearErrors} to="/login">Login</Link>
        <br />
        <Link onClick={this.clearErrors} to="/signup">Signup</Link>

        <br />
        <br />

      </StyledHomeNav>
    );
  }
}

export default HomePageNav;
