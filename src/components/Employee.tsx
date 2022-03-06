import React from 'react';
import StatusBar from './StatusBar';
import { Employee } from '../types/employee';

const EmployeeComponent: React.FC<Employee> = ({ status, id, firstName, lastName, email }) => {
  return (
    <div className="border-b grid md:grid-cols-[25%_25%_50%] grid-cols-2 py-4 md:p-4 gap-4 md:gap-0">
      <div className="self-center px-4 md:px-0">
        <span className="w-8 h-8 items-center text-sm justify-center bg-emerald-100 text-teal-700 rounded-full font-bold inline-flex mr-2">
          {firstName.slice(0, 1)}
          {lastName.slice(0, 1)}
        </span>
        {firstName} {lastName}
      </div>
      <div className="font-bold self-center px-4 md:px-0">{email}</div>
      <StatusBar initialStatus={status} id={id} />
    </div>
  );
};
export default EmployeeComponent;
