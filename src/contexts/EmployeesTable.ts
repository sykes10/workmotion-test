import React from 'react';
import { updateEmployeeStatus } from '../services/employee';

export const EmployeesTableContext = React.createContext({
  updateEmployeeStatus
});
