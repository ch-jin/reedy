import React from "react";
import {
  StyledSessionForm,
  StyledSessionInput,
  StyledSessionButton,
  StyledLettering,
} from "../../styles/session_form";
import SessionFormLinks from "./SessionFormLinks";
import SessionErrorList from "./SessionErrorList";
import { DefaultLoader } from "../../utils/loader_util";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.usernameInput.focus();
  }

  componentWillUnmount() {
    if (this.props.errors.length) {
      this.props.clearErrors();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(e) {
    e.preventDefault();
    const inputEle = e.currentTarget;
    this.setState({ [inputEle.name]: inputEle.value });
  }

  render() {
    const { username, password } = this.state;
    const { formType, loading, errors, loginGuest } = this.props;

    return (
      <StyledSessionForm onSubmit={this.handleSubmit}>

        {loading && <DefaultLoader />}
        <StyledLettering>
          {formType}
        </StyledLettering>

        {Boolean(errors.length) && <SessionErrorList errors={errors} />}

        <StyledSessionInput
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={this.update}
          innerRef={usernameInput => (this.usernameInput = usernameInput)}
        />

        <StyledSessionInput
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.update}
        />

        <StyledSessionButton>
          Submit
        </StyledSessionButton>

        <SessionFormLinks loginGuest={loginGuest} formType={formType} />
      </StyledSessionForm>
    );
  }
}

export default SessionForm;
