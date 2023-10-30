export type FormProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    setToast: (value: boolean) => void,
    status: {
        message: string,
        error: boolean
    },
    toast: boolean
}