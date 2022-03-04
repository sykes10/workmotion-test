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
        <tr className='border-b'>
            <td className="pl-4 py-4 "><span className='w-8 h-8 items-center text-sm justify-center  bg-[#E5F2F0] text-[#01816D] rounded-full font-bold inline-flex mr-2'>{props.first_name.slice(0,1)}{props.last_name.slice(0,1)}</span>{props.first_name} {props.last_name}</td>
            <td className='font-bold py-4'>{props.email}</td>
            <td className='pr-4 py-4'>
                <StatusBar
                    active={status}
                    onClick={(newStatus) => updateEmployeeStatus(newStatus)}
                />
            </td>
        </tr>
    )
}
