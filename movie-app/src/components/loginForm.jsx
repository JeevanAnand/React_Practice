import React, { Component } from "react";

class LoginForm extends Component {
   username = React.createRef();

  handleSubmmit = (fobj) => {
    fobj.preventDefault();
    console.log("Handling form submit ");
    const username=this.username.current.value;
    console.log(username);
  };

  componentDidMount() {
    this.username.current.focus();
  }

  render() {
    return (
      <div>
        <h1> Login </h1>
        <form onSubmit={this.handleSubmmit}>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              ref={this.username}
              type="text"
              id="username"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" className="form-control" />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
