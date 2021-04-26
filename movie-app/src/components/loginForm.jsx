import React, { Component } from "react";

class LoginForm extends Component {

  state = {
    // account: { username: "", password: "" },
    // account: { password: "" },
    account: { username: null, password: "" }
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
      const{account}=this.state;

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
              value={account.username}
              id="username"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="password"
              value={account.password}
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
