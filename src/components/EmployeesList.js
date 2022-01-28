import React from 'react';
const EmployeeList = () => {

  return (
    <div className="container">
      <h3>List of Employees</h3>
      <hr/>
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
         
              <tr key="1">
                <td>Kalim</td>
                <td>Kigali</td>
                <td>Computer science</td>
              </tr>

              <tr key="2">
                <td>Kim</td>
                <td>Kigali</td>
                <td>Computer Engineering</td>
              </tr>
         
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default EmployeeList;
