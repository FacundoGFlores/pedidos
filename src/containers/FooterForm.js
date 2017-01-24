import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';


const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class FooterForm extends React.Component {
  render() {
    return (
      <div>
        <Field
          name="footer" type="text"
          component={renderField} label="Footer"
          validate={[required, maxLength15]}
        />
        <Field
          name="footer2" type="text"
          component={renderField} label="Footer2"
          validate={[required, maxLength15]}
        />
        <Field
          name="footer3" type="text"
          component={renderField} label="Footer3"
          validate={[required, maxLength15]}
        />
      </div>
    );
  }
}


export default FooterForm;
