import React, { useState, useContext, useCallback } from 'react';
import { EmployeesTableContext } from '../contexts/EmployeesTable';
import { EmployeeStatus, Employee } from '../types/employee';
import { useIsMounted } from 'usehooks-ts';

const StatusBar: React.FC<{
  initialStatus: EmployeeStatus;
  id: Employee['id'];
}> = ({ initialStatus, id }) => {
  const isMounted = useIsMounted();
  const [activeStatus, setActiveStatus] = useState(initialStatus);
  const employeesTableContext = useContext(EmployeesTableContext);
  const statusList: EmployeeStatus[] = [
    EmployeeStatus.Added,
    EmployeeStatus.InCheck,
    EmployeeStatus.Approved,
    EmployeeStatus.Active,
    EmployeeStatus.Inactive
  ];

  const handleClick = useCallback((statusItem: EmployeeStatus) => {
    if (statusItem === activeStatus) return;
    employeesTableContext.updateEmployeeStatus(statusItem, id);
    isMounted() && setActiveStatus(statusItem);
  }, []);

  return (
    <ul className="grid grid-cols-5 justify-items-center h-10 border rounded-xl overflow-hidden self-center col-span-2 md:col-span-1">
      {statusList.map((statusItem, index) => (
        <li
          key={index}
          onClick={() => handleClick(statusItem)}
          className={`${activeStatus === statusItem ? ' bg-teal-700 text-white' : ''} 
          ${index < statusList.length - 1 ? 'border-r' : ''} 
          transition-colors md:px-4 cursor-pointer text-center h-10 leading-10 w-full capitalize`}>
          {statusItem.toLowerCase()}
        </li>
      ))}
    </ul>
  );
};

export default StatusBar;
