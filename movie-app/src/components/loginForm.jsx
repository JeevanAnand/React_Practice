import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema={
      username:Joi.string().required().label('UserName'),
      password:Joi.string().required().label('Password')

  }

  render() {
   
    return (
      <div>
        <h1> Login </h1>
        <form onSubmit={this.handleSubmmit}>
        
        {this.renderInput('username','Username')}
        {this.renderInput('password','Password','password')}

          <button 
          disabled={this.validate()}    
          className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
