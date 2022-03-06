import React from 'react';
import { useFetch } from 'usehooks-ts';
import { EmployeesTableContext } from '../contexts/EmployeesTable';
import { updateEmployeeStatus } from '../services/employee';
import { Employee } from '../types/employee';
import EmployeeComponent from './Employee';

const url = `http://localhost:5555/employees`;

export default function EmployeeTable() {
  const { data: employees, error } = useFetch<Employee[]>(url);

  if (error) return <p className="text-red font-semibold">{error}</p>;
  if (!employees) return <p>Loading...</p>;
  if (!employees.length) return <p>No Employees yet</p>;
  return (
    <EmployeesTableContext.Provider
      value={{
        updateEmployeeStatus
      }}>
      <div className="w-full border grid">
        <div className="grid md:grid-cols-[25%_25%_50%] grid-cols-1 bg-emerald-100 font-bold text-center p-2">
          <div className="self-center">Name</div>
          <div className="self-center">Email</div>
          <div className="self-center">Status</div>
        </div>
        {employees.map(({ id, lastName, firstName, email, status }) => (
          <EmployeeComponent {...{ id, lastName, firstName, email, status }} key={id} />
        ))}
      </div>
    </EmployeesTableContext.Provider>
  );
}
