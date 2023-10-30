import { TableContentProps, TableProps } from '@/types/table'
import React from 'react'

const TableContent = (props: TableContentProps) => {
    const { id, firstName, lastName, email } = props;
    return (
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {id}
                </th>
                <td className="px-6 py-4">
                    {firstName}
                </td>
                <td className="px-6 py-4">
                    {lastName}
                </td>
                <td className="px-6 py-4">
                    {email}
                </td>
                <td className="px-6 py-4 text-right">
                    <a href={`/edit-employee/${id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
                <td className="px-6 py-4 text-right">
                    <a href={`/delete-employee/${id}`} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                </td>
            </tr>
        </tbody>
    )
}

export default TableContent