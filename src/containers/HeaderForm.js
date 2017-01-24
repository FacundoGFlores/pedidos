import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

class HeaderForm extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" />
      </div>
    );
  }
}


export default HeaderForm;
