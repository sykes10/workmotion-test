import type { EmployeeStatus, Employee } from '../types/employee';

export async function updateEmployeeStatus(
  newStatus: EmployeeStatus,
  id: number
): Promise<Employee | undefined> {
  const response = await fetch(`http://localhost:5555/employees/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ status: newStatus })
  });
  if (response.ok) {
    return await response.json();
  }
}
