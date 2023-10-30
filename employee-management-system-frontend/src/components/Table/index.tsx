"use client"
import { TableContentProps, TableProps } from '@/types/table'
import TableContent from './content';
import TableHeader from './header';
import { useGetAllEmployees } from '@/hooks/useGetAllEmployees';

const Table = () => {
    const { tableContentList } = useGetAllEmployees();

    return (
        <div className="relative overflow-x-auto w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <TableHeader />
                {
                    tableContentList.map((element: TableContentProps) => (
                        <TableContent
                            key={element.id}
                            id={element.id}
                            firstName={element.firstName}
                            lastName={element.lastName}
                            email={element.email}
                        />
                    ))
                }
            </table>
        </div>
    )
}

export default Table