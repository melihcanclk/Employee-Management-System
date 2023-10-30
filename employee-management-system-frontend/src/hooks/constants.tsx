import { Employee } from "@/types/employee";

export const BASE_URL = 'http://localhost:8080/api/employees';

export const getAllEmployees = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
}

export const createEmployee = async (employee: Employee) => {
    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    });
}