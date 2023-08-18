import React from 'react';

const Table = ({ vehicle }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>brand</th>

        </tr>
      </thead>
      <tbody>
        { (vehicle.length > 0) ? vehicle.map( (vehicle, index) => {
        console.log(vehicle.length)
                   return (
                    <tr key={ index }>
                      <td>{ vehicle.model }</td>

                      <td>"..."</td>
                    </tr>
                  )
                 }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

export default Table

