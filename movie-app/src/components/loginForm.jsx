import React, { Component } from "react";

class LoginForm extends Component {

  state = {
    account: { username: "", password: "" },
  };

  handleSubmmit = (fobj) => {
    fobj.preventDefault();
    console.log("Handling form submit ");
    console.log(this.state.account);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1> Login </h1>
        <form onSubmit={this.handleSubmmit}>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              autoFocus
              onChange={this.handleChange}
              type="text"
              name="username"
              id="username"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="passw"
              id="password"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
