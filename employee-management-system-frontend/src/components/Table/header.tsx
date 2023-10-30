import React from 'react'

const TableHeader = () => {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    First Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                    <span>Edit</span>
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                    <span>Delete</span>
                </th>
            </tr>
        </thead>
    )
}

export default TableHeader
