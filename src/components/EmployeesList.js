import React from 'react';
import { Link} from 'react-router-dom';
const EmployeeList = () => {

  return (
    <div className="container">
      <h3>List of Employees</h3>
      <hr/>
      <div>
      <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
         
              <tr key="1">
                <td>Kalim</td>
                <td>Kigali</td>
                <td>Computer science</td>
                <td>
                  <Link className="btn btn-info" to="">Update</Link> 
                  <button className="btn btn-danger ml-2">Delete</button>
                </td>
              </tr>

              <tr key="2">
                <td>Kim</td>
                <td>Kigali</td>
                <td>Computer Engineering</td>
                <td>
                  <Link className="btn btn-info" to="">Update</Link> 
                  <button className="btn btn-danger ml-2">Delete</button>
                </td>
              </tr>
         
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default EmployeeList;
