import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();
    const inputEle = e.currentTarget;
    this.setState({ [inputEle.name]: inputEle.value });
  }

  render() {
    const { username, password } = this.state;

    return (
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.update}
          />
        </label>

        <label>
          Password:
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.update}
          />
        </label>

        <button>
          Submit
        </button>

        <button>
          Guest Login
        </button>
      </form>
    );
  }
}

export default SessionForm;
