import React, { Component } from "react";

class LoginForm extends Component {

//    username = React.createRef();

state = {
    account: {username:'', password:''}
}

  handleSubmmit = (fobj) => {
    fobj.preventDefault();
    console.log("Handling form submit ");
    console.log(this.state.account);
    // const username=this.username.current.value;
    // console.log(username);
  };

//   componentDidMount() {
//     this.username.current.focus();
//   }

 handleChange = (fobj) =>
 {
     const account = {...this.state.account};
     account.username=fobj.currentTarget.value;
     this.setState({account});
 }

  render() {
    return (
      <div>
        <h1> Login </h1>
        <form onSubmit={this.handleSubmmit}>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            {/* <input ref={this.username} type="text" id="username" className="form-control"/> */}
            <input autoFocus onChange={this.handleChange} type="text" id="username" className="form-control"/>
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
