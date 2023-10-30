import AddEmployeeForm from "@/components/EmployeeForm/AddEmployeeForm";

export default function AddEmployee() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full p-24">
      <h1 className="pb-4 text-xl">
        Add employee
      </h1>
      <AddEmployeeForm />
    </main>
  )
}
