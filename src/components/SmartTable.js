import React from 'react';

const SmartTable = (props) => (
  <table className="table table-striped table-hover"
    name={props.name}
    >
    <thead>
      <tr>
        {props.cols.map((col, index) => {
          return (
            <th key={index}> {col} </th>
          )
        })}
      </tr>
    </thead>
    <tbody>
      {props.rows.map(row => {
        return (
          <tr key={row.id}>
            <td> {row.comida} </td>
            <td> {row.precio} </td>
            <td> {row.usuario} </td>
          </tr>
        )
      })}
    </tbody>
  </table>
);

SmartTable.propTypes = {
  name: React.PropTypes.string.isRequired,
  cols: React.PropTypes.array.isRequired,
  rows: React.PropTypes.array.isRequired,
}

export default SmartTable;
