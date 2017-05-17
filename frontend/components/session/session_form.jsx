import React from "react";
import {
  StyledSessionForm,
  StyledSessionInput,
  StyledSessionButton,
  StyledLettering,
  SpinnerContainer,
  SessionSpinner,
  SessionErrors,
} from "../../styles/session_form";
import SessionErrorList from "./session_errors_list";

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
    const { formType, loading, errors } = this.props;

    return (
      <StyledSessionForm onSubmit={this.handleSubmit}>

        {loading
          ? <SpinnerContainer> <SessionSpinner /> </SpinnerContainer>
          : ""}

        <StyledLettering>
          {formType}
        </StyledLettering>

        {!errors.length ? "" : <SessionErrorList errors={errors} />}

        <StyledSessionInput
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={this.update}
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

        <StyledSessionButton
          type="button"
          onClick={this.props.loginGuest}
        >
          Demo Login
        </StyledSessionButton>
      </StyledSessionForm>
    );
  }
}

export default SessionForm;
