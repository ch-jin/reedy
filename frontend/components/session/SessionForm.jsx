import React from "react";
import merge from "lodash/merge";
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
      confirmPassword: "",
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
    const user = merge({}, this.state);
    const { formType, processForm, passwordError } = this.props;
    if (formType === "Sign Up" && user.password !== user.confirmPassword) {
      passwordError();
    } else {
      processForm(user);
    }
  }

  update(e) {
    e.preventDefault();
    const inputEle = e.currentTarget;
    this.setState({ [inputEle.name]: inputEle.value });
  }

  render() {
    const { username, password, confirmPassword } = this.state;
    const { formType, loading, errors, loginGuest } = this.props;

    return (
      <StyledSessionForm
        signup={formType === "Sign Up"}
        onSubmit={this.handleSubmit}
      >

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
          placeholder={`Password ${formType === "Sign Up" ? "(at least 6 characters)" : ""}`}
          value={password}
          onChange={this.update}
        />

        {formType === "Sign Up" &&
          <StyledSessionInput
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={this.update}
          />}

        <StyledSessionButton>
          Submit
        </StyledSessionButton>

        <SessionFormLinks loginGuest={loginGuest} formType={formType} />
      </StyledSessionForm>
    );
  }
}

export default SessionForm;
