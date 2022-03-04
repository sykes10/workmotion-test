import { EmployeeProps } from "../types/Employee";

export function Employee(props: EmployeeProps) {
    return <div>{props.first_name}</div>;
}
