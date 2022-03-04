import React, { useState, useEffect } from 'react';
import { Employee } from './Employee';
import { EmployeeProps } from '../types/Employee';

export function EmployeeList() {
  const [employees, setEmployees] = useState<EmployeeProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(' http://localhost:5555/employees')
      if (response.ok) {
        setEmployees(await response.json());
      }
    }
    fetchData();
  });

  return (
    <div className="w-full">
      {
        employees.map(employee => {
          return <Employee {...employee} />
        })
      }
    </div>
  )
}
