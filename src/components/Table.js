import React from 'react';

const Table = ({ vehicle }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Year</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Colour</th>
          <th>Vin</th>
          <th>Cost</th>
          <th>Country</th>
          <th>City</th>
          <th>Address</th>

        </tr>
      </thead>
      <tbody>
        { (vehicle.length > 0) ? vehicle.map( (vehicle, index) => {
        console.log(vehicle.length)
                   return (
                    <tr key={ index }>
                      <td>{ vehicle.id }</td>
                      <td>{ vehicle.year }</td>
                      <td>{ vehicle.brand }</td>
                      <td>{ vehicle.model }</td>
                      <td>{ vehicle.colour }</td>
                      <td>{ vehicle.vin }</td>
                      <td>{ vehicle.cost }</td>
                      <td>{ vehicle.country }</td>
                      <td>{ vehicle.city }</td>
                      <td>{ vehicle.address }</td>

                      <td>"..."</td>
                    </tr>
                  )
                 }) : <tr><td colSpan="10">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

export default Table

