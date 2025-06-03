import Link from "next/link"

export interface User {
  id: number
  firstName: string
  lastName: string
  age: number
  gender: string
  email: string
}

const fetchUsers = async() => {
  const res = await fetch("http://localhost:3001/api/users")
  const data = await res.json()
  return data.users
}

const page = async () => {
  const users: User[] = await fetchUsers()

  console.log(users)
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.firstName}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page