import React from "react";
import { Spinner } from "../../styles/spinner";
import { StyledSearchBar, SearchBarContainer } from "../../styles/discover";

class DiscoverSearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ value: e.currentTarget.value });
    this.props.fetchDiscoverFeeds(e.currentTarget.value);
  }

  render() {
    const { loading } = this.props;
    return (
      <SearchBarContainer>
        <StyledSearchBar
          innerRef={input => (this.input = input)}
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search by title or URL"
          type="text"
        />
        {loading && <Spinner />}
      </SearchBarContainer>
    );
  }
}

export default DiscoverSearchBar;
