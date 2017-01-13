import React, { Component } from 'react';
import '../node_modules/spectre.css/dist/spectre.min.css';

import PedidosPage from './containers/PedidosPage';

class App extends Component {
  render() {
    return (
      <div>
        <PedidosPage />
      </div>
    );
  }
}

export default App;
