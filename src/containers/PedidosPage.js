import React, { Component } from 'react';
import SmartTable from '../components/SmartTable';

const Columnas = ["Pedido", "Precio", "Usuario"];

const Pedidos = [
  {
    "id": "1",
    "comida": "Hamburguesa",
    "precio": "$75",
    "usuario": "Matt"
  },
  {
    "id": "2",
    "comida": "Lomito",
    "precio": "$80",
    "usuario": "Runy"
  },
  {
    "id": "3",
    "comida": "Milanesa",
    "precio": "$80",
    "usuario": "Pipe"
  },
  {
    "id": "4",
    "comida": "Pizza",
    "precio": "$100",
    "usuario": "Dieguit"
  }
];

class PedidosPage extends Component {
  render() {
    return (
      <div>
        <h1>Lista de Pedidos</h1>
        <SmartTable name="listapedidos" cols={Columnas} rows={Pedidos} />
      </div>
    );
  }
}

export default PedidosPage;
