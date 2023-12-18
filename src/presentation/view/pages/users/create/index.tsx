import { useMutation } from "react-query"
import { CreateUserInput, ICreateUsersUseCase } from "../../../../../modules/users/domain/usecases/create-users.usecase.interface"
import { Form } from "./form"

type Props = {
  create: ICreateUsersUseCase
}

export const CreateUsers = ({ create }: Props) => {

  const handleSubmit = useMutation((input: CreateUserInput) => create.execute(input))

  if (handleSubmit.isLoading) return 'Loading...'

  return <>
    <Form submit={handleSubmit.mutate} />
    {handleSubmit.data && 
      <div>
        <h4>Cadastrado com sucesso!</h4>
        <p>id: {handleSubmit.data.id}</p>
        <p>name: {handleSubmit.data.name}</p>
        <p>Email: {handleSubmit.data.email}</p>
      </div>
    }
  </>
}
