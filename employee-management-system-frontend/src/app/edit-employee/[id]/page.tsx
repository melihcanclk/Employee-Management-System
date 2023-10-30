export default function EditEmployee({ params }: { params: { id: string } }) {
    const { id } = params;

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="pb-4 text-xl">
                Edit employee {id}
            </h1>
        </main>
    )

}