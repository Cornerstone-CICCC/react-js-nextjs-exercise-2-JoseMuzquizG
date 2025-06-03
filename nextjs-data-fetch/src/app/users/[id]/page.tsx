import { User } from "../page"

type Props = {
  params: Promise<{id: string}>
}

const page = async ({params}: Props) => {
  const { id } = await params
  const res = await fetch(`http://localhost:3001/api/users/${id}`)
  const data: User = await res.json()

  return (
    <div>
      <h1>User information:</h1>
      <h2>{data.firstName} {data.lastName}. {data.age} years old.</h2>
      <h3>Gender: {data.gender}</h3>
      <p>{data.email}</p>
    </div>
  )
}

export default page