import { User } from "../../../../../../../modules/users/domain/entities/user.entity"

type Props = {
  data: User[] | undefined
  isLoading: boolean
  error: unknown
  handleDetails: (id: number) => void
}

export const TableComponent = ({ data, isLoading, error, handleDetails }: Props) => {
  if (isLoading) return <div>Loading...</div>

  if (error) return `An error has occurred: ${error}`

  return (
    <div>
      <h1>List users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user: User) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <button onClick={() => handleDetails(user.id)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
