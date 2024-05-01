import { useQuery } from "react-query"
import { IFindAllUserUseCase } from "../../../../../../modules/users/domain/usecases/find-all-users.usecase.interface"

export const useFindAllUsers = (findAll: IFindAllUserUseCase) => {
  
  const list = useQuery('usersData', () => findAll.execute())
  
  return {
    listFindAll: list.data,
    isLoadingFindAll: list.isLoading,
    errorFindAll: list.error
  }
}
