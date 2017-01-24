import React, { PropTypes } from 'react';
import { Field, FormSection, reduxForm } from 'redux-form';
import FooterForm from './FooterForm';
import HeaderForm from './HeaderForm';

class PedidosForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="container" onSubmit={handleSubmit}>
        <FormSection name="title">
          <HeaderForm />
        </FormSection>
        <FormSection name="footer">
          <FooterForm />
        </FormSection>
        <div className="form-group">
          <button type="submit" className="btn btn-primary input-group-btn">Submit</button>
        </div>
      </form>
    );
  }
}

PedidosForm.propTypes = {
};

PedidosForm = reduxForm({
  form: 'pedidos',
})(PedidosForm);

export default PedidosForm;
