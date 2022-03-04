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
        if(response.ok) {
            setStatus(newStatus)
        }
    }
    return (
        <div className="border shadow w-full flex rounded justify-between items-center p-4 mb-4">
            <div className="flex flex-col">
                <p>
                    {props.first_name} {props.last_name}
                </p>
                <p className="font-bold">
                    {props.email}
                </p>
            </div>
            <StatusBar
                active={status}
                onClick={(newStatus) => updateEmployeeStatus(newStatus)}
            />
        </div>
    )
}
