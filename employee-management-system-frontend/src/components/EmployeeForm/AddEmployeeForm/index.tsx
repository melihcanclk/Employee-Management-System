"use client";
import { BASE_URL } from '@/hooks/constants';
import { useEmployeeForm } from '@/hooks/useEmployeeForm';
import Form from '../Form';

const AddEmployeeForm = () => {

    const { handleSubmit, toast, setToast, status } = useEmployeeForm({ baseUrl: BASE_URL, method: 'POST' });

    return (
        <Form
            handleSubmit={handleSubmit}
            toast={toast}
            setToast={setToast}
            status={status}
        />
    )
}

export default AddEmployeeForm