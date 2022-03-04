import { EmployeeProps } from "../types/Employee";

export function Employee(props: EmployeeProps) {
    return (
        <div className="border shadow w-full flex rounded">
            {props.first_name}
        </div>
    )
}
