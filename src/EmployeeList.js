import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
//import EmployeeService from '../services/employee.service';
import service from './services';
import { useQuery } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeList = () => {
  const {data}=useQuery("emploee",()=>service.getall())
  return (
    <div className="container">
      <h3>List of Employees</h3>
      <hr/>
      <div>
        <Link to="/" className="btn btn-primary mb-2">Add Employee</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Emp First Name</th>
              <th>Emp Last Name</th>
              <th>EmailId</th>
              <th>Age</th>
              <th>Phone Number</th>
              <th>City</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
          {
            data?.data?.map(employee => (
              <tr key={employee.id}>
                <td>{employee.empfname}</td>
                <td>{employee.emplname}</td>
                <td>{employee.emailid}</td>
                <td>{employee.age}</td>
                <td>{employee.phoneNo}</td>
                <td>{employee.city}</td>
                {/* <td>
                  <Link className="btn btn-info" to={`/employees/edit/${employee.id}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                  }}>Delete</button>
                </td> */}
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