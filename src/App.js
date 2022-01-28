import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeesList';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <div>
        <div>

       <Routes> 
       <Route path='/' element={<EmployeeList />}/>
      </Routes>
      
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
