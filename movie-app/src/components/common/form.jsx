import React, { Component } from "react";
import Joi from "joi-browser";


class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    const errors = {};
    const { data } = this.state;
    if (!error) return null;
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;

  };

  validateProperty = ({ name, value }) => {

    const obj = { [name]: value }; 
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };



  handleSubmmit = (fobj) => {
    fobj.preventDefault();
    const errors = this.validate();
    console.log(errors);

    //to resovle the null error,error property should always be set to an object,it should never be null
    this.setState({ errors: errors || {} });

    if (errors) return;
    console.log("Handling form submit ");
    console.log(this.state.data);
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };

    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    data[input.name] = input.value;
    this.setState({ data, errors });
  };
}

export default Form;
