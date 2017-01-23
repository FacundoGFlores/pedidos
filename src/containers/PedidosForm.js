import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import SelectInput from '../components/SelectInput';

const renderNumberField = field => (
  <div>
    <label className="form-label" htmlFor="input-cantidad">Cantidad</label>
    <input {...field.input} className="form-input" type="number" id="input-cantidad" placeholder="Cantidad" />
  </div>
);

const renderSelect = field => (
  <SelectInput
    name={'itemSelect'}
    placeholder={'Choose an item'}
    {...field}
  />
);

class PedidosForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;
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
          <Field name="myNumberField" component={renderNumberField} />
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
})(PedidosForm);

export default PedidosForm;
