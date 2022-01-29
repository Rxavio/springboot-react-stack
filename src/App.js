import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeesList';
import AddEmployee from './components/AddEmployee';
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <div>
        <div>

       <Routes> 
       <Route path='/' element={<EmployeeList />}/>
       <Route path='/add' element={<AddEmployee />} />
       <Route path='/employees/edit/:id' element={<AddEmployee />} />
       <Route path='/not-found' element={<NotFound />} /> 
       <Route path='*' element={<NotFound />} />
      </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
