import { useState, useEffect } from 'react';
import { Employee } from './Employee';
import { EmployeeProps } from '../types/Employee';
export function EmployeeList() {
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
        setError((e as Error).message || 'Unexpected setError')
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-full">
      {
        employees.map(employee => {
          return <Employee {...employee} key={employee.id} />
        })
      }
      {error ? <p className="text-red font-semibold">{error}</p> : null}
    </div>
  )
}
