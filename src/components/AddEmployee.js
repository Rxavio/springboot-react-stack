import React from 'react';
import { Link } from "react-router-dom";

const AddEmployee = () => {
    
    return(
        <div className="container">
            <h3>Add Employee</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4" id="name" placeholder="Enter name"
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="department"
                        placeholder="Enter Department"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="location"
                        placeholder="Enter Location"
                    />
                </div>
                <div >
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default AddEmployee;