export enum EmployeeStatus {
    "Added" = "ADDED",
    "InCheck" = "IN-CHECK",
    "Approved" = "APPROVED",
    "Active" = "ACTIVE",
    "Inactive" = "INACTIVE",
}
export interface EmployeeProps {
    id: number;
    first_name:string;
    last_name: string;
    email: string;
    gender: string;
    status: EmployeeStatus;
};
