import { useState } from 'react';
import { EmployeeProps, EmployeeStatus } from "../types/Employee";
import { StatusBar } from './StatusBar'

export function Employee(props: EmployeeProps) {

    const [status, setStatus] = useState<EmployeeStatus>(props.status)

    async function updateEmployeeStatus(newStatus: EmployeeStatus) {
        if (newStatus === status) return;
        const response = await fetch(`http://localhost:5555/employees/${props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: newStatus
            })
        })
        if (response.ok) {
            setStatus(newStatus)
        }
    }
    return (
        <tr>
            <td>{props.first_name} {props.last_name}</td>
            <td className='font-bold'>{props.email}</td>
            <td>
                <StatusBar
                    active={status}
                    onClick={(newStatus) => updateEmployeeStatus(newStatus)}
                />
            </td>
        </tr>
    )
}
