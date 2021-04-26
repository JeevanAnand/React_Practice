import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "User Name is Required";

    if (account.password.trim() === "")
      errors.password = "Password is Required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    
    if( name === 'username' )
    {
        if (value.trim() === "") return "UserName is required";
    }

    if( name === 'password' )
    {
        if (value.trim() === "") return "Password is required";
    }
  };

//npm i joi-browser@1.4

  handleSubmmit = (fobj) => {
    fobj.preventDefault();
    const errors = this.validate();
    console.log(errors);

    //to resovle the null error,error property should always be set to an object,it should never be null
    this.setState({ errors: errors || {} });

    if (errors) return;
    console.log("Handling form submit ");
    console.log(this.state.account);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    const errors={...this.state.errors};    

    const errorMessage=this.validateProperty(input);
    if(errorMessage)
    {
        errors[input.name]=errorMessage;
    }
    else{
        delete errors[input.name];
    }

    account[input.name] = input.value;
    this.setState({ account ,errors});
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div>
        <h1> Login </h1>
        <form onSubmit={this.handleSubmmit}>
          <Input
            onChange={this.handleChange}
            name="username"
            value={account.username}
            label="UserName"
            error={errors.username}
          />

          <Input
            onChange={this.handleChange}
            name="password"
            value={account.password}
            label="Password"
            error={errors.password}
          />

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
