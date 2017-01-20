import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './App';
import PedidosPage from './containers/PedidosPage';
import PedidosForm from './containers/PedidosForm';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PedidosPage} />
    <Route path="/nuevopedido" component={PedidosForm} />
  </Route>
);
