import { ICreateUsersUseCase } from "../../../../../modules/users/domain/usecases/create-users.usecase.interface"
import { Form } from "./components/form"
import { Success } from "./components/success"
import { useCreateUsers } from "./store/create-users.hook"

type Props = {
  create: ICreateUsersUseCase
}

export const CreateUsers = ({ create }: Props) => {

  const {
    createUsers,
    isLoading,
    data,
    error,
  } = useCreateUsers(create)

  if (isLoading) return <div>Loading...</div>

  if (error) return `An error has occurred: ${error}`

  return <>
    <Form submit={createUsers} />
    <Success data={data} />
  </>
}
