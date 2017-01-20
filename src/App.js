import React from 'react';
import '../node_modules/spectre.css/dist/spectre.min.css';

const App = props => (
  <div>
    {props.children}
  </div>

);

App.PropTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default App;
