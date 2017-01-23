import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import SelectInput from '../components/SelectInput';

const validate = (values) => {
  const errors = {};
  if (!values.myNumberField) {
    errors.myNumberField = 'Requerido';
  } else if (isNaN(Number(values.myNumberField))) {
    errors.myNumberField = 'Debe ingresar un número';
  } else if (Number(values.myNumberField) > 3) {
    errors.myNumberField = 'No puede pedir más de 3 comidas';
  } else if (Number(values.myNumberField) < 0) {
    errors.myNumberField = 'Debe ingresar un número positivo';
  }
  return errors;
};

const warn = (values) => {
  const warnings = {};
  if (values.myNumberField > 2) {
    warnings.myNumberField = 'Llegando al límite...';
  }
  return warnings;
};

const renderSelect = field => (
  <SelectInput
    name={'itemSelect'}
    placeholder={'Choose an item'}
    {...field}
  />
);

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} className="form-input" type="number" id="input-cantidad" placeholder={label} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class PedidosForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const options = [
        { label: 'Hamburguesa', value: 'HAM' },
        { label: 'Pizza', value: 'PIZ' },
        { label: 'Lomito', value: 'LOM' },
        { label: 'Milanesa', value: 'MIL' },
    ];
    return (
      <form className="container" onSubmit={handleSubmit}>
        <h1>Nuevo Pedido</h1>
        <div className="form-group">
          <Field
            name="comidas"
            component={renderSelect}
            options={options}
          />
          <Field name="myNumberField" type="number" component={renderField} label="Ingrese cantidad" />
        </div>
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
  validate,
  warn,
})(PedidosForm);

export default PedidosForm;
