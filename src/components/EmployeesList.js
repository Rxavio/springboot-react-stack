import React from 'react';
import { Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import employeeService from '../services/employee.service';

const EmployeeList = () => {
 const [employees, setEmployees] = useState([]);

  useEffect(() => {
    employeeService.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }, []);


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
          {
            employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.location}</td>
                <td>{employee.department}</td>
                <td>
                  {/* <Link className="btn btn-info" to=''>Update</Link> */}
                  <Link className="btn btn-info" to={`/employees/edit/${employee.id}`}>Update</Link>
                  <button className="btn btn-danger ml-2">Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default EmployeeList;
