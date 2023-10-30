import { useState } from "react";

export const useEmployeeForm = ({ baseUrl, method }: { baseUrl: string, method: string }) => {
    const [toast, setToast] = useState(false);
    const [status, setStatus] = useState({
        message: '',
        error: false
    });
    method
    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        // get the form data
        const form = e.currentTarget;

        const firstName = (form.elements.namedItem('first_name') as HTMLInputElement).value;
        const lastName = (form.elements.namedItem('last_name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        // create the employee

        fetch(baseUrl, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email
            })
        })
            .then((res: any) => {
                console.log(res)
                if (res && (res.status === 201)) {
                    setStatus({
                        message: "Employee created successfully",
                        error: false
                    });
                    form.reset();
                    setToast(true);
                } else if (res && res.status === 200) {
                    setStatus({
                        message: "Employee updated successfully",
                        error: false
                    });
                    form.reset();
                    setToast(true);
                } else if (res && res.status === 400) {
                    setStatus({
                        message: "Please fill all the fields",
                        error: true
                    });
                    setToast(true);
                } else if (res && res.status === 409) {
                    setStatus({
                        message: "Employee already exists with this email",
                        error: true
                    });
                    setToast(true);
                } else {
                    setStatus({
                        message: "Something went wrong",
                        error: true
                    });
                    setToast(true);
                    setTimeout(() => {
                        setToast(false);
                    }, 3000);
                }
            }).catch((err) => {
                console.log(err);
                setStatus({
                    message: "Something went wrong",
                    error: true
                });
                setTimeout(() => {
                    setToast(false);
                }, 3000);
            })
    }

    return { handleSubmit, toast, setToast, status }
}