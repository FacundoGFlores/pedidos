import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

class FooterForm extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="footer">Footer</label>
        <Field name="footer" component="input" type="text" />
      </div>
    );
  }
}


export default FooterForm;
