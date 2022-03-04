import React, { useState, useEffect } from 'react';
import { Employee } from './Employee';
import { EmployeeProps } from '../types/Employee';

export function EmployeeTable() {
  const [employees, setEmployees] = useState<EmployeeProps[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {

        const response = await fetch(' http://localhost:5555/employees')
        if (response.ok) {
          setEmployees(await response.json());
        }
      } catch (e) {
        setError((e as Error).message || 'Unexpected error')
      }
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <table className='table-auto w-full'>
        <thead className='border-b'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(employee => {
              return <Employee {...employee} key={employee.id} />
            })
          }
        </tbody>
      </table>
      {error ? <p className="text-red font-semibold">{error}</p> : null}
    </React.Fragment>
  )
}
