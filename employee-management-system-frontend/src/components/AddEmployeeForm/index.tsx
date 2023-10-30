"use client";
import { BASE_URL } from '@/hooks/constants';
import React, { useState } from 'react'
import { ToastSuccess } from '../Toast/success';

const AddEmployeeForm = () => {

    const [toast, setToast] = useState(false);
    const [status, setStatus] = useState({
        message: '',
        error: false
    });

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

        fetch(BASE_URL, {
            method: 'POST',
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
                console.log({ res })
                if (res && res.status === 201) {
                    setStatus({
                        message: "Employee created successfully",
                        error: false
                    });
                    form.reset();
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

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                    </div>

                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                </div>
                {/* <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
        </div>
        <div className="mb-6">
          <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
          <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
        </div> */}
                <div className="w-full flex justify-end">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>
            {
                (
                    toast &&
                    <ToastSuccess
                        setToast={setToast}
                        text={status.message}
                        isError={status.error}
                    />


                )
            }
        </div>
    )
}

export default AddEmployeeForm