import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './App';
import PedidosPage from './containers/PedidosPage';
import Pedidos from './containers/Pedidos';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PedidosPage} />
    <Route path="/nuevopedido" component={Pedidos} />
  </Route>
);
