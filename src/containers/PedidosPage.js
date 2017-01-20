import React from 'react';
import { Link } from 'react-router';
import SmartTable from '../components/SmartTable';

const Columnas = [
  {
    id: 1,
    text: 'Pedido',
  },
  {
    id: 2,
    text: 'Precio',
  },
  {
    id: 3,
    text: 'Usuario',
  },
];

const Pedidos = [
  {
    id: 1,
    comida: 'Hamburguesa',
    precio: '$75',
    usuario: 'Matt',
  },
  {
    id: 2,
    comida: 'Lomito',
    precio: '$80',
    usuario: 'Runy',
  },
  {
    id: 3,
    comida: 'Milanesa',
    precio: '$80',
    usuario: 'Pipe',
  },
  {
    id: 4,
    comida: 'Pizza',
    precio: '$100',
    usuario: 'Dieguit',
  },
];

const PedidosPage = () => (
  <div>
    <h1>Lista de Pedidos</h1>
    <Link to="nuevopedido">Nuevo Pedido</Link>
    <SmartTable name="listapedidos" cols={Columnas} rows={Pedidos} />
  </div>
);


export default PedidosPage;
