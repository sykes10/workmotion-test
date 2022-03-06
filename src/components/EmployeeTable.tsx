import React, { useState, useEffect } from 'react';
import { Employee } from './Employee';
import { EmployeeProps } from '../types/Employee';

export function EmployeeTable() {
  const [employees, setEmployees] = useState<EmployeeProps[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let controller = new AbortController();
    async function fetchData() {
      try {
        const response = await fetch(' http://localhost:5555/employees', {
          signal: controller.signal
        });
        if (response.ok) {
          setEmployees(await response.json());
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message || 'Unexpected error');
        }
      }
    }
    fetchData();
    return () => controller.abort();
  }, []);

  return (
    <>
      <table className="table-auto w-full border">
        <thead className="bg-[#EFF0F5] h-10">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return <Employee {...employee} key={employee.id} />;
          })}
        </tbody>
      </table>
      {error ? <p className="text-red font-semibold">{error}</p> : null}
    </>
  );
}
