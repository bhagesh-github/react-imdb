import React from 'react';
const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder ? placeholder : label} type={type} className="form-control"/>
      {touched &&
        ((error && <span className="input-error">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

export default renderField;