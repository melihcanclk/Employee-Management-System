"use client"
import { TableContentProps } from '@/types/table'
import TableHeader from '@/components/Table';
import { useGetAllEmployees } from '@/hooks/useGetAllEmployees';
import { DeleteConfirmModal } from '@/components/Modals/DeleteConfirmModal';
import { useState } from 'react';

const Table = () => {
    const { tableContentList } = useGetAllEmployees();
    const [show, setShow] = useState(false);
    const [id, setId] = useState<number>(0);

    const handleOpenModal = (_id: number) => {
        setId(_id);
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="relative overflow-x-auto w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <TableHeader />
                {
                    tableContentList.map((element: TableContentProps, key) => (
                        <tbody key={key}>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {element.id}
                                </th>
                                <td className="px-6 py-4">
                                    {element.firstName}
                                </td>
                                <td className="px-6 py-4">
                                    {element.lastName}
                                </td>
                                <td className="px-6 py-4">
                                    {element.email}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href={`/edit-employee/${element.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button onClick={() => handleOpenModal(element.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
            <DeleteConfirmModal handleClose={handleClose} id={id.toString()} show={show} />
        </div >
    )
}

export default Table