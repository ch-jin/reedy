import React from "react";
import CollectionListContainer from "../collections/CollectionListContainer";
import { withRouter, Link } from "react-router-dom";
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
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    this.props.addFeed(this.state.formInput).then(id => {
      this.setState({ formInput: "" });
      this.props.history.push(`/feeds/${id}/articles`);
    });
  }

  renderAddBar() {
    const { addState, formState } = this.state;
    if (addState && !formState) {
      return (
        <AddWrapper>
          <Link to="/discover" className="no-decoration">
            <AddItem color={true}>
              <i className="fa fa-th" />
              Browse Feeds
            </AddItem>
          </Link>
          <AddItem onClick={this.toggleFormState}>
            <i className="fa fa-link" />
            Add URL
          </AddItem>
        </AddWrapper>
      );
    } else {
      return null;
    }
  }

  renderAddURL() {
    const { addState, formState } = this.state;
    if (addState && formState) {
      return (
        <AddWrapper>
          <InputWrapper onSubmit={this.handleSubmit}>
            <StyledURLInput
              placeholder="RSS feed URL"
              value={this.state.formInput}
              onChange={this.handleChange}
            />
            <StyledSubmit onClick={this.handleSubmit}>+</StyledSubmit>
          </InputWrapper>
        </AddWrapper>
      );
    } else {
      return null;
    }
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
            {this.renderAddBar()}
            {this.renderAddURL()}
          </Transition>
          <StyledAddContentButton onClick={this.toggleAddState}>
            <i className="fa fa-plus" /> ADD CONTENT
          </StyledAddContentButton>
        </SideNavWrapper>
      </FixedSideNav>
    );
  }
}

export default withRouter(MainSideNav);
