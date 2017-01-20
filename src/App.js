import React from 'react';
import '../node_modules/spectre.css/dist/spectre.min.css';
import './styles.css';

const App = props => (

  <div className="container">
    <div className="columns">
      <div className="col-md-9 centered">
        {props.children}
      </div>
    </div>
  </div>

);

App.PropTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default App;
