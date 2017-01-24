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

class HeaderForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <Field
          name="title" type="text"
          component={renderField} label="Title"
          validate={[required, maxLength15]}
        />
      </div>
    );
  }
}


export default HeaderForm;
