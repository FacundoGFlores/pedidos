import React from 'react';

const SmartTable = props => (
  <table
    className="table table-striped table-hover"
    name={props.name}
  >
    <thead>
      <tr>
        {props.cols.map(col => (
          <th key={col.id}> {col.text} </th>
          ))}
      </tr>
    </thead>
    <tbody>
      {props.rows.map(row => (
        <tr key={row.id}>
          <td> {row.comida} </td>
          <td> {row.precio} </td>
          <td> {row.usuario} </td>
        </tr>
        ))}
    </tbody>
  </table>
);

SmartTable.propTypes = {
  name: React.PropTypes.string.isRequired,
  cols: React.PropTypes.arrayOf(React.PropTypes.string),
  rows: React.PropTypes.arrayOf(React.PropTypes.string),
};

SmartTable.defaultProps = {
  name: '',
  cols: [],
  rows: [],
};

export default SmartTable;
