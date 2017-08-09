import React from "react";
import CollectionListContainer from "../collections/CollectionListContainer";
import { Link } from "react-router-dom";
import Transition from "../../utils/transition_util";
import { slideUp } from "../../styles/transitions";
import {
  FixedSideNav,
  SideNavWrapper,
  SideNavContent,
  StyledAddContentButton,
  AddWrapper,
  AddItem,
  StyledURLInput,
  InputWrapper,
  StyledSubmit,
} from "../../styles/main";

class MainSideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addState: false, formState: false };
    this.toggleAddState = this.toggleAddState.bind(this);
    this.renderAddBar = this.renderAddBar.bind(this);
    this.toggleFormState = this.toggleFormState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleAddState() {
    this.setState({
      addState: !this.state.addState,
      formState: false,
      formInput: "",
    });
  }

  toggleFormState() {
    this.setState({ formState: !this.state.formState });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ formInput: e.target.value });
  }

  renderAddBar() {
    return (
      <AddWrapper>
        <Link to="/discover" className="no-decoration">
          <AddItem color={true}>Browse Feeds</AddItem>
        </Link>
        <AddItem onClick={this.toggleFormState}>Add URL</AddItem>
      </AddWrapper>
    );
  }

  renderAddURL() {
    return (
      <AddWrapper>
        <InputWrapper>
          <StyledURLInput
            placeholder="RSS feed URL"
            value={this.state.formInput}
            onChange={this.handleChange}
          />
          <StyledSubmit>+</StyledSubmit>
        </InputWrapper>
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
          <Transition identifier={this.state.addState.toString()} {...slideUp}>
            {this.state.addState &&
              !this.state.formState &&
              this.renderAddBar()}
            {this.state.addState && this.state.formState && this.renderAddURL()}
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
