import React from "react";
import StyledModal from "../styles/modal";
import { withRouter } from "react-router-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { history, redirectPath } = this.props;
    if (e.target.classList.contains("outer-modal")) {
      history.push(redirectPath);
    }
  }

  render() {
    return (
      <StyledModal className="outer-modal" onClick={this.handleClick}>
        {this.props.children}
      </StyledModal>
    );
  }
}

export default withRouter(Modal);
