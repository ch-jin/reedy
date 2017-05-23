import React from "react";
import { Link } from "react-router-dom";
import { StyledMainNavHeader, MainNavLogo } from "../../styles/main";

class MainNavHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTitle: "" };
  }

  componentWillReceiveProps(nextProps) {
    const { currentFeed, history, homePath } = nextProps;

    if (history.location.pathname === "/discover") {
      this.setState({ currentTitle: "Discover" });
    } else if (history.location.pathname === "/subscriptions") {
      this.setState({ currentTitle: "Subscriptions" });
    } else if (currentFeed) {
      this.setState({ currentTitle: currentFeed.title });
    } else if (homePath === "/subscriptions") {
      this.setState({ currentTitle: "Subscriptions" });
    }
  }

  render() {
    const { homePath } = this.props;

    return (
      <StyledMainNavHeader>
        <Link to={homePath}>
          <MainNavLogo src={window.greyLogoURL} />
        </Link>
        <h2 dangerouslySetInnerHTML={{ __html: this.state.currentTitle }} />
      </StyledMainNavHeader>
    );
  }
}

export default MainNavHeader;
