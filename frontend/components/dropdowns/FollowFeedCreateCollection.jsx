import React from "react";
import { SmallCloseButton } from "../../styles/theme";
import {
  DropdownContent,
  StyledCreateInput,
  StyledDropdownSubmitButton,
  StyledDropdownCancelButton,
  ButtonContainer,
  DropdownEmptyItem,
  StyledCreateForm,
  Bold,
} from "../../styles/dropdown";

class FollowFeedCreateCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputVal: "" };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  handleCancelClick() {
    const { cancelClick } = this.props;
    this.setState({ inputVal: "" });
    cancelClick();
  }

  handleSubmit(e) {
    const { feedId, createCollection, cancelClick } = this.props;
    const { inputVal } = this.state;
    e.preventDefault();
    createCollection(inputVal, feedId);
    this.setState({ inputVal: "" });
    cancelClick();
  }

  update(e) {
    e.preventDefault();
    this.setState({ inputVal: e.currentTarget.value });
  }

  render() {
    const { inputVal } = this.state;
    const { handleCloseClick } = this.props;

    return (
      <DropdownContent>
        <SmallCloseButton onClick={handleCloseClick} className="fa fa-times" />
        <DropdownEmptyItem>
          <Bold>
            Create Collection
          </Bold>
        </DropdownEmptyItem>
        <StyledCreateForm onSubmit={this.handleSubmit}>

          <StyledCreateInput
            innerRef={input => (this.input = input)}
            value={inputVal}
            onChange={this.update}
          />

          <ButtonContainer>
            <StyledDropdownSubmitButton type="submit">
              CREATE
            </StyledDropdownSubmitButton>
            <StyledDropdownCancelButton
              onClick={this.handleCancelClick}
              type="button"
            >
              CANCEL
            </StyledDropdownCancelButton>
          </ButtonContainer>
        </StyledCreateForm>
      </DropdownContent>
    );
  }
}

export default FollowFeedCreateCollection;
