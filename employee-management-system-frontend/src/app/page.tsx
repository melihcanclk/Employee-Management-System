import Table from "@/components/Table";
import { useGetAllEmployees } from "@/hooks/useGetAllEmployees";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="pb-4">
        List of employees
      </h1>
      <Table />
    </main>
  )
}
