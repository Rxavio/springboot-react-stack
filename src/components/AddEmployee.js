import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import employeeService from "../services/employee.service";

const AddEmployee = () => {
    const[name, setName] = useState('');
    const[location, setLocation] = useState('');
    const[department, setDepartment] = useState('');
    // const history = useHistory();
    const navigate = useNavigate();

    const saveEmployee = (e) => {
        e.preventDefault();
        
        const employee = {name, location, department};
            //create
            employeeService.create(employee)
            .then(response => {
             console.log("employee added successfully", response.data);
              // history.push("/");
              navigate('/')
            })
            .catch(error => {
                console.log('something went wroing', error);
            });
        }
    
    return(
        <div className="container">
            <h3>Add Employee</h3>
            <hr/>
            <form>
                <div className="form-group mb-2">
                    <input 
                    type="text" 
                    className="form-control col-4"
                     id="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder="Enter name"
                    />
                </div>

                <div className="form-group mb-2">
                    <input 
                    type="text" 
                    className="form-control col-4"
                    id="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Enter Department"
                    />
                </div>

                <div className="form-group mb-2">
                    <input 
                    type="text" 
                    className="form-control col-4"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter Location"
                    />
                </div>

                <div>
                    {/* <button className="btn btn-primary mt-2">Save</button> */}
                    <button onClick={(e) => saveEmployee(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}
export default AddEmployee;