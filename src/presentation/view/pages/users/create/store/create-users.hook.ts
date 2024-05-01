import { useMutation } from "react-query"
import { CreateUserInput, ICreateUsersUseCase } from "../../../../../../modules/users/domain/usecases/create-users.usecase.interface"

export const useCreateUsers = (create: ICreateUsersUseCase) => {
  
  const mutation = useMutation((input: CreateUserInput) => create.execute(input))
  
  return {
    createUsers: mutation.mutate,
    isLoading: mutation.isLoading,
    data: mutation.data,
    error: mutation.error,
  }
}
