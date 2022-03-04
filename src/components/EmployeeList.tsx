import React, { useState, useEffect } from 'react';
import {Employee} from '@/components/Employee';
import './App.css';
import { EmployeeProps } from '@/types/Employee';
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
}
