import React from "react";
import CollectionListContainer
  from "../collections/CollectionListContainer";
import Transition from "../../utils/transition_util";
import { slideUp } from "../../styles/transitions";
import {
  FixedSideNav,
  SideNavWrapper,
  SideNavContent,
  StyledAddContentButton,
  AddWrapper,
  AddItem
} from "../../styles/main";

class MainSideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addState: false };
    this.toggleAddState = this.toggleAddState.bind(this);
    this.renderAddBar = this.renderAddBar.bind(this);
  }

  toggleAddState() {
    this.setState({ addState: !this.state.addState });
  }

  renderAddBar() {
    return (
      <AddWrapper>
        <AddItem color={true}>
          Browse Feeds
        </AddItem>
        <AddItem>
          Add URL
        </AddItem>
      </AddWrapper>
    );
  }

  render() {
    const { articleModal } = this.props;
    return (
      <FixedSideNav articleModal={articleModal}>
        <SideNavWrapper>
          <SideNavContent>
            <CollectionListContainer />
          </SideNavContent>
          <Transition
            identifier={this.state.addState.toString()}
            {...slideUp}
          >
            {this.state.addState && this.renderAddBar()}
          </Transition>
          <StyledAddContentButton onClick={this.toggleAddState}>
            <i className="fa fa-plus" /> ADD CONTENT
          </StyledAddContentButton>

        </SideNavWrapper>
      </FixedSideNav>
    );
  }
}

export default MainSideNav;
