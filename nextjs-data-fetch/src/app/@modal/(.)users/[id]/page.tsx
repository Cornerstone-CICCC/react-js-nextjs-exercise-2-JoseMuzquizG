import { User } from "@/app/users/page"
import Link from "next/link"

type Props = {
  params: Promise<{id: string}>
}

const page = async ({params}: Props) => {
  const { id } = await params
  const res = await fetch(`http://localhost:3001/api/users/${id}`)
  const data: User = await res.json()

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/50 flex items-center justify-center">
      <div className="bg-black rounded-lg text-white p-6 w-1/3 flex flex-col items-center gap-5">
        <h1>USER: {data.id}</h1>
        <h2>{data.firstName} {data.lastName}</h2>
        <div className="flex gap-4">
          <a href={`/users/${id}`} className="inline-block bg-gray-200 rounded-md text-black px-3 py-2">View User</a>
          <a href="/users" className="inline-block bg-gray-200 rounded-md text-black px-3 py-2">Close</a>
        </div>
      </div>
    </div>
  )
}

export default page