"use client";
import { BASE_URL } from '@/hooks/constants';
import Form from '../Form';
import { useEmployeeForm } from '@/hooks/useEmployeeForm';
import { useGetEmployee } from '@/hooks/useGetEmployee';

const EditEmployeeForm = ({ id }: { id: string }) => {

    const { handleSubmit, toast, setToast, status } = useEmployeeForm({ baseUrl: `${BASE_URL}/${id}`, method: 'PUT' });

    return (
        <Form
            handleSubmit={handleSubmit}
            toast={toast}
            setToast={setToast}
            status={status}
            id={id}
        />
    )
}

export default EditEmployeeForm