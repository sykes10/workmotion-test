import { EmployeeProps } from "../types/Employee";

export function Employee(props: EmployeeProps) {
    return <h1>Hello, {props.first_name}</h1>;
}
