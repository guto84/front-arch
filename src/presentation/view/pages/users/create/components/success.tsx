import { User } from "../../../../../../modules/users/domain/entities/user.entity"

type Props = {
  data: User | undefined
}

export const Success = ({data}: Props) => {
  return <>
    {data && 
      <div>
        <h4>Cadastrado com sucesso!</h4>
        <p>id: {data.id}</p>
        <p>name: {data.name}</p>
        <p>Email: {data.email}</p>
      </div>
    }
  </>

}