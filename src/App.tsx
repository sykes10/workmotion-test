import React, { useState, useEffect } from 'react';
import {Employee} from './components/Employee';
import { EmployeeProps } from "./types/Employee";
import './App.css';

function App() {


  return (
    <div className="App">
      {employees.map(employee => {
       return <Employee {...employee}/>
     })} 
    </div>
  );
}

export default App;
