import React, { PropTypes } from 'react';
import PedidosForm from './PedidosForm';

export default class Pedidos extends React.Component {
  handleSubmit = (values) => {
      // Do something with the form values
    console.log(values);
  }
  render() {
    return (
      <PedidosForm onSubmit={this.handleSubmit} />
    );
  }
}

Pedidos.propTypes = {
};
