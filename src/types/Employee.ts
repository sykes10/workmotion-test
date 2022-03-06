export enum EmployeeStatus {
  'Added' = 'ADDED',
  'InCheck' = 'IN-CHECK',
  'Approved' = 'APPROVED',
  'Active' = 'ACTIVE',
  'Inactive' = 'INACTIVE'
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: EmployeeStatus;
}
