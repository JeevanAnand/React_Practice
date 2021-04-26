import React, { Component } from "react";

class LoginForm extends Component {
    
handleSubmmit = fobj =>{
    fobj.preventDefault();
    console.log("Handling form submit ");

}
    
  render() {
    return (
      <div>
        <h1>This is Login form</h1>
        <form onSubmit={this.handleSubmmit}>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text"  id="password" className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
