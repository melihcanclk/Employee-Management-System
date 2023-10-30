import { Employee } from '@/types/employee';
import { useEffect, useState } from 'react'
import { BASE_URL } from '@/hooks/constants';

export const useGetEmployee = ({ id }: { id: string }) => {

    const [employee, setEmployee] = useState<Employee | null>(null);

    useEffect(() => {
        if (id && id !== '') {
            fetch(`${BASE_URL}/${id}`)
                .then(res => res.json())
                .then(data => {
                    setEmployee(data)
                    console.log({ data })
                })
        }

    }, [id])

    return { employee };
}
