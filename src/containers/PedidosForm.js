import React, { PropTypes } from 'react';

class PedidosForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="container">
        <h1>Nuevo Pedido</h1>
        <div className="form-group">
          <div className="form-group">
            <select className="form-select">
              <option>Elija una opción</option>
              <option>Hamburguesa</option>
              <option>Milanesa</option>
              <option>Pizza</option>
            </select>
          </div>
          <label className="form-label" htmlFor="input-cantidad">Cantidad</label>
          <input className="form-input" type="text" id="input-cantidad" placeholder="Cantidad" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary input-group-btn">Submit</button>
        </div>
      </form>
    );
  }
}

PedidosForm.propTypes = {
};

export default PedidosForm;
