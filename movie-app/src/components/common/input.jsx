import React from "react";
const Input = ({ onChange, name, value, label,error,type}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        id={name}
        className="form-control"
      />

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

