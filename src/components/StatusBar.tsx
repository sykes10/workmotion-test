import { EmployeeStatus } from '../types/Employee'

export function StatusBar({active, onClick}: { active: EmployeeStatus, onClick: (stateClicked: EmployeeStatus) => void})  {
    const statusList: EmployeeStatus[] = [
        EmployeeStatus.Added,
        EmployeeStatus.InCheck,
        EmployeeStatus.Approved,
        EmployeeStatus.Active,
        EmployeeStatus.Inactive
    ]

    return (
        <ul className='grid grid-cols-5 justify-items-center h-12 border rounded-xl overflow-hidden'>
            {
                statusList.map(
                    (statusItem, index) =>
                        <li 
                            key={index}
                            onClick={() => onClick(statusItem)}
                            className={
                            `${active === statusItem ?
                                'bg-slate-700 text-white'
                                : ''
                            } 
                            ${index < statusList.length ?
                                'border-r' :
                                ''
                            } 
                            transition-colors px-4 cursor-pointer text-center h-12 leading-[3rem] w-full`
                        }>
                            {statusItem}
                        </li>
                )
            }
        </ul>
    )
}
