import { httpClientAdapter } from "../../../../../../../infra/adapters/http-client.adapter"
import { FindAllUsersUseCase } from "../../../../../../../modules/users/usecases/find-all-users.usecase"
import { useFindAllUsers } from "../../store/find-all-users.hook"
import { useUserStore } from "../../store/user.store"
import { TableComponent } from "./table.component"

export const Table = () => {
  const findAll = new FindAllUsersUseCase(httpClientAdapter)

  const {
    listFindAll,
    isLoadingFindAll,
    errorFindAll,
  } = useFindAllUsers(findAll)

  const updateUserId = useUserStore(state => state.updateUserId)

  return <>
    <TableComponent
      data={listFindAll}
      isLoading={isLoadingFindAll}
      error={errorFindAll}
      handleDetails={updateUserId}
    />
  </>
}
