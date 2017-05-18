import React from "react";
import MainNavWrapper from "./main_nav_wrapper";
import MainNavDropdownContainer from "./main_nav_dropdown_container.js";
import { Img } from "../../styles/theme";
import {
  StyledUserSection,
  StyledMainNavHeader,
} from "../../styles/main";

class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownActive: false,
    };

    this.handleImgClick = this.handleImgClick.bind(this);
  }

  handleImgClick() {
    this.setState({
      dropdownActive: !this.state.dropdownActive,
    });
  }

  render() {
    const { username, handleLogout } = this.props;

    return (
      <MainNavWrapper>

        <StyledMainNavHeader>
          New York Times
        </StyledMainNavHeader>

        <StyledUserSection>
          <Img src={window.guestImg} onClick={this.handleImgClick} />
          <MainNavDropdownContainer
            active={this.state.dropdownActive}
          />
        </StyledUserSection>

      </MainNavWrapper>
    );
  }
}

export default MainNav;
