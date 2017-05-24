import React from "react";
import { StyledFollowButton } from "../../styles/theme";

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    const { followed } = props;
    this.state = {
      content: followed ? "following" : "follow",
    };
  }

  componentWillReceiveProps({ followed }) {
    this.setState({ content: followed ? "following" : "follow" });
  }

  render() {
    const { handleClick, followed } = this.props;
    return (
      <StyledFollowButton
        onMouseEnter={() => followed && this.setState({ content: "edit" })}
        onMouseLeave={() => followed && this.setState({ content: "following" })}
        followed={followed}
        onClick={handleClick}
      >
        {this.state.content}
      </StyledFollowButton>
    );
  }
}

export default FollowButton;
